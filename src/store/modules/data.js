import axios from 'axios'

export default {
    namespaced: true,
    state: {
        states: {},
        population: {},
        jobs: []
    },
    getters: {
        getStatesUIList: (state) => {
            return Object.entries(state.states).map((item) => ({abbr: item[0], name: item[1]}))
        },
        getPopulationByStateId: (state) => (id) => ({
            labels: state.population.labels.slice(1),
            data: state.population.data.find((item) => {
                return (item[0] === id)
            }).slice(1)
        }),
        getJobsByStateId: (state) => (id) => {
            const job = state.jobs.find((item) => {
                return (item.name === id)
            })

            return {
                labels: Object.entries(job).map(item => {
                    return item[0]
                }).slice(1),
                data: Object.entries(job).map(item => {
                    return item[1]
                }).slice(1)
            }
        }
    },
    mutations: {
        states (state, payload) {
            state.states = {...payload}
        },
        population (state, payload) {
            state.population = {...payload}
        },
        jobs (state, payload) {
            state.jobs = [...payload]
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
                commit('jobs', [...response[2].data])
                resolve()
            })
        }
    }
}
