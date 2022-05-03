import {createStore} from 'vuex'
import {projectsModule} from '@/store/projectsModule'
import {topicsModule} from '@/store/topicsModule'

export default createStore({
  modules: {
    project: projectsModule,
    topic: topicsModule
  }
})
