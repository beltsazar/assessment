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
    }
}
