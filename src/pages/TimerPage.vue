<template>
  <div class="TimerPage">
    <MyTimer :topics="getTopic" :date="currentTime" :number="process" class="timer mx-auto"></MyTimer>
    <div class="buttons">
      <PreviousButton @click="previousTopic" :disabled="disable"></PreviousButton>
      <StartButton class="next" v-if="!start" @click="startTimer"></StartButton>
      <PauseButton class="next" v-else @click="stopTimer"></PauseButton>
      <NextButton @click="nextTopic" :disabled="disable"></NextButton>
    </div>
  </div>
</template>

<script>
import MyTimer from '@/components/UI/MyTimer'
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
import StartButton from '@/components/UI/Buttons/StartButton'
import PauseButton from '@/components/UI/Buttons/PauseButton'
import NextButton from '@/components/UI/Buttons/NextButton'
import PreviousButton from '@/components/UI/Buttons/PreviousButton'
export default {
  name: 'TimerPage',
  components: { PreviousButton, NextButton, StartButton, PauseButton, MyTimer },
  data() {
    return {
      stop: 0,
      process: 101,
      start: false,
      index: 0,
      disable: false
    }
  },
  methods: {
    ...mapMutations ({
      setTopics: 'topic/setTopics'
    }),
    ...mapActions({
      fetchTopics: 'topic/fetchTopics'
    }),
    showDialog() {
      this.dialogVisible = true
    },
    createTopic(topic) {
      this.getTopic.push(topic)
      this.dialogVisible = false
    },
    removeTopic(topic) {
      const gt = this.getTopic.filter(t => t.id !== topic.id).slice(0)
      this.getTopic.length = 0
      gt.forEach(topic => this.getTopic.push(topic))
    },
    startTimer() {
      this.start = true
      const difTime = Math.abs((100 / (this.getTopic[this.index].end - this.getTopic[this.index].start)))
      this.stop = setInterval(() => {
        if (this.getTopic[this.index].end - 1 === this.getTopic[this.index].start)
          clearInterval(this.stop)
        this.getTopic[this.index].end -= 1
        this.process -= difTime},1000)
    },
    stopTimer() {
      this.start = false
      clearInterval(this.stop)
    },
    nextTopic() {
      this.process = 101
      this.getTopic.length - 1 > this.index ? this.index += 1 : this.index
    },
    previousTopic() {
      this.process = 101
      this.index ? this.index -= 1 : this.index
    }
  },
  computed: {
    ...mapState({
      topics: state => state.topic.topics
    }),
    ...mapGetters({
      getTopics: 'topic/getTopics'
    }),
    getTopic(){
      return {...this.getTopics.find(topic => topic.id === +this.$route.params.id)}.themes
    },
    currentTime() {
      /* Вычитать 10800*/
      if (this.getTopic[this.index].start >= this.getTopic[this.index].end) {
        this.stopTimer()
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.process = 0
        return {"hours": '00',
          "minutes": '00',
          "seconds": '00'}
      }
      const date = new Date((this.getTopic[this.index].end - this.getTopic[this.index].start - 10800) * 1000)
      return {"hours": String(date.getHours()).length === 2 ? date.getHours() : '0' + date.getHours(),
        "minutes": String(date.getMinutes()).length === 2 ? date.getMinutes() : '0' + date.getMinutes(),
        "seconds": String(date.getSeconds()).length === 2 ? date.getSeconds() : '0' +date.getSeconds()}
    }
  },
  mounted(){
    this.fetchTopics()
  }
}
</script>

<style lang="scss" scoped>
.TimerPage {
  @apply flex flex-col items-center justify-center;
  height: 100vh;
}
.buttons {
  @apply flex justify-center;
}
.timer {
}
.next {
  @apply mx-3;
}
</style>
