import axios from 'axios'

export const projectsModule = {
  state: () => ({
    projects: [],
    //isProjectsloading: false,
    selectedSort: '',
    limit: 40,
    page: 1,
    totalPages: 0,
    sortOptions: [
      {value: 'notStarted', name: 'Not started'},
      {value: 'started', name: 'Started'},
      {value: 'finished', name: 'Finished'},
      {value: 'all', name: 'All'}
    ]
  }),
  getters: {
    sortedProjects(state) {
      return [...state.projects].sort((project1, project2) => project1[state.selectedSort]?.localeCompare(project2[state.selectedSort]))
    },
    showSortedProjects(state, getters) {
      if(state.selectedSort === 'all')
        return getters.sortedProjects
      return getters.sortedProjects.filter(project => project.status.includes(state.selectedSort))
    }
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects
    },
    setLoadingState(state, bool) {
      state.isProjectsloading = bool
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    },
    setPage(state, page) {
      state.page = page
    },
    setLimit(state, limit) {
      state.limit = limit
    },
    setProjectTitle(state, projectTitle){
      state.projectTitle = projectTitle
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages
    },
    ADD_PROJECT(state, project) {
      state.projects.unshift(project)
    }
  },
  actions: {
    async fetchProjects({state, commit}) {
      try {
        //commit('setLoading', true)
        const response = await axios.get('http://localhost:3000/projects?_sort=id&_order=desc', {
          params: {
            _page: state.page,
            _limit: state.limit
          }
        });
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
        commit('setProjects', response.data)
        commit('setSelectedSort', 'all')
      } catch (e) {
        console.log(e)
      } finally {
        //commit('setLoading', false)
      }
    },
    async addProject({state, commit}, project) {
      console.log('addProject', state.projects)
      commit('ADD_PROJECT', project)
      await axios.post('http://localhost:3000/projects', project)
    }
  },
  namespaced: true
}
