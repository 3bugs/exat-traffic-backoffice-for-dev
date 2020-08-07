<template>
  <layout :menu-id="2">
    <v-container :style="`margin-top: ${this.HEADER_HEIGHT}px`">
      <v-tabs
          class="mb-6"
          v-model="currentTabIndex"
      >
        <v-tab
            v-for="(item, index) in ['กรอก Chunk ID เอง', 'Chunk ID in Code']"
            :key="`tab-${index}`"
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="currentTabIndex">
        <v-tab-item
            key="tab-0"
        >
          <v-row class="mb-0 pb-0">
            <v-col cols="12" sm="6">
              <v-text-field
                  v-model="originValue"
                  label="ต้นทาง"
                  outlined
                  hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                  v-model="destinationValue"
                  label="ปลายทาง"
                  outlined
                  hide-details
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="10">
              <v-text-field
                  v-model="inputChunkIdValue"
                  label="List of Chunk ID"
                  outlined
                  hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="2">
              <v-btn
                  large color="primary"
                  style="width: 100%"
                  @click="handleClickGo"
              >GO
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-textarea
                  v-model="outputValue"
                  solo
                  label="result"
                  rows="10"
                  hide-details
              ></v-textarea>
            </v-col>
          </v-row>
        </v-tab-item>

        <v-tab-item
            key="tab-1"
        >
          <v-row>
            <v-col cols="12">
              <v-textarea
                  v-model="allOutputValue"
                  solo
                  label="result"
                  rows="16"
                  hide-details
              ></v-textarea>
            </v-col>
          </v-row>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </layout>
</template>

<script>
import Vue from 'vue';
import VueWindowSize from 'vue-window-size';
import {getExpressWayList} from '../data/maps';
import Layout from '../layouts/default';

Vue.use(VueWindowSize);
const HEADER_HEIGHT = 65;

export default {
  name: "test",
  components: {
    Layout,
  },
  data: () => {
    return {
      //ctx: null,
      HEADER_HEIGHT,
      alertMessage: null,
      expressWayList: getExpressWayList(),
      originValue: '',
      destinationValue: '',
      inputChunkIdValue: '117,459,118,120,108,457,456,127,442,128,445,443,129',
      outputValue: '',
      allOutputValue: '',
      currentTabIndex: 0,
      routeDataList: [
        { // เฉลิมมหานคร
          algRouteId: 1,
          legs: [
            {
              origin: "ดินแดง",
              destination: "ดาวคะนอง",
              chunkIdList: [117, 459, 118, 120, 108, 457, 456, 127, 442, 128, 445, 443, 129]
            },
            {
              origin: "ดินแดง",
              destination: "บางนา",
              chunkIdList: [117, 459, 118, 120, 108, 120, 457, 456, 112, 448, 446, 113, 451, 114, 319, 84]
            },
            {
              origin: "บางนา",
              destination: "ดาวคะนอง",
              chunkIdList: [85, 500, 125, 450, 126, 447, 449, 127, 442, 128, 445, 443, 129]
            },
            {
              origin: "บางนา",
              destination: "ดินแดง",
              chunkIdList: [85, 500, 125, 450, 126, 447, 449, 127, 122, 455, 458, 454, 123, 119, 124]
            },
            {
              origin: "ดาวคะนอง",
              destination: "ดินแดง",
              chunkIdList: [110, 440, 444, 111, 441, 112, 122, 455, 458, 454, 123, 119, 124]
            },
            {
              origin: "ดาวคะนอง",
              destination: "บางนา",
              chunkIdList: [110, 440, 444, 111, 441, 112, 448, 446, 113, 451, 114, 319, 84]
            },
          ]
        },
        { // ฉลองรัช
          algRouteId: 3,
          legs: [
            {
              origin: "คลองประปา",
              destination: "ศรีนครินทร์",
              chunkIdList: []
            },
            {
              origin: "คลองประปา",
              destination: "สาธุประดิษฐ์ 3",
              chunkIdList: []
            },
            {
              origin: "สาธุประดิษฐ์ 3",
              destination: "คลองประปา",
              chunkIdList: []
            },
            {
              origin: "สาธุประดิษฐ์ 3",
              destination: "ศรีนครินทร์",
              chunkIdList: []
            },
            {
              origin: "ศรีนครินทร์",
              destination: "คลองประปา",
              chunkIdList: []
            },
            {
              origin: "ศรีนครินทร์",
              destination: "สาธุประดิษฐ์ 3",
              chunkIdList: []
            },
          ]
        },
        { // บูรพาวิถี
          algRouteId: 6,
          legs: []
        },
        { // ศรีรัช
          algRouteId: 5,
          legs: []
        },
        { // กาญจนาภิเษก
          algRouteId: 10,
          legs: []
        },
        { // อุดรรัถยา
          algRouteId: 7,
          legs: []
        },
        { // ศรีรัช - วงแหวนรอบนอก
          algRouteId: 4,
          legs: []
        },
      ],
    };
  },
  computed: {},
  created: function () {
    this.routeDataList.forEach(route => {
      route.legs = route.legs.map(leg => {
        const legData = this.getDataOfLeg(leg);
        leg.pointIdList = legData.pointIdList;
        return leg;
      });
    });

    this.allOutputValue = `List chunkDataList = ${JSON.stringify(this.routeDataList)}`;
  },
  destroyed: function () {
  },
  mounted: function () {
  },
  methods: {
    handleClickGo: function () {
      //alert(JSON.stringify(this.getPointIdListOfChunk(63)));

      if (this.inputChunkIdValue.trim() !== '') {
        const chunkIdList = this.inputChunkIdValue.trim().split(',')
            .map(chunkIdText => parseInt(chunkIdText));
        const result = this.getDataOfLeg({chunkIdList});
        result.origin = this.originValue;
        result.destination = this.destinationValue;
        this.outputValue = JSON.stringify(result);
      }
    },
    getDataOfLeg: function (leg) {
      const result = {
        routeIdList: [],
        pointIdList: [],
      };

      leg.chunkIdList.forEach(chunkId => {
        if (!isNaN(chunkId)) {
          const pointIdListResult = this.getPointIdListOfChunk(chunkId);
          if (pointIdListResult != null) {
            if (!result.routeIdList.includes(pointIdListResult.expressWayId)) {
              result.routeIdList.push(pointIdListResult.expressWayId);
            }
            result.pointIdList = result.pointIdList.concat(pointIdListResult.pointIdList);
          } else {
            alert(`Error: Chunk ${chunkId} not found!`);
          }
        }
      });

      return result;
    },
    getPointIdListOfChunk: function (chunkId) {
      const expressWayList = getExpressWayList();
      for (let i = 0; i < expressWayList.length; i++) {
        const expressWay = expressWayList[i];
        const filteredChunkList = expressWay.chunks.filter(chunk => chunk.chunk_id === chunkId);
        if (filteredChunkList.length > 0) {
          return {
            expressWayId: expressWay.id,
            pointIdList: filteredChunkList[0].points.map(point => point.point_id),
          };
        }
      }
      return null;
    }
  }
}
</script>

<style scoped>
.split {
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
}

.left {
  height: 100%;
  left: 0;
  top: 0;
  padding: 5px;
}

.right {
}

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
