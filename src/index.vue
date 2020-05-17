<template>
    <layout>
        <v-layout column align-content-start class="pa-4">
            <!--<v-flex>
              <v-tabs>
                <v-tab
                  v-for="expressWay in expressWayList"
                >
                  {{expressWay.name}}
                </v-tab>
              </v-tabs>
            </v-flex>-->

            <div class="mt-2">
                <h1 style="color: #333">
                    {{selectedExpressWay == null ? 'เลือกสายทาง' : selectedExpressWay.name}}
                    <span style="font-size: smaller; color: #aaa">{{selectedExpressWay == null ? '' : `(${selectedExpressWay.chunks.length} chunks, ${getNumPoints(selectedExpressWay.chunks)} points)`}}</span>
                </h1>
                <!--<div>{{selectedExpressWay.chunk}}</div>-->
            </div>

            <v-flex class="mb-5 mt-2">
                <v-select
                        v-model="selectedExpressWay"
                        :items="expressWayList"
                        label="เลือกสายทาง"
                        single-line
                />
            </v-flex>

            <!--<h1>
              {{expressWay.name}}
            </h1>
            <h2>
              จำนวน Chunk ในสายทางนี้ : {{expressWay.chunks.length}} Chunks
            </h2>-->

            <div v-if="selectedExpressWay != null">
                <v-card
                        class="mb-5"
                        v-for="chunk in selectedExpressWay.chunks"
                        :key="chunk.chunk_id"
                        :color="getCardColor(chunk)"
                >
                    <v-card-title>Chunk ID: {{chunk.chunk_id}}</v-card-title>
                    <v-card-text v-if="chunk.name_a != null">
                        <v-chip
                                class="pa-4"
                                @click="() => test(chunk.name_a)"
                                color="primary"
                        >
                            {{chunk.name_a}}
                        </v-chip>
                        <v-icon light>
                            mdi-arrow-right-thick
                        </v-icon>
                        <v-chip
                                class="pa-4 mr-2"
                                @click="() => test(chunk.name_b)"
                                color="primary"
                        >
                            {{chunk.name_b}}
                        </v-chip>
                    </v-card-text>
                    <v-card-text v-if="chunk.name_a == null">
                        <v-chip
                                class="pa-4"
                                @click="() => test(chunk.name)"
                        >
                            {{chunk.name}}
                        </v-chip>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                                text
                                color="orange"
                                @click="() => handleClickCardButton(chunk)"
                        >{{chunk.points.length}} Points
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-layout>
    </layout>
</template>

<script>
    import {getExpressWayList} from './data/maps';
    import Layout from './layouts/default';

    export default {
        name: "test",
        components: {
            Layout,
        },
        data: () => {
            return {
                expressWayList: getExpressWayList(),
                selectedExpressWay: null,
            };
        },
        computed: {},
        methods: {
            getCardColor: function (chunk) {
                return chunk.name_a != null ? '#ffeefe' : '#f8f8f8';
            },
            getNumPoints: function (chunks) {
                return chunks.reduce((totalPoints, chunk) => {
                    return totalPoints + chunk.points.length;
                }, 0);
            },
            handleClickCardButton: function (chunk) {
                const pointIdListText = chunk.points.reduce((total, point, index) => {
                    return total.concat((index === 0 ? '' : ', ').concat(`${point.point_id}`));
                }, '');
                alert(`Point ID: ${pointIdListText}`);
            },
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

</style>
