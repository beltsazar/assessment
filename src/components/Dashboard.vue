<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                <canvas id="myChart" xwidth="400" xheight="400"></canvas>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<script>
    import Chart from 'chart.js'

    export default {
        data () {
            return {
                clipped: false,
                drawer: true,
                fixed: false,
                items: [{
                    icon: 'bubble_chart',
                    title: 'Home'
                },
                {
                    icon: 'bubble_chart',
                    title: 'Dashboard'
                }],
                miniVariant: false,
                title: 'Data Visualisation '
            }
        },
        name: 'App',
        methods: {
        },
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
