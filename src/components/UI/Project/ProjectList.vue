<template>
<div class="ProjectList">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" class="mr-5 mb-5"></ProjectCard>
</div>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
export default {
  components: { ProjectCard },
  name: "ProjectList",
  props: {
      projects: {
          type: Array,
          required: true
      }
  }
}
</script>

<style>
.ProjectList {
    @apply flex flex-wrap;
}
</style>