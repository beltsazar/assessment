import axios from 'axios'

export default {
    namespaced: true,
    state: {
        states: {},
        population: {},
        jobs: {}
    },
    mutations: {
        states (state, payload) {
            state.states = {...payload}
        },
        population (state, payload) {
            state.population = {...payload}
        },
        jobs (state, payload) {
            state.jobs = {...payload}
        }
    },
    actions: {
        async loadData ({commit}) {
            return new Promise(async function (resolve, reject) {
                const response = await axios.all([
                    axios.get('/data/states/'),
                    axios.get('/data/population/'),
                    axios.get('/data/jobs/')
                ])

                commit('states', {...response[0].data})
                commit('population', {...response[1].data})
                commit('jobs', {...response[2].data})

                resolve()
            })
        }
    }
}
