import {createStore} from 'vuex'

export default createStore({
  state: {
    projects: [],
    isProjectsloading: false,
    selectedSort: '',
    limit: 10,
    page: 1,
    totalPages: 0,
    sortOptions: [
      {value: 'notStarted', name: 'Not started'},
      {value: 'started', name: 'Started'},
      {value: 'finished', name: 'Finished'},
    ]
  },
  getters: {
    PROJECTS(state) {
      return state.projects
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
    }
  },
  actions: {

  }
})
