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
                chart.data.labels = []
                chart.data.datasets = []

                data.labels.map(label => {
                    chart.data.labels.push(label)
                })

                chart.data.datasets.push({
                    label: data.label,
                    data: data.data,
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.4)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                })

                chart.update()
            }
        },
        methods: {},
        mounted: function () {
            chart = new Chart(this.$el, {
                type: 'bar',
                data: {},
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
