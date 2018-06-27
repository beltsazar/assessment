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
                                        :items="items"
                                        v-model="select"
                                        :hint="`${select.state}, ${select.abbr}`"
                                        label="Select"
                                        single-line
                                        item-text="state"
                                        item-value="abbr"
                                        return-object
                                        persistent-hint
                                />
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 md6>
                <v-card>
                    <v-card-title primary-title>
                        <h1 class="headline">Population of {{select.state}}</h1>
                    </v-card-title>
                    <v-card-text>
                        <canvas id="myChart"></canvas>
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 md6>
                <v-card>
                    <v-card-title primary-title>
                        <h1 class="headline">Jobs in {{select.state}}</h1>
                    </v-card-title>
                    <v-card-text>
                        blavatski!!!
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>


    </v-container>
</template>

<script>
    import Chart from 'chart.js'

    export default {
        data () {
            return {
                select: { state: 'Florida', abbr: 'FL' },
                items: [
                    { state: 'Florida', abbr: 'FL' },
                    { state: 'Georgia', abbr: 'GA' },
                    { state: 'Nebraska', abbr: 'NE' },
                    { state: 'California', abbr: 'CA' },
                    { state: 'New York', abbr: 'NY' }
                ]
            }
        },
        name: 'Dashboard',
        methods: {},
        mounted: function () {
            const ctx = document.getElementById('myChart')

            /* eslint-disable no-new */
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [
                        'State',
                        'Under 5 Years',
                        '5 to 13 Years',
                        '14 to 17 Years',
                        '18 to 24 Years',
                        '25 to 44 Years',
                        '45 to 64 Years',
                        '65 Years and Over'
                    ],
                    datasets: [{
                        label: '# of Votes',
                        data: [
                            'AL',
                            310504,
                            552339,
                            259034,
                            450818,
                            1231572,
                            1215966,
                            641667
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
