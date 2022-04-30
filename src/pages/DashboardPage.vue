<template>
  <div class="DashboardPage">
    <h1 class="title">Projects Dashboard</h1>
    <div class="filter mb-5"><MultiFilter></MultiFilter></div>
    <ProjectList :projects="PROJECTS"></ProjectList>
  </div>

</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import ProjectList from '@/components/UI/Project/ProjectList.vue'
import MultiFilter from '@/components/UI/MultiFilter.vue'
export default {
  name: 'DashboardPage',
  components: { ProjectList, MultiFilter },
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
      fetchProjects: 'project/fetchProjects'
    })
  },
  computed: {
    ...mapGetters({
      PROJECTS:'project/PROJECTS'
    }),
    ...mapState({
      projects: state => state.project.projects
    })
  },
  mounted() {
    this.fetchProjects()
  },
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
