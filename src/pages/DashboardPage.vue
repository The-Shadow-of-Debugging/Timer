<template>
  <div class="DashboardPage">
    <h1 class="title">Projects Dashboard</h1>
    <div class="filter"><multi-filter></multi-filter></div>
    <my-card class="card"></my-card>
  </div>

</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'DashboardPage',
  methods: {
    ...mapMutations({
    }),
    ...mapActions({
      fetchProjects: 'project/fetchProjects'
    })
  },
  computed: {
    ...mapGetters({
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
