<template>
  <v-app>
    <div style="display: flex; flex-direction: column; padding: 5px; border: 0px solid red;">
      <div style="flex: 1; overflow: auto; width: 620px;">
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
              <v-card-title>Chunk ID: {{chunk.chunk_id}}</v-card-title>
              <v-card-subtitle>
                <strong>{{chunk.points.length}} Point{{chunk.points.length > 1 ? 's' : ''}}</strong> - ID:
                {{
                chunk.points.reduce((total, point, index) => {
                return total.concat((index === 0 ? '' : ', ').concat(`${point.point_id}`));
                }, '')
                }}
              </v-card-subtitle>
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

    <div style="position: fixed; top: -70px; left: 630px; transform: scale(0.37); transform-origin: left top;">
      <img src="https://alg.exat.co.th/static/dashboard/schematic_map/background_dev.png" alt="">
      <div id="mapData" class="overlay">
        <div
          v-for="road in filteredMapImageDataList"
          :key="road.id"
          :data-road-id="road.id">
          <img
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
      </div>
    </div>
  </v-app>
</template>

<script>
    import {getExpressWayList} from './data/maps';
    import {getMapImageDataList} from './data/alg_schematic_map';
    //import Layout from './layouts/default';

    const FILTER_STYLE = ' filter: invert(100%);';

    export default {
        name: "test",
        components: {
            //Layout,
        },
        data: () => {
            return {
                expressWayList: getExpressWayList(),
                mapImageDataList: getMapImageDataList(),
                selectedExpressWay: null,
                selectedChunk: null,
                filterStyle: '',
                blinkTimer: null,
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
        },
        created: function () {
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

            let msg = '----------\n\n';
            if (imageChunkCount < dataChunkCount) {
                msg += `มีข้อมูลใน API จำนวน ${dataChunkCount - imageChunkCount} chunk ที่ไม่ได้สัมพันธ์กับเส้นบน Schematic Map`;
            } else if (imageChunkCount > dataChunkCount) {
                msg += `มีเส้นบน Schematic Map จำนวน ${imageChunkCount - dataChunkCount} เส้น ที่ไม่ได้สัมพันธ์กับข้อมูล chunk ใดๆใน API`;
            } else {
                msg = '';
            }
            alert(`Total image chunk: ${imageChunkCount}\nTotal API data chunk: ${dataChunkCount}\n${msg}`);
        },
        methods: {
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
                return `https://alg.exat.co.th/media/dashboard/schematic_map/${image[src]}`;
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
                } else {
                    this.selectedChunk = chunk;
                    if (this.blinkTimer == null) {
                        this.blinkTimer = setInterval(() => {
                            this.filterStyle = this.filterStyle === '' ? FILTER_STYLE : '';
                        }, 500);
                    }
                }

                setTimeout(() => {
                    const imageList = this.mapImageDataList.filter(mapImageData => {
                        return mapImageData.id === this.selectedExpressWay.id;
                    })[0]['img'];
                    const count = imageList.filter(image => {
                        //return image.id === this.selectedChunk.chunk_id;
                        return image['@data-name'] === this.selectedChunk.name;
                    }).length;
                    if (count === 0) alert('ไม่พบเส้นข้อมูลบน Schematic Map');
                }, 200);
            },
            /*handleClickCardButton: function (chunk) {
                const pointIdListText = chunk.points.reduce((total, point, index) => {
                    return total.concat((index === 0 ? '' : ', ').concat(`${point.point_id}`));
                }, '');
                alert(`Point ID: ${pointIdListText}`);
            },*/
            handleSelectExpressWay: function () {
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
    width: 300px;
    height: 300px;
    top: 0;
    left: 0;
  }

  .chunk {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10000;
  }
</style>
