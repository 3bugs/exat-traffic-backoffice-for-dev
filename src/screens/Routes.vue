<template>
  <layout :menu-id="2">
    <v-container :style="`margin-top: ${this.HEADER_HEIGHT}px`">
      <v-tabs
          class="mb-6"
          v-model="currentTabIndex"
      >
        <v-tab
            v-for="(item, index) in ['กรอก Chunk ID เอง', 'Generated Dart Code']"
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
              origin: "รามอินทรา",
              destination: "อาจณรงค์",
              chunkIdList: [329, 501, 91, 147, 146, 92, 148, 94, 162, 163, 158, 165, 160, 168, 170, 177, 473, 469, 178, 180, 181]
            },
            {
              origin: "อาจณรงค์",
              destination: "รามอินทรา",
              chunkIdList: [176, 175, 174, 172, 173, 171, 474, 167, 166, 159, 164, 157, 156, 99, 93, 492, 97, 462, 461, 95, 331]
            },
          ]
        },
        { // บูรพาวิถี
          algRouteId: 6,
          legs: [
            {
              origin: "บางนา",
              destination: "ชลบุรี",
              chunkIdList: [436, 260, 281, 265, 262, 266, 267, 268, 269, 270, 272, 271, 273, 289, 293, 291, 296, 294, 299, 297, 72, 303, 496, 305, 497, 307, 498, 309, 73, 312]
            },
            {
              origin: "ชลบุรี",
              destination: "บางนา",
              chunkIdList: [313, 314, 310, 315, 308, 316, 317, 306, 499, 318, 298, 300, 295, 301, 292, 302, 290, 274, 438, 439, 288, 287, 286, 285, 284, 263, 283, 264, 437]
            },
          ]
        },
        { // ศรีรัช
          algRouteId: 5,
          legs: [
            {
              origin: "คลองประปา",
              destination: "ศรีนครินทร์",
              chunkIdList: [
                422,
                185,
                187,
                199,
                423,
                200,
                203,
                202,
                201,
                204,
                205,
                20,
                206,
                428,
                207,
                430,
                429,
                494,
                478,
                479,
                211,
                212,
                483,
                214,
                213,
                169,
                216,
                215,
                218,
                217
              ]
            },
            {
              origin: "คลองประปา",
              destination: "สาธุประดิษฐ์ 3",
              chunkIdList: [
                422,
                185,
                187,
                199,
                423,
                200,
                203,
                202,
                201,
                204,
                205,
                20,
                206,
                428,
                207,
                430,
                429,
                495,
                236,
                468,
                231,
                471,
                230,
                232,
                233,
                482,
                464,
                210,
                463
              ]
            },
            {
              origin: "สาธุประดิษฐ์ 3",
              destination: "คลองประปา",
              chunkIdList: [
                228,
                465,
                229,
                481,
                467,
                209,
                234,
                235,
                208,
                472,
                494,
                240,
                237,
                239,
                226,
                238,
                241,
                413,
                243,
                242,
                424,
                198,
                244,
                421,
              ]
            },
            {
              origin: "สาธุประดิษฐ์ 3",
              destination: "ศรีนครินทร์",
              chunkIdList: [
                228,
                465,
                229,
                481,
                467,
                209,
                234,
                235,
                208,
                472,
                494,
                478,
                479,
                211,
                212,
                483,
                214,
                213,
                169,
                216,
                215,
                218,
                217
              ]
            },
            {
              origin: "ศรีนครินทร์",
              destination: "คลองประปา",
              chunkIdList: [
                502,
                219,
                220,
                475,
                222,
                223,
                480,
                224,
                225,
                227,
                477,
                495,
                237,
                240,
                239,
                226,
                238,
                241,
                413,
                243,
                242,
                426,
                425,
                320,
                424,
                198,
                244,
                188,
                421
              ]
            },
            {
              origin: "ศรีนครินทร์",
              destination: "สาธุประดิษฐ์ 3",
              chunkIdList: [
                502,
                219,
                220,
                475,
                222,
                223,
                480,
                224,
                225,
                227,
                477,
                495,
                236,
                468,
                231,
                471,
                230,
                232,
                233,
                482,
                464,
                210,
                463
              ]
            },
          ]
        },
        { // กาญจนาภิเษก
          algRouteId: 10,
          legs: [
            {
              origin: "สุขสวัสดิ์",
              destination: "บางพลี",
              chunkIdList: [245, 247, 248, 485, 484, 251, 487, 486, 254, 489, 488, 257, 490, 491, 261]
            },
            {
              origin: "บางพลี",
              destination: "สุขสวัสดิ์",
              chunkIdList: [275, 259, 258, 276, 256, 255, 277, 253, 252, 278, 250, 249, 279, 246, 280]
            },
          ]
        },
        { // อุดรรัถยา
          algRouteId: 7,
          legs: [
            {
              origin: "บางปะอิน",
              destination: "ปากเกร็ด",
              chunkIdList: [197, 196, 195, 194, 193, 179, 192, 191, 182, 190, 183, 184, 189, 421, 188]
            },
            {
              origin: "ปากเกร็ด",
              destination: "บางปะอิน",
              chunkIdList: [185, 422, 186, 419, 420, 80, 417, 418, 79, 417, 418, 79, 415, 416, 78, 414, 76, 161]
            },
          ]
        },
        { // ศรีรัช - วงแหวนรอบนอก
          algRouteId: 4,
          legs: [
            {
              origin: "ศรีรัช",
              destination: "วงแหวน",
              chunkIdList: [141, 431, 143, 145, 144, 432, 149, 433, 153, 150, 152]
            },
            {
              origin: "วงแหวน",
              destination: "ศรีรัช",
              chunkIdList: [131, 7, 10, 133, 90, 134, 135, 137, 136, 138, 139, 140]
            },
          ]
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

    this.allOutputValue = `List _chunkDataList = ${JSON.stringify(this.routeDataList)};`;
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
