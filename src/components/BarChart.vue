<template>
    <canvas></canvas>
</template>

<script>
    import Chart from 'chart.js'

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
                this.chart.data.labels = []
                this.chart.data.datasets = []

                data.labels.map(label => {
                    this.chart.data.labels.push(label)
                })

                this.chart.data.datasets.push({
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

                this.chart.update()
            }
        },
        methods: {},
        mounted: function () {
            this.chart = new Chart(this.$el, {
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
