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
        <v-content>
            <router-view/>

        </v-content>
        <v-footer :fixed="fixed" app>
            <span>&copy; 2018 - Daniel Marcuse</span>
        </v-footer>
    </v-app>
</template>

<script>
    import axios from 'axios'

    export default {
        data () {
            return {
                drawer: true,
                fixed: false,
                items: [{
                    icon: 'home',
                    title: 'Home',
                    name: 'Main'
                },
                {
                    icon: 'web',
                    title: 'Dashboard',
                    name: 'Dashboard'
                }],
                title: 'Data Visualisation '
            }
        },
        name: 'App',
        methods: {
            loadData: async function () {
                const response = await axios.get('/data/states/')
                this.$store.commit('data/states', {...response.data})
            }
        },
        mounted: function () {
            this.loadData()
        }
    }
</script>
