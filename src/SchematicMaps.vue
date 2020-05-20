<template>
  <v-app>
    <div style="flex: 1; display: flex; flex-direction: row; align-items: stretch; padding: 5px; border: 0px solid red;">
      <div :style="`overflow: auto; width: 620px; border: 0px solid pink`">
        <v-alert
          v-if="windowWidth < 1366"
          border="top"
          colored-border
          type="error"
          elevation="2"
          dismissible
        ><span style="white-space: pre;">การแสดงผลหน้านี้เหมาะสำหรับจอกว้าง 1,366 pixel ขึ้นไป</span></v-alert>
        <v-alert
          v-if="alertMessage != null"
          border="top"
          colored-border
          type="success"
          elevation="2"
          dismissible
        ><span style="white-space: pre;">{{alertMessage}}</span></v-alert>
        <v-alert
          v-if="selectedExpressWay != null"
          border="top"
          colored-border
          type="info"
          elevation="2"
          dismissible
        ><span>คลิกที่ card เพื่อดูเส้นของ chunk นั้นบน Schematic Map</span>
        </v-alert>
        <v-layout column align-content-start class="pa-1">
          <div class="mt-1">
            <h3 style="color: #333">
              {{selectedExpressWay == null ? 'เลือกสายทาง' : selectedExpressWay.name}}
              <span
                style="font-size: smaller; color: #aaa">{{selectedExpressWay == null ? '' : `(${selectedExpressWay.chunks.length} chunks, ${getNumPoints(selectedExpressWay.chunks)} points)`}}</span>
            </h3>
            <!--<div>{{selectedExpressWay.chunk}}</div>-->
          </div>
          <v-flex class="mb-2 mt-1">
            <v-select
              v-model="selectedExpressWay"
              :items="expressWayList"
              @change="handleSelectExpressWay"
              label="เลือกสายทาง"
              single-line
            />
          </v-flex>
          <div v-if="selectedExpressWay != null">
            <v-card
              class="mb-3"
              v-for="chunk in selectedExpressWay.chunks"
              :key="chunk.chunk_id"
              :color="getCardColor(chunk)"
              @click="() => handleClickCard(chunk)"
              :hover="true"
              :dark="chunk === selectedChunk"
            >
              <v-list-item>
                <v-list-item-content>
                  <!--<div class="overline mb-4">OVERLINE</div>-->
                  <v-list-item-title class="headline mb-1">Chunk ID: {{chunk.chunk_id}}</v-list-item-title>
                  <v-list-item-subtitle>
                    <strong>{{chunk.points.length}} Point{{chunk.points.length > 1 ? 's' : ''}}</strong> - ID:
                    {{
                    chunk.points.reduce((total, point, index) => {
                    return total.concat((index === 0 ? '' : ', ').concat(`${point.point_id}`));
                    }, '')
                    }}
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="40"
                >
                  <v-img
                    :src="getCardImageSource(chunk) || require('./assets/ic_error256.png')"
                    :contain="true"
                    width="40px"
                    height="40px"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular indeterminate color="grey"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-list-item-avatar>
              </v-list-item>

              <!--<v-card-title>Chunk ID: {{chunk.chunk_id}}</v-card-title>
              <v-card-subtitle>
                <strong>{{chunk.points.length}} Point{{chunk.points.length > 1 ? 's' : ''}}</strong> - ID:
                {{
                chunk.points.reduce((total, point, index) => {
                return total.concat((index === 0 ? '' : ', ').concat(`${point.point_id}`));
                }, '')
                }}
              </v-card-subtitle>-->
              <v-card-text v-if="chunk.name_a != null">
                <v-chip
                  class="pa-4"
                  color="primary"
                >
                  {{chunk.name_a}}
                </v-chip>
                <v-icon :color="chunk === selectedChunk ? '#ccc' : '#666'">
                  mdi-arrow-right-thick
                </v-icon>
                <v-chip
                  class="pa-4 mr-2"
                  color="primary"
                >
                  {{chunk.name_b}}
                </v-chip>
              </v-card-text>
              <v-card-text v-if="chunk.name_a == null">
                <v-chip
                  class="pa-4"
                >
                  {{chunk.name}}
                </v-chip>
              </v-card-text>
              <!--<v-card-actions>
                <v-btn
                  text
                  color="orange"
                  @click="() => handleClickCardButton(chunk)"
                >{{chunk.points.length}} Point{{chunk.points.length > 1 ? 's' : ''}}
                </v-btn>
              </v-card-actions>-->
            </v-card>
          </div>
        </v-layout>
      </div>
    </div>

    <div :style="`position: fixed; top: ${-200 * mapScale}px; left: 630px; transform: scale(${mapScale}); transform-origin: left top;`">
      <img src="https://alg.exat.co.th/static/dashboard/schematic_map/background_dev.png" alt="">
      <div id="mapData" class="overlay">
        <div
          v-for="road in filteredMapImageDataList"
          :key="road.id"
          :data-road-id="road.id">
          <img
            :ref="`r${road.id}-img${image.id}`"
            class="chunk"
            v-for="image in road.img"
            :key="image.id"
            :data-id="image['@data-id']"
            :data-name="image['@data-name']"
            :data-angle="image['@data-angle']"
            :src="getImageSource(image)"
            :title="image['@title']"
            :alt="image['@title']"
            :style="getImageStyle(image)"
          />
        </div>
        <img
          ref="arrow"
          v-if="selectedDomImage != null"
          class="arrow"
          :src="require('./assets/ic_arrow-w60.png')"
          :style="arrowPosition"
        />
        <!--<canvas id="myCanvas" class="overlay">
          Your browser does not support the HTML5 canvas tag.
        </canvas>-->
      </div>
    </div>
  </v-app>
</template>

<script>
  import Vue from 'vue';
  import VueWindowSize from 'vue-window-size';
  import {getExpressWayList} from './data/maps';
  import {getMapImageDataList} from './data/alg_schematic_map';
  //import Layout from './layouts/default';

  Vue.use(VueWindowSize);
  const FILTER_STYLE = ' filter: invert(100%);';

  export default {
    name: "test",
    components: {
      //Layout,
    },
    data: () => {
      return {
        //ctx: null,
        alertMessage: null,
        expressWayList: getExpressWayList(),
        mapImageDataList: getMapImageDataList(),
        selectedExpressWay: null,
        selectedChunk: null,
        filterStyle: '',
        blinkTimer: null,
        selectedDomImage: null,
        //mapPosition: {top: -70, left: 630},
      };
    },
    computed: {
      filteredMapImageDataList: function () {
        if (this.selectedExpressWay == null) return [];

        return this.mapImageDataList.filter(mapImageData => {
          return mapImageData.id === this.selectedExpressWay.id;
        });
        //return this.mapImageDataList;
      },
      mapScale: function () {
        return (this.windowHeight + (420 * (this.windowHeight / 2160))) / 2160;
      },
      arrowPosition: function () {
        const top = this.selectedDomImage.offsetTop + (this.selectedDomImage.offsetHeight - 60) / 2;
        const left = this.selectedDomImage.offsetLeft - 60 - 5;
        return `top: ${top}px; left: ${left}px`;
      },
      /*listWidth: function () {
          return (this.windowWidth > 1280) ? 620 : 620 - (1366 - 1280);
      }*/
    },
    created: function () {
      window.addEventListener('resize', this.handleChangeWindowSize);

      let imageChunkCount = 0;
      let dataChunkCount;
      this.mapImageDataList.forEach(road => {
        imageChunkCount += road.img.length;

        road.img.forEach(image => {
          const imageName = image['@data-name'];
          console.log(`${imageName} in Road ${road.id}`);

          let countAll = 0;
          dataChunkCount = 0;
          this.expressWayList.forEach(expressWay => {
            dataChunkCount += expressWay.chunks.length;

            const count = expressWay.chunks.filter(chunk => {
              return chunk.name.trim() === imageName.trim();
            }).length;
            countAll += count;

            if (count === 1) {
              console.log(road.id === expressWay.id ? 'OK' : 'NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
            }
            //console.log(`----- Express way ID: ${expressWay.id} - ${count}`);
          });

          console.log(`----- ${countAll}` + (countAll !== 1 ? '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!' : ''));
        });
      });

      let msg = '----------\n';
      if (imageChunkCount < dataChunkCount) {
        msg += `มีข้อมูลใน API จำนวน ${dataChunkCount - imageChunkCount} chunks ที่ไม่ได้สัมพันธ์กับเส้นบน Schematic Map`;
      } else if (imageChunkCount > dataChunkCount) {
        msg += `มีเส้นบน Schematic Map จำนวน ${imageChunkCount - dataChunkCount} เส้น ที่ไม่ได้สัมพันธ์กับข้อมูล chunk ใดๆใน API`;
      } else {
        msg = '';
      }
      this.alertMessage = `Total image chunks: ${imageChunkCount}\nTotal API data chunks: ${dataChunkCount}\n${msg}`;
    },
    destroyed: function () {
      window.removeEventListener('resize', this.handleChangeWindowSize);
    },
    mounted: function () {
      /*const canvas = document.getElementById("myCanvas");
      this.ctx = canvas.getContext("2d");*/
    },
    methods: {
      handleChangeWindowSize: function () {

      },
      getCardColor: function (chunk) {
        if (this.selectedChunk === chunk) return "";

        return chunk.name_a != null ? '#ffeefe' : '#f8f8f8';
      },
      getNumPoints: function (chunks) {
        return chunks.reduce((totalPoints, chunk) => {
          return totalPoints + chunk.points.length;
        }, 0);
      },
      getImageSource: function (image) {
        let src = 'srcGreen';
        /*if (this.selectedChunk == null || this.selectedChunk.name !== image['@data-name']) {
            //if (this.selectedChunk == null || this.selectedChunk.chunk_id !== image.id) {
            src = 'srcGreen';
        } else {
            src = 'srcOrange';
        }*/
        return `${image[src]}`;
      },
      getCardImageSource: function (chunk) {
        const imageList = this.mapImageDataList.filter(mapImageData => {
          return this.selectedExpressWay.id === mapImageData.id;
        })[0].img.filter(image => {
          return image['@data-name'].trim() === chunk.name.trim();
        });
        return imageList.length === 0 ? null : imageList[0].srcGreen;
      },
      getImageStyle: function (image) {
        let style = image['@style'];
        if (this.selectedChunk != null && this.selectedChunk.name === image['@data-name']) {
          style += this.filterStyle;
        }
        return style;
      },
      handleClickCard: function (chunk) {
        //this.selectedChunk = this.selectedChunk === chunk ? null : chunk;

        if (this.selectedChunk === chunk) {
          this.selectedChunk = null;
          clearInterval(this.blinkTimer);
          this.blinkTimer = null;
          this.selectedDomImage = null;
        } else {
          this.selectedChunk = chunk;

          setTimeout(() => {
            const imageList = this.mapImageDataList.filter(mapImageData => {
              return mapImageData.id === this.selectedExpressWay.id;
            })[0]['img'];
            const filteredImageList = imageList.filter(image => {
              //return image.id === this.selectedChunk.chunk_id;
              return image['@data-name'] === this.selectedChunk.name;
            });

            if (filteredImageList.length === 0) {
              this.selectedDomImage = null;
              setTimeout(() => {
                alert('ไม่พบเส้นข้อมูลบน Schematic Map');
              }, 100);
            } else {
              /*const image = filteredImageList[0];
              const stylePartList = image['@style'].split(';');
              const top = parseInt(stylePartList.filter(stylePart => {
                 return stylePart.trim().substring(0, 3).toLowerCase() === 'top';
              })[0].split(':')[1].trim().replace(/\D/g,''));
              const left = parseInt(stylePartList.filter(stylePart => {
                 return stylePart.trim().substring(0, 4).toLowerCase() === 'left';
              })[0].split(':')[1].trim().replace(/\D/g,''));*/
              //alert('top: ' + top + ', left: ' + left);

              /*ctx.beginPath();
              ctx.arc(left, top, 100, 0, 2 * Math.PI);
              ctx.fillStyle = 'rgba(255, 255, 255, 1)';
              ctx.fill();*/

              const image = filteredImageList[0];
              this.selectedDomImage = this.$refs[`r${this.selectedExpressWay.id}-img${image.id}`][0];
              console.log(this.selectedDomImage);
              console.log(`Width: ${this.selectedDomImage.offsetWidth}, Height: ${this.selectedDomImage.offsetHeight}, Left: ${this.selectedDomImage.offsetLeft}, Top: ${this.selectedDomImage.offsetTop}`);
            }
          }, 200);

          if (this.blinkTimer == null) {
            this.blinkTimer = setInterval(() => {
              this.filterStyle = this.filterStyle === '' ? FILTER_STYLE : '';
            }, 500);
          }
        }
      },
      /*handleClickCardButton: function (chunk) {
          const pointIdListText = chunk.points.reduce((total, point, index) => {
              return total.concat((index === 0 ? '' : ', ').concat(`${point.point_id}`));
          }, '');
          alert(`Point ID: ${pointIdListText}`);
      },*/
      handleSelectExpressWay: function () {
        this.selectedChunk = null;
        this.selectedDomImage = null;
        clearInterval(this.blinkTimer);
        this.blinkTimer = null;

        //alert(this.selectedExpressWay.id);
        /*const AUTH_TOKEN = '8a4e96ed4c9281af4d0c2189c6a72551fe940b43';
        axios.get(
          `https://alg.exat.co.th/api/roads/${this.selectedExpressWay.id}`,
          {
            headers: {Authorization: `Token ${AUTH_TOKEN}`}
          })
          .then(response => {
            alert(response.data);
          })
          .catch((error) => {
            console.log('error ' + error);
          });*/
      },
      test: function (name) {
        alert(name);
      }
    }
  }
</script>

<style scoped>
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .chunk {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10000;
  }

  .arrow {
    position: absolute;
    top: 1000px;
    left: 200px;
    z-index: 10010;
  }
</style>
