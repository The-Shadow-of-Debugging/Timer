<template>
  <h1 class="TopicWindow__title">Add new project</h1>
        <div class="TopicWindow__item TopicWindowItem">
          <label class="TopicWindowItem__title">Topic</label>
          <MyInput class="TopicWindowItem__input" v-model="project.title"></MyInput>
        </div>
        <div class="TopicWindow__item TopicWindowItem">
          <label class="TopicWindowItem__title">Expected Start</label>
          <MyInput class="TopicWindowItem__input" v-model="project.timeToStart" :mask="'99:99:99'"></MyInput>
        </div>
        <div class="TopicWindow__item TopicWindowItem">
          <label class="TopicWindowItem__title">Expected End</label>
          <MyInput class="TopicWindowItem__input" v-model="project.timeToEnd" :mask="'99:99:99'"></MyInput>
        </div>
        <MyButton :title="'Create'" class="TopicWindow__btn" @click="createProject"></MyButton>
</template>

<script>
import MyButton from '@/components/UI/Buttons/MyButton'
import MyInput from '@/components/UI/Input/MyInput'
export default {
    name:"ProjectForm",
    components: {MyButton, MyInput},
    data() {
        return {
            project: {
                "title": "",
                "timeToStart": "00:00:00",
                "timeToEnd": "00:00:00",
                "status": "notStarted",
            }
        }
    },
    methods: {
        createProject() {
            this.$emit('create', this.project)
            this.project = {
                "title": "",
                "timeToStart": "00:00:00",
                "timeToEnd": "00:00:00",
                "status": "notStarted",
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.TopicWindowItem {
  @apply flex justify-between mb-7;
  &__title {
    @apply text-base self-center;
  }
}
.TopicWindow {
  &__title {
    @apply text-xl text-center mb-7;
  }
  &__btn {
    @apply ml-auto;
  }
}
</style>
