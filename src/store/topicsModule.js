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
        },
        ADD_TOPIC(state, topic) {
            state.topics.push(topic)
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async fetchTopics({state, commit}) {
            try {
                const response = await axios.get('http://localhost:3000/topics');
                commit('setTopics', response.data)
                console.log('fetchTopics', state.topics)
            } catch (e) {
                console.log(e)
            }
        },
        async addTopic({commit}, topic) {
            commit('ADD_TOPIC', topic)
           // await axios.post('http://localhost:3000/topics/1/themes', topic)
        },
        obtainTopics({state, commit, getters}, id) {
            if (typeof {...getters.getTopics.find(topic => topic.id === id)}.themes !== 'undefined') {
                commit('setTopics', {...getters.getTopics.find(topic => topic.id === id)}.themes)
            }
            else {
                commit('setTopics', [])
            }
            console.log('obtainTopics', state.topics)
        },
        deleteTopic({state}, topic) {
            const gt = state.topics.filter(t => t.id !== topic.id).slice(0)
            console.log('deleteTopic', gt)
            state.topics.length = 0
            gt.forEach(topic => state.topics.push(topic))
        },
    },
    namespaced: true
}
