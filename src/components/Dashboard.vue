<template>
    <v-container :grid-list-sm="$vuetify.breakpoint.xsOnly" :grid-list-lg="$vuetify.breakpoint.smAndUp" fluid>
        <v-layout wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title primary-title>
                        <h1 class="headline">Population and Jobs in the United States</h1>
                    </v-card-title>
                    <v-card-text>
                        <v-layout wrap>
                            <v-flex xs12 md6>
                                <v-select
                                        :items="statesUIList"
                                        v-model="select"
                                        :hint="`${select.name}, ${select.abbr}`"
                                        label="Select"
                                        single-line
                                        item-text="name"
                                        item-value="abbr"
                                        return-object
                                        persistent-hint
                                />
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12>
                <v-layout wrap>
                    <v-flex xs12>
                        <v-card>
                            <v-card-title primary-title>
                                <h1 class="headline">Population of {{select.name}} in bars</h1>
                            </v-card-title>
                            <v-card-text>
                                <bar-chart :dataset="populationChartData"/>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-card>
                            <v-card-title primary-title>
                                <h1 class="headline">Population of {{select.name}} in a dougnut</h1>
                            </v-card-title>
                            <v-card-text>
                                <pie-chart :dataset="populationChartData"/>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-card>
                            <v-card-title primary-title>
                                <h1 class="headline">Population of {{select.name}} in a radar</h1>
                            </v-card-title>
                            <v-card-text>
                                <radar-chart :dataset="populationChartData"/>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12>
                <v-layout wrap>
                    <v-flex xs12>
                        <v-card>
                            <v-card-title primary-title>
                                <h1 class="headline">Jobs in {{select.name}} in bars</h1>
                            </v-card-title>
                            <v-card-text>
                                <bar-chart :dataset="jobsChartData"/>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-card>
                            <v-card-title primary-title>
                                <h1 class="headline">Jobs in {{select.name}} in a dougnut</h1>
                            </v-card-title>
                            <v-card-text>
                                <pie-chart :dataset="jobsChartData"/>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex xs12 md6>
                        <v-card>
                            <v-card-title primary-title>
                                <h1 class="headline">Jobs in {{select.name}} in a radar</h1>
                            </v-card-title>
                            <v-card-text>
                                <radar-chart :dataset="jobsChartData"/>
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    import BarChart from '@/components/BarChart'
    import RadarChart from '@/components/RadarChart'
    import PieChart from '@/components/PieChart'

    export default {
        name: 'Dashboard',
        data () {
            return {
                select: {},
                populationChartData: {},
                jobsChartData: {}
            }
        },
        computed: {
            ...mapState({
                data: 'data'
            }),
            ...mapGetters({
                statesUIList: 'data/getStatesUIList',
                getPopulationByStateId: 'data/getPopulationByStateId',
                getJobsByStateId: 'data/getJobsByStateId'
            })
        },
        components: {
            'bar-chart': BarChart,
            'radar-chart': RadarChart,
            'pie-chart': PieChart
        },
        methods: {},
        watch: {
            select (selection) {
                this.populationChartData = {
                    label: this.select.name,
                    ...this.getPopulationByStateId(selection.abbr)
                }
                this.jobsChartData = {
                    label: this.select.name,
                    ...this.getJobsByStateId(selection.abbr)
                }
            }
        },
        mounted: function () {
            this.select = this.statesUIList[0]
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
