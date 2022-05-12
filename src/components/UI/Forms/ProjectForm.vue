<template>
  <h1 class="TopicWindow__title">Add new project</h1>
        <div class="TopicWindow__item TopicWindowItem">
          <label class="TopicWindowItem__title">Topic</label>
          <MyInput class="TopicWindowItem__input" v-model="project.title"></MyInput>
        </div>
        <div class="TopicWindow__item TopicWindowItem">
          <label class="TopicWindowItem__title">Expected Start</label>
          <MyInput class="TopicWindowItem__input" v-model="project.timeToStart"></MyInput>
        </div>
        <div class="TopicWindow__item TopicWindowItem">
          <label class="TopicWindowItem__title">Expected End</label>
          <MyInput class="TopicWindowItem__input" v-model="project.timeToEnd"></MyInput>
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
                "timeToStart": "",
                "timeToEnd": "",
                "status": "notStarted",
            }
        }
    },
    methods: {
        createProject() {
            this.project.id = Date.now()
            this.$emit('create', this.project)
            this.project = {
                "title": "",
                "timeToStart": "",
                "timeToEnd": "",
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
