import axios from 'axios'

export const topicsModule = {
    state: () => ({
        topics: []
    }),
    getters: {
        getTopics(state) {
            return state.topics
        }
    },
    mutations: {
        setTopics(state, topics) {
            state.topics = topics
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async fetchTopics({state, commit}) {
            try {
              const response = await axios.get('http://localhost:3000/topics');
              commit('setTopics', response.data)
            } catch (e) {
              console.log(e)
            }
          }
    },
    namespaced: true
}