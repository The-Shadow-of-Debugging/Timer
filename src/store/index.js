import {createStore} from 'vuex'
import {projectsModule} from '@/store/projectsModule'

export default createStore({
  modules: {
    project: projectsModule
  }
})
