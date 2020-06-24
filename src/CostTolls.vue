<template>
  <v-app>
    <div style="flex: 1; display: flex; flex-direction: row; align-items: stretch; padding: 5px; border: 0px solid red;">
      <div :style="`overflow: auto; width: 300px; border: 0px solid pink`">
        <v-layout column align-content-start class="pa-1">
          <div class="mt-1">
            <h3 style="color: #333">
              {{selectedExpressWay == null ? 'เลือกสายทาง' : selectedExpressWay.name}}
              <span style="font-size: smaller; color: #aaa">
                {{/*selectedExpressWay == null ? '' : `(${selectedExpressWay.chunks.length} chunks, ${getNumPoints(selectedExpressWay.chunks)} points)`*/}}
              </span>
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

          </div>
        </v-layout>
      </div>
    </div>

    <div :style="`position: fixed; border: 1px solid #ccc; top: 0px; left: 310px; width: ${this.windowWidth - 310}px; height: 100%`">
      <GmapMap
        :center="{lat: 13.7850, lng: 100.6518}"
        :zoom="10"
        map-type-id="roadmap"
        style="width: 100%; height: 100%"
      >
        <!--<GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        />-->
      </GmapMap>
    </div>
  </v-app>
</template>

<script>
  import Vue from 'vue';
  import VueWindowSize from 'vue-window-size';
  //import Layout from './layouts/default';

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
      //Layout,
    },
    data: () => {
      return {
        //ctx: null,
        alertMessage: null,
        expressWayList: EXPRESS_WAY_LIST,
        selectedExpressWay: null,
        selectedChunk: null,
        filterStyle: '',
        blinkTimer: null,
        selectedDomImage: null,
        //mapPosition: {top: -70, left: 630},
      };
    },
    computed: {
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
        axios.get(
          `http://163.47.9.26/api/gate_in/${this.selectedExpressWay.id}`,
          {
            //headers: {Authorization: `Token ${AUTH_TOKEN}`}
          })
          .then(response => {
            alert(response.data);
          })
          .catch((error) => {
            console.log('Error: ' + error);
          });
      },
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
