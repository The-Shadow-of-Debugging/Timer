<template>
  <div class="card">
    <div class="header">
      <AlreadyStarted class="mark" v-if="project.status === 'started'"></AlreadyStarted>
      <AlreadyFinished class="mark" v-if="project.status === 'finished'"></AlreadyFinished>
      <NotStarted class="mark" v-if="project.status === 'notStarted'"></NotStarted>
      <div class="time">
        <div class="start">{{project.timeToStart}}</div>
        <div class="end" v-if="project.timeToEnd !== ''">{{project.timeToEnd}}</div>
      </div>
    </div>
    <div class="title">{{project.title}}</div>
  </div>
</template>
<script>
import AlreadyFinished from '../Icons/AlreadyFinished.vue'
import AlreadyStarted from '../Icons/AlreadyStarted.vue'
import NotStarted from '../Icons/NotStarted.vue'
export default {
  components: { AlreadyStarted, AlreadyFinished, NotStarted },
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #C4C4C4;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 200px;
  height: 127px;
  padding: 13px 10px;
  box-sizing: border-box;
}
.header {
  display: flex;
  justify-content: space-between;
}
.mark {
  align-self: flex-start;
}
.time {
  color: #004889;
}
</style>

