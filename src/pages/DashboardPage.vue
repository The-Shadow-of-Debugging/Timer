<template>
  <div class="DashboardPage">
    <h1 class="title">Projects Dashboard</h1>
    <div class="filter mb-5">
      <MultiFilter :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions"></MultiFilter>
    </div>
    <ProjectList :projects="showSortedProjects"></ProjectList>
    <MyButton :title="'Add new project'" @click="showDialog"></MyButton>
    <TopicWindow v-model:show="dialogVisible">
      <ProjectForm @create="createProject" :title="'project'"></ProjectForm>
    </TopicWindow>
  </div>

</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import ProjectList from '@/components/UI/Project/ProjectList.vue'
import MultiFilter from '@/components/UI/MultiFilter.vue'
import MyButton from '@/components/UI/Buttons/MyButton.vue'
import TopicWindow from '@/components/UI/ModalWindows/TopicWindow.vue'
import ProjectForm from '@/components/UI/Forms/ProjectForm.vue'
export default {
  name: 'DashboardPage',
  data() {
    return{
      dialogVisible: false,
    }
  },
  components: { ProjectList, MultiFilter, MyButton, TopicWindow, ProjectForm },
  methods: {
    ...mapMutations({
      setSelectedSort: 'project/setSelectedSort'
    }),
    ...mapActions({
      fetchProjects: 'project/fetchProjects',
      addProject: 'project/addProject'
    }),
    showDialog() {
      this.dialogVisible = true
    },
    createProject(project) {
      this.addProject(project)
    }
  },
  mounted() {
    if(this.projects.length === 0) {
      this.fetchProjects()
      this.start = true
    }
  },
  computed: {
    ...mapState({
      projects: state => state.project.projects,
      sortOptions: state => state.project.sortOptions,
      selectedSort: state => state.project.selectedSort,
    }),
    ...mapGetters({
      sortedProjects: 'project/sortedProjects',
      showSortedProjects:'project/showSortedProjects'
    })
  }
}
</script>

<style scoped>
.DashboardPage {
  @apply pt-10 px-10;
}
.filter {
  @apply text-right;
}
.title {
  @apply text-3xl font-medium;
}
.card {
  margin-top: 20px;
}
</style>
