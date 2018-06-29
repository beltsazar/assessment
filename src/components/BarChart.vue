<template>
    <canvas id="myChart"></canvas>
</template>

<script>
    import Chart from 'chart.js'

    let chart

    export default {
        name: 'BarChart',
        props: [
            'dataset'
        ],
        data () {
            return {
                chart: null
            }
        },
        watch: {
            dataset (data) {
                if (chart) {
                    chart.destroy()
                }

                chart = new Chart(this.$el, {
                    type: 'bar',
                    data: {
                        labels: data.labels,
                        datasets: [{
                            label: data.label,
                            data: data.data,
                            backgroundColor: [
                                'rgba(54, 162, 235, 0.4)'
                            ],
                            borderColor: [
                                'rgba(54, 162, 235, 1)'
                            ],
                            borderWidth: 1
                        }]
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

                // data.labels.map(label => {
                //     chart.data.labels.push(label)
                // })

                // chart.data.labels.pop();
                // chart.data.datasets.forEach((dataset) => {
                //     dataset.data.pop()
                // })
                //
                // chart.update()
                //
                // data.labels.map(label => {
                //     chart.data.labels.push(label)
                // })
                //
                // chart.data.datasets.push({
                //     label: 'pipo',
                //     data: [310504, 552339, 259034, 450818, 1231572, 1215966, 641667],
                //     backgroundColor: [
                //         'rgba(54, 162, 235, 0.4)'
                //     ],
                //     borderColor: [
                //         'rgba(54, 162, 235, 1)'
                //     ],
                //     borderWidth: 1
                // }
                // )
                // chart.data.datasets.forEach((dataset) => {
                //     dataset.data.push(data)
                // })
                // chart.update()
            }
        },
        methods: {},
        mounted: function () {
            // chart = new Chart(this.$el, {
            //     type: 'bar',
            //     data: {
            //         // labels: ['Under 5 Years', '5 to 13 Years', '14 to 17 Years', '18 to 24 Years', '25 to 44 Years', '45 to 64 Years', '65 Years and Over'],
            //         // datasets: [{
            //         //     label: 'pipo',
            //         //     data: [310504, 552339, 259034, 450818, 1231572, 1215966, 641667],
            //         //     backgroundColor: [
            //         //         'rgba(54, 162, 235, 0.4)'
            //         //     ],
            //         //     borderColor: [
            //         //         'rgba(54, 162, 235, 1)'
            //         //     ],
            //         //     borderWidth: 1
            //         // }
            //         // ]
            //     },
            //     options: {
            //         scales: {
            //             yAxes: [{
            //                 ticks: {
            //                     beginAtZero: true
            //                 }
            //             }]
            //         }
            //     }
            // })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
