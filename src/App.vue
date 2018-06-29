<template>
    <v-app dark>
        <v-navigation-drawer
                persistent
                v-model="drawer"
                enable-resize-watcher
                fixed
                app
        >
            <v-list>
                <v-list-tile v-for="item in items" :key="item.title" :to="{name: item.name}" :exact="true">
                    <v-list-tile-action>
                        <v-icon medium>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar
                app
        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title v-text="title"/>
        </v-toolbar>
        <v-content v-if="dataLoaded">
            <router-view/>
        </v-content>
        <v-footer :fixed="fixed" app>
            <span>&copy; 2018 - Daniel Marcuse</span>
        </v-footer>
    </v-app>
</template>

<script>
    import Chart from 'chart.js'

    export default {
        data () {
            return {
                drawer: true,
                fixed: false,
                items: [{
                    icon: 'home', title: 'Home', name: 'Main'
                }, {
                    icon: 'web', title: 'Dashboard', name: 'Dashboard'
                }],
                title: 'Data Visualisation',
                dataLoaded: false
            }
        },
        name: 'App',
        methods: {},
        mounted: async function () {
            /**
             * Set some ChartJS defaults
             */
            Chart.defaults.global.elements.rectangle.backgroundColor = 'rgba(54, 162, 235, 0.4)'
            Chart.defaults.global.elements.rectangle.borderColor = 'rgba(54, 162, 235, 1)'
            Chart.defaults.global.elements.rectangle.borderWidth = 2

            /**
             * Load data from store
             */
            await this.$store.dispatch('data/loadData')
            this.dataLoaded = true
        }
    }
</script>
