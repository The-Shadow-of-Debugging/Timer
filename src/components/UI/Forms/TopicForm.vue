<template>
  <h1 class="TopicWindow__title">Add new topic</h1>
        <div class="TopicWindow__item TopicWindowItem">
          <label class="TopicWindowItem__title">Topic</label>
          <MyInput class="TopicWindowItem__input"  v-model="topic.title"></MyInput>
        </div>
        <div class="TopicWindow__item TopicWindowItem">
          <label class="TopicWindowItem__title">Expected Start</label>
          <MyInput :mask="'99:99:99'" inputmode="decimal" class="TopicWindowItem__input" v-model="topic.start"></MyInput>
        </div>
        <div class="TopicWindow__item TopicWindowItem">
          <label class="TopicWindowItem__title">Duration</label>
          <MyInput :mask="'9{*}'" class="TopicWindowItem__input" v-model="topic.duration"></MyInput>
        </div>
        <MyButton :title="'Create'" class="TopicWindow__btn" @click="createTopic"></MyButton>
</template>

<script>
import MyButton from '@/components/UI/Buttons/MyButton'
import MyInput from '@/components/UI/Input/MyInput'
export default {
    name:"TopicForm",
    components: {MyButton, MyInput},
    emits: ["create"],
    data() {
        return {
            topic: {
                "title": "",
                "start": "",
                "duration": 0
            }
        }
    },
    methods: {
        createTopic() {
          this.getTimeFromStart(this.topic.start)
          this.$emit('create', this.topic)
          this.topic = {
            "title": "",
            "start": "",
            "duration": 0
            }
        },
      getTimeFromStart(start) {
        let date = start.split('')
        // eslint-disable-next-line no-unused-vars
        date = (+date[0]) * 100000 + (+date[1])* 10000 +
            (+date[3]) * 1000 + (+date[4])* 100 +
            (+date[6]) * 10 + (+date[7])
        console.log('date', date)
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
