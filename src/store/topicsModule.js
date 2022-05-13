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
                const response = await axios.get('http://localhost:3000/themes');
                console.log('response.data', response.data)
                commit('setTopics', response.data)
                console.log('fetchTopics', state.topics)
            } catch (e) {
                console.log(e)
            }
        },
        async addTopic({commit}, {topic, id}) {
            commit('ADD_TOPIC', topic)
            console.log('id', id)
            await axios.post(`http://localhost:3000/carts/${id}/themes`, topic)
        },
        // eslint-disable-next-line no-unused-vars
        obtainTopics({state, commit, getters}, id) {
            if (typeof getters.getTopics.filter(topic => topic.cartId === id) !== 'undefined') {
                commit('setTopics', getters.getTopics.filter(topic => topic.cartId === id))
            }
            else {
                commit('setTopics', [])
            }
            console.log('obtainTopics', state.topics)
        },
        async deleteTopic({state}, {topic, id}) {
            console.log(`http://localhost:3000/carts/${id}/themes/${topic.id}`)
            await axios.delete(`http://localhost:3000/carts/${id}/themes/${topic.id}`, topic)

            const gt = state.topics.filter(t => t.id !== topic.id).slice(0)
            console.log('deleteTopic', gt)
            state.topics.length = 0
            gt.forEach(topic => state.topics.push(topic))
        },
    },
    namespaced: true
}
