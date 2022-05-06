<template>
  <h1 class="TopicWindow__title">Add new topic</h1>
        <div class="TopicWindow__item TopicWindowItem">
          <label class="TopicWindowItem__title">Topic</label>
          <MyInput class="TopicWindowItem__input" v-model="topic.title"></MyInput>
        </div>
        <div class="TopicWindow__item TopicWindowItem">
          <label class="TopicWindowItem__title">Expected Start</label>
          <MyInput class="TopicWindowItem__input" v-model="topic.start"></MyInput>
        </div>
        <div class="TopicWindow__item TopicWindowItem">
          <label class="TopicWindowItem__title">Expected End</label>
          <MyInput class="TopicWindowItem__input" v-model="topic.end"></MyInput>
        </div>
        <div class="TopicWindow__item TopicWindowItem">
          <label class="TopicWindowItem__title">Time Left</label>
          <MyInput class="TopicWindowItem__input" v-model="topic.left"></MyInput>
        </div>
        <MyButton :title="'Create'" class="TopicWindow__btn" @click="createTopic"></MyButton>
</template>

<script>
import MyButton from '@/components/UI/Buttons/MyButton'
import MyInput from '@/components/UI/Input/MyInput'
export default {
    name:"TopicForm",
    components: {MyButton, MyInput},
    data() {
        return {
            topic: {
                "title": "",
                "start": "",
                "end": "",
                "left": ""
            }
        }
    },
    methods: {
        createTopic() {
            this.topic.id = Date.now()
            this.$emit('create', this.topic)
            this.topic = {
                "title": "",
                "start": "",
                "end": "",
                "left": ""
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
