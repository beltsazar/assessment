<template>
    <canvas></canvas>
</template>

<script>
    import Chart from 'chart.js'

    export default {
        name: 'RadarChart',
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
                        'rgba(255, 206, 86, 0.5)'
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 0.8)'
                    ],
                    borderWidth: 2
                })

                this.chart.update()
            }
        },
        methods: {},
        mounted: function () {
            this.chart = new Chart(this.$el, {
                type: 'radar',
                data: {},
                options: {}
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
