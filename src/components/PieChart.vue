<template>
    <canvas></canvas>
</template>

<script>
    import Chart from 'chart.js'

    export default {
        name: 'PieChart',
        props: [
            'type',
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
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(255, 206, 86, 0.8)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 2
                })

                this.chart.update()
            }
        },
        methods: {},
        mounted: function () {
            this.chart = new Chart(this.$el, {
                type: this.type,
                data: {},
                options: {}
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
