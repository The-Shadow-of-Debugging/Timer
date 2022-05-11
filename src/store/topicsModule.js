import axios from 'axios'

export const topicsModule = {
    state: () => ({
        topics: []
    }),
    getters: {
        getTopics(state) {
            return [...state.topics]
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
        },
        // eslint-disable-next-line no-unused-vars
        addTopic({state, commit}, topic) {
            console.log('[...state.topics]', ({...state.topics}.themes));
            ({...state.topics}.themes).push(topic)
            console.log('[...state.topics]', ({...state.topics}.themes))
        },
        // eslint-disable-next-line no-unused-vars
        obtainTopics({state, commit, getters}, id) {
            commit('setTopics', getters.getTopics.find(topic => topic.id === id))
        }
    },
    namespaced: true
}
