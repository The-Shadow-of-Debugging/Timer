<template>
  <div class="TimerPage">
    <MyTimer :topics="getTopic" :date="currentTime" :number="process" class="timer mx-auto"></MyTimer>
    <div class="buttons">
      <PreviousButton @click="previousTimer" :disabled="disable"></PreviousButton>
      <StartButton class="next" v-if="!start" @click="startTimer"></StartButton>
      <PauseButton class="next" v-else @click="stopTimer"></PauseButton>
      <NextButton @click="nextTimer" :disabled="disable"></NextButton>
    </div>
    <div class="authors">
      <div class="authors__item">
        <h2>Previous</h2>
        <div>{{}}</div>
      </div>
      <div class="authors__item">
        <h2>Now</h2>
        <div>{{topics[0].title}}</div>
      </div>
      <div class="authors__item">
        <h2>Next</h2>
        <div>{{}}</div>
      </div>
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
    }),
    showDialog() {
      this.dialogVisible = true
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
    nextTimer() {
      this.process = 101
      this.getTopic.length - 1 > this.index ? this.index += 1 : this.index
    },
    previousTimer() {
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
      console.log('this.getTopics', this.topics)
      return this.topics
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
  }
}
</script>

<style lang="scss" scoped>
.TimerPage {
  @apply flex flex-col items-center justify-center;
  height: 100vh;
}
.buttons {
  @apply flex justify-center mb-20;
}
.timer {
}
.next {
  @apply mx-3;
}
.authors {
  @apply flex justify-around text-2xl font-semibold;
  width: 100vw;
  color: #B5AF1C;
}
</style>
