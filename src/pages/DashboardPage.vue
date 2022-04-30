<template>
  <div class="DashboardPage">
    <h1 class="title">Projects Dashboard</h1>
    <div class="filter mb-5">
      <MultiFilter :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions"></MultiFilter>
    </div>
    <ProjectList :projects="showSortedProjects"></ProjectList>
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
      setSelectedSort: 'project/setSelectedSort'
    }),
    ...mapActions({
      fetchProjects: 'project/fetchProjects'
    })
  },
  mounted() {
    this.fetchProjects()
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
