<template>
  <layout :menu-id="1">
    <div
      class="split left"
      :style="`border: 0px solid red; width: ${this.LEFT_PANE_WIDTH}px; top: ${this.HEADER_HEIGHT}px; height: ${this.windowHeight - this.HEADER_HEIGHT}px`"
    >
      <div :style="`overflow: auto; width: 100%; border: 0px solid pink`">
        <v-layout column align-content-start class="pa-1">
          <div class="ma-2">
            <h3 style="color: #333">
              {{selectedExpressWay == null ? 'เลือกสายทาง' : selectedExpressWay.name}}
              <br/>
              <span style="font-weight: normal; font-size: smaller; color: #777">
                {{gateInList && gateInList.length !== 0 ? `(${gateInList.length} ต้นทาง)` : ''}}
              </span>
            </h3>
            <!--<div>{{selectedExpressWay.chunk}}</div>-->
          </div>
          <v-flex class="ml-2 mr-2 mb-1">
            <v-select
              v-model="selectedExpressWay"
              :items="expressWayList"
              @change="handleSelectExpressWay"
              label="เลือกสายทาง"
              single-line
            />
          </v-flex>
          <div v-if="isLoadingGateIn" style="text-align: center">
            <v-progress-circular
              class="ma-1"
              indeterminate
              color="primary"
            />
          </div>
          <div v-if="gateInList && gateInList.length > 0 && !isLoadingGateIn">
            <template v-for="gateIn in gateInList">
              <v-card
                class="gate-in-class"
                :key="'gate-in-' + gateIn.gate_in_id"
                :hover="true"
                :dark="gateIn.selected"
                @click="() => handleClickGateIn(gateIn, false)"
                @mouseover="() => handleHoverGateInCard(gateIn)"
                @mouseout="() => handleHoverGateInCard(null)"
              >
                <v-card-title>ID: {{gateIn.gate_in_id}} - {{gateIn.gate_in_name}}</v-card-title>
                <v-card-subtitle>{{gateIn.cost_tolls_count}} ปลายทาง</v-card-subtitle>
              </v-card>
              <div
                class="ml-2 mt-1 mb-3"
                :key="'cost-toll-' + gateIn.gate_in_id"
              >
                <div v-if="gateIn.selected && isLoadingCostToll" style="text-align: center">
                  <v-progress-circular
                    class="ma-1"
                    indeterminate
                    color="primary"
                  />
                </div>
                <div v-if="gateIn.selected && gateIn.costTollList != null">
                  <v-chip
                    class="ma-1"
                    v-for="costToll in gateIn.costTollList"
                    :key="costToll.id"
                    :color="costToll.selected ? 'primary' : ''"
                    @click="() => handleClickCostToll(costToll)"
                    @mouseover="() => handleHoverCostTollChip(costToll)"
                    @mouseout="() => handleHoverCostTollChip(null)"
                  >
                    {{costToll.name}}
                  </v-chip>
                </div>
              </div>
            </template>
          </div>
        </v-layout>
      </div>
    </div>

    <div
      class="split right"
      :style="`border: 0px solid blue; left: ${this.LEFT_PANE_WIDTH}px; width: ${this.windowWidth - this.LEFT_PANE_WIDTH}px; top: ${this.HEADER_HEIGHT}px; height: ${this.windowHeight - this.HEADER_HEIGHT}px`"
    >
      <gmap-map
        ref="mapRef"
        :center="{lat: 13.7850, lng: 100.6518}"
        :zoom="10"
        map-type-id="roadmap"
        style="width: 100%; height: 100%"
      >
        <template v-if="selectedGateIn != null">
          <gmap-marker
            :ref="'gateInMarkerRef'"
            :key="'gate-in-' + selectedGateIn.gate_in_id"
            :position="{lat: selectedGateIn.lat, lng: selectedGateIn.lng}"
            :icon="'http://maps.google.com/mapfiles/ms/icons/red-dot.png'"
            :opacity="1.0"
            :clickable="true"
            :draggable="false"
            @click="() => handleClickGateIn(selectedGateIn, true)"
            @mouseover="() => {handleHoverGateInMarker(selectedGateIn)}"
            @mouseout="() => {handleHoverGateInMarker(null)}"
          />
        </template>
        <template v-if="selectedGateIn == null">
          <gmap-marker
            :ref="'gateInMarkerRef'"
            v-for="gateIn in gateInList"
            :key="'gate-in-' + gateIn.gate_in_id"
            :position="{lat: gateIn.lat, lng: gateIn.lng}"
            :icon="'http://maps.google.com/mapfiles/ms/icons/red-dot.png'"
            :opacity="gateIn.hovered ? 1.0 : 0.4"
            :clickable="true"
            :draggable="false"
            @click="() => handleClickGateIn(gateIn, true)"
            @mouseover="() => {handleHoverGateInMarker(gateIn)}"
            @mouseout="() => {handleHoverGateInMarker(null)}"
          />
        </template>
        <gmap-marker
          :ref="'costTollMarkerRef'"
          v-for="costToll in costTollList"
          :key="'cost-toll-' + costToll.id"
          :position="{lat: costToll.lat, lng: costToll.lng}"
          :icon="'http://maps.google.com/mapfiles/ms/icons/' + (costToll.selected ? 'blue' : 'blue') + '-dot.png'"
          :opacity="(costToll.selected || costToll.hovered) ? 1.0 : 0.4"
          :clickable="true"
          :draggable="false"
          @click="() => handleClickCostToll(costToll)"
          @mouseover="() => {handleHoverCostTollMarker(costToll)}"
          @mouseout="() => {handleHoverCostTollMarker(null)}"
        />
        <gmap-marker
          :ref="'partTollMarkerRef'"
          v-for="partToll in partTollList"
          :key="'part-toll-' + partToll.id"
          :position="{lat: partToll.lat, lng: partToll.lng}"
          :_icon="'http://maps.google.com/mapfiles/ms/icons/' + (partToll.selected ? 'green' : 'green') + '-dot.png'"
          :clickable="true"
          :draggable="false"
          @click="() => {}"
          @mouseover="() => {handleHoverPartTollMarker(partToll)}"
          @mouseout="() => {handleHoverPartTollMarker(null)}"
        />
        <gmap-info-window
          :options="{
            maxWidth: 300,
            pixelOffset: {
              width: 0,
              height: -35,
            },
          }"
          :position="infoWindow.position"
          :opened="infoWindow.open"
          @closeclick="() => infoWindow.open = false">
          <div v-html="infoWindow.template"/>
        </gmap-info-window>
        <gmap-polyline
          ref="polyline"
          v-if="path"
          :path="path"
          :options="{strokeColor: '#008000', strokeOpacity: 0.4, strokeWeight: 5}"
        />
      </gmap-map>

      <v-snackbar
        :value="selectedExpressWay == null"
        :timeout="0"
      >
        <div style="width: 100%; text-align: center;">เลือกสายทาง</div>
      </v-snackbar>

      <v-snackbar
        :value="selectedExpressWay != null && selectedGateIn == null"
        :timeout="0"
      >
        <div>
          <div class="d-flex align-center justify-center">
            <img
              src="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
            />
            <span>เลือกทางเข้า (ต้นทาง)</span>
          </div>
          <ul class="mt-2">
            <li>โดยคลิกหมุดสีแดง หรือคลิก card ทางซ้าย</li>
          </ul>
        </div>
      </v-snackbar>

      <v-snackbar
        :value="selectedGateIn != null && selectedCostToll == null"
        :timeout="0"
      >
        <div>
          <div class="d-flex align-center justify-center">
            <img
              src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            />
            <span>เลือกทางออก (ปลายทาง)</span>
          </div>
          <ul class="mt-2">
            <li>โดยคลิกหมุดสีน้ำเงิน หรือคลิกปุ่มทางซ้าย</li>
            <li>ถ้าหากต้องการกลับไปเลือกทางเข้าอื่น ให้คลิกหมุดสีแดงซ้ำอีกที</li>
          </ul>
        </div>
      </v-snackbar>

      <v-snackbar
        :value="selectedCostToll != null"
        :timeout="0"
      >
        <div v-if="selectedCostToll != null">
          <div class="d-flex align-center justify-center">
            <img
              src="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
            />
            <span>
              {{this.selectedGateIn.gate_in_name}}
            </span>
            <span style="width: 30px; color: yellow; text-align: center">&nbsp;&nbsp;&nbsp;➜&nbsp;&nbsp;&nbsp;</span>
            <span>
              {{this.selectedCostToll.name}}
            </span>
            <img
              src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            />
          </div>
          <!--<table style="width: 240px">
            <tr>
              <th align="left">ประเภทรถ</th>
              <th align="right">ค่าผ่านทาง (บาท)</th>
            </tr>
            <tr>
              <td align="left">4 ล้อ</td>
              <td align="right">{{this.hoveredCostToll.cost_less4}}</td>
            </tr>
            <tr>
              <td align="left">6-10 ล้อ</td>
              <td align="right">{{this.hoveredCostToll.cost_4to10}}</td>
            </tr>
            <tr>
              <td align="left">เกิน 10 ล้อ</td>
              <td align="right">{{this.hoveredCostToll.cost_over10}}</td>
            </tr>
          </table>-->
          <ul class="mt-2">
            <li>รถ 4 ล้อ : {{this.selectedCostToll.cost_less4}} บาท</li>
            <li>รถ 6-10 ล้อ : {{this.selectedCostToll.cost_4to10}} บาท</li>
            <li>รถเกิน 10 ล้อ : {{this.selectedCostToll.cost_over10}} บาท</li>
          </ul>

          <div
            class="mt-2"
            v-if="this.selectedCostToll.distance != null"
          >
            ระยะทาง {{this.selectedCostToll.distance.replace('km', 'กม.')}}, ใช้เวลาเดินทาง {{this.selectedCostToll.duration.replace('hour', 'ชม.').replace('mins', 'นาที')}}
          </div>
        </div>
      </v-snackbar>
    </div>
  </layout>
</template>

<script>
  import Vue from 'vue';
  import VueWindowSize from 'vue-window-size';
  import Layout from '../layouts/default';
  import {gmapApi} from 'vue2-google-maps';
  import '../styles/main.css';

  const HEADER_HEIGHT = 65;
  const LEFT_PANE_WIDTH = 325;
  const API_BASED_URL = '/api';
  const axios = require('axios').default;

  Vue.use(VueWindowSize);
  const EXPRESS_WAY_LIST = [
    {
      "id": 1,
      "name": "ทางพิเศษเฉลิมมหานคร",
    },
    {
      "id": 9,
      "name": "ทางพิเศษฉลองรัช",
    },
    {
      "id": 13,
      "name": "ทางพิเศษบูรพาวิถี",
    },
    {
      "id": 19,
      "name": "ทางพิเศษศรีรัช",
    },
    {
      "id": 27,
      "name": "ทางพิเศษกาญจนาภิเษก",
    },
    {
      "id": 29,
      "name": "ทางพิเศษอุดรรัถยา",
    },
    {
      "id": 31,
      "name": "ทางพิเศษศรีรัช-วงแหวนรอบนอก",
    },
  ];
  EXPRESS_WAY_LIST.forEach(expressWay => {
    expressWay.toString = () => {
      return expressWay.name;
    };
  });

  export default {
    name: "cost_tolls",
    components: {
      Layout,
    },
    data: () => {
      return {
        HEADER_HEIGHT,
        LEFT_PANE_WIDTH,
        alertMessage: null,
        expressWayList: EXPRESS_WAY_LIST,
        selectedExpressWay: null,
        gateInList: [],
        isLoadingGateIn: false,
        isLoadingCostToll: false,
        path: null,
        infoWindow: {
          position: null,
          open: false,
          template: 'ด่านเก็บเงิน',
        },
        //showCostTollInfo: false,
        //hoveredCostToll: null,
      };
    },
    computed: {
      google: gmapApi,
      selectedGateIn: function () {
        const filteredGateIn = this.gateInList.filter(gateIn => gateIn.selected);
        return filteredGateIn.length === 0 ? null : filteredGateIn[0];
      },
      selectedCostToll: function () {
        const selectedGateIn = this.selectedGateIn;
        if (selectedGateIn != null) {
          if (selectedGateIn.costTollList != null) {
            const filteredCostToll = selectedGateIn.costTollList.filter(costToll => costToll.selected);
            if (filteredCostToll.length === 0) {
              console.log('Selected Cost Toll: NULL');
            } else {
              console.log('Selected Cost Toll: OK');
            }
            return filteredCostToll.length === 0 ? null : filteredCostToll[0];
          }
          console.log('Selected Cost Toll: NULL');
          return null
        }
        console.log('Selected Cost Toll: NULL');
        return null;
      },
      costTollList: function () {
        let costTollList = [];
        this.gateInList.forEach(gateIn => {
          if (gateIn.selected) {
            if (gateIn.costTollList != null) {
              costTollList = gateIn.costTollList;
            }
          }
        });
        return costTollList;
      },
      partTollList: function () {
        const selectedCostToll = this.selectedCostToll;
        return selectedCostToll != null ? selectedCostToll.part_toll_markers : null;
      },
    },
    created: function () {
      window.addEventListener('resize', this.handleChangeWindowSize);
    },
    destroyed: function () {
      window.removeEventListener('resize', this.handleChangeWindowSize);
    },
    mounted: function () {
    },
    methods: {
      handleChangeWindowSize: function () {
      },
      handleClickCard: function (chunk) {
        console.log(chunk);
      },
      handleSelectExpressWay: function () {
        this.path = null;
        this.isLoadingGateIn = true;

        axios.get(
          `${API_BASED_URL}/gate_in/${this.selectedExpressWay.id}`,
          {
            //headers: {Authorization: `Token ${AUTH_TOKEN}`}
          })
          .then(response => {
            this.isLoadingGateIn = false;
            console.log(response.data);
            const gateInList = response.data.data_list;
            gateInList.forEach((gateIn, index) => {
              gateIn.index = index;
              gateIn.selected = false;
              gateIn.hovered = false;
              gateIn.costTollList = null;
            });
            this.gateInList = gateInList;
          })
          .catch((error) => {
            this.isLoadingGateIn = false;
            console.log('Error: ' + error);
            alert('Error: เกิดข้อผิดพลาดในการเชื่อมต่อ Server');
          });
      },
      handleClickGateIn: function (clickedGateIn, scroll) {
        this.path = null;

        if (clickedGateIn.selected) {
          clickedGateIn.selected = false;
          //this.$refs.gateInMarkerRef[clickedGateIn.index].$markerObject.setAnimation(null);
          return;
        }

        this.gateInList.forEach((gateIn) => {
          gateIn.selected = false;
          //this.$refs.gateInMarkerRef[index].$markerObject.setAnimation(null);
        });
        clickedGateIn.selected = true;
        //this.$refs.gateInMarkerRef[clickedGateIn.index].$markerObject.setAnimation(google.maps.Animation.BOUNCE);

        if (clickedGateIn.costTollList == null) {
          this.isLoadingCostToll = true;
          axios.get(
            `${API_BASED_URL}/cost_toll_by_gate_in/${clickedGateIn.gate_in_id}`,
            {
              //headers: {Authorization: `Token ${AUTH_TOKEN}`}
            })
            .then(response => {
              this.isLoadingCostToll = false;
              console.log(response.data);
              const costTollList = response.data.data_list;
              costTollList.forEach((costToll, index) => {
                costToll.index = index;
                costToll.selected = false;
                costToll.hovered = false;
              });
              clickedGateIn.costTollList = costTollList;

              setTimeout(() => {
                if (scroll) {
                  this.scrollCard();
                }
              }, 400)
            })
            .catch((error) => {
              this.isLoadingCostToll = false;
              console.log('Error: ' + error);
              alert('Error: เกิดข้อผิดพลาดในการเชื่อมต่อ Server');
            });
        } else {
          clickedGateIn.costTollList.forEach(costToll => {
            costToll.selected = false;
          })
        }

        /* ถ้าคลิก card จะ pan map และ scroll card,
           ถ้าคลิก marker จะ scroll card แต่ไม่ pan map */
        if (scroll) {
          this.scrollCard();
        }

        // pan map
        if (!scroll) {
          this.$refs.mapRef.$mapPromise.then(map => {
            map.panTo({lat: clickedGateIn.lat, lng: clickedGateIn.lng});
          });
        }
      },
      scrollCard: function () {
        const index = this.gateInList.findIndex(gateIn => {
          return gateIn.selected;
        });
        const el = this.$el.getElementsByClassName('gate-in-class')[index];
        if (el) el.scrollIntoView();
      },
      handleHoverGateInCard: function (hoveredGateIn) {
        this.gateInList.forEach(gateIn => {
          gateIn.hovered = false;
        });

        if (hoveredGateIn) {
          hoveredGateIn.hovered = true;
        }
      },
      handleClickCostToll: function (clickedCostToll) {
        this.path = null;

        if (clickedCostToll.selected) {
          clickedCostToll.selected = false;
          //this.$refs.costTollMarkerRef[clickedCostToll.index].$markerObject.setAnimation(null);
          return;
        }

        const origin = {};
        this.gateInList.forEach(gateIn => {
          if (gateIn.selected) {
            origin.lat = gateIn.lat;
            origin.lng = gateIn.lng;
          }

          if (gateIn.costTollList != null) {
            gateIn.costTollList.forEach((costToll) => {
              costToll.selected = false;
              //this.$refs.costTollMarkerRef[index].$markerObject.setAnimation(null);
            });
          }
        });
        clickedCostToll.selected = true;
        //this.$refs.costTollMarkerRef[clickedCostToll.index].$markerObject.setAnimation(google.maps.Animation.BOUNCE);

        clickedCostToll.distance = null;
        clickedCostToll.duration = null;

        const {lat, lng} = origin;
        this.getDirections(
          clickedCostToll,
          {lat, lng},
          {lat: clickedCostToll.lat, lng: clickedCostToll.lng}
        );
      },
      handleHoverCostTollChip: function (hoveredCostToll) {
        this.selectedGateIn.costTollList.forEach(costToll => {
          costToll.hovered = false;
        });

        if (hoveredCostToll) {
          hoveredCostToll.hovered = true;
        }
      },

      //https://developers.google.com/maps/documentation/javascript/directions
      getDirections: function (costToll, origin, destination) {
        const directionsService = new this.google.maps.DirectionsService();
        //const directionsRenderer = new this.google.maps.DirectionsRenderer();

        const request = {
          origin,
          destination,
          travelMode: 'DRIVING',
        };
        const self = this;
        directionsService.route(request, function (result, status) {
          if (status === 'OK') {
            console.log('Directions Result');
            console.log(result);

            self.path = result.routes[0].overview_path;
            costToll.distance = result.routes[0].legs[0].distance.text;
            costToll.duration = result.routes[0].legs[0].duration.text;

            /*const {south, east, north, west} = result.routes[0].bounds;

            const bounds = new self.google.maps.LatLngBounds(
              {lat: south, lng: west},
              {lat: north, lng: east},
            );
            self.$refs.mapRef.$mapPromise.then(map => {
              map.fitBounds(bounds);
            });*/

            /*self.path = [
              {lat: 13.896847075861, lng: 100.68428200186},
              {lat: 13.8536866, lng: 100.6418399},
            ];*/
            //directionsRenderer.setDirections(result);
          }
        });

        /*axios.get(
          `https://maps.googleapis.com/maps/api/directions/json?key=AIzaSyCrBhuovlx9Wk2v7mQNvCg4JIL_affg0ks&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}`,
          {
            //headers: {Authorization: `Token ${AUTH_TOKEN}`}
          })
          .then(response => {
            console.log(response.data);
            if (response.data.status === 'OK') {
              const encodedPath = response.data.routes[0].overview_polyline;
              this.path = this.google.maps.geometry.encoding.decodePath(encodedPath);
            } else {
              alert('Error: เกิดข้อผิดพลาดในการค้นหาเส้นทาง');
            }
          })
          .catch((error) => {
            alert('Error: เกิดข้อผิดพลาดในการเชื่อมต่อ Server');
            console.log('Error: ' + error);
          });*/
      },
      decodeLevels: function (encodedLevels) {
        const decodedLevels = [];

        for (let i = 0; i < encodedLevels.length; ++i) {
          let level = encodedLevels.charCodeAt(i) - 63;
          decodedLevels.push(level);
        }
        return decodedLevels;
      },
      handleHoverGateInMarker: function (gateIn) {
        if (gateIn) {
          const {lat, lng} = gateIn;
          this.infoWindow.position = {lat, lng};
          this.infoWindow.open = true;
          this.infoWindow.template = `${gateIn.gate_in_name} (${gateIn.cost_tolls_count} ปลายทาง)<br/>lat: ${gateIn.lat}, lng: ${gateIn.lng}`;
        } else {
          this.infoWindow.open = false;
        }

        this.handleHoverGateInCard(gateIn);
      },
      handleHoverCostTollMarker: function (costToll) {
        if (costToll) {
          const {lat, lng} = costToll;
          this.infoWindow.position = {lat, lng};
          this.infoWindow.open = true;
          this.infoWindow.template = `${costToll.name}<br/>lat: ${costToll.lat}, lng: ${costToll.lng}`;
        } else {
          this.infoWindow.open = false;
        }

        this.handleHoverCostTollChip(costToll);
      },
      handleHoverPartTollMarker: function (partToll) {
        if (partToll) {
          const {lat, lng} = partToll;
          this.infoWindow.position = {lat, lng};
          this.infoWindow.open = true;
          this.infoWindow.template = `${partToll.name}<br/>lat: ${partToll.lat}, lng: ${partToll.lng}`;
        } else {
          this.infoWindow.open = false;
        }
      },
    }
  }
</script>

<style scoped>
  .split {
    position: fixed;
    height: 100%;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }

  .vue-map-container .gm-ui-hover-effect {
    display: none !important;
  }
</style>
