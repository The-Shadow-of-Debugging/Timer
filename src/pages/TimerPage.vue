<template>
  <div class="TimerPage">
    <MyTimer :date="currentTime" :number="process" class="timer mx-auto"></MyTimer>
    <div class="buttons">
      <PreviousButton @click="previousTimer" :disabled="disable"></PreviousButton>
      <StartButton class="next" v-if="!start" @click="startTimer"></StartButton>
      <PauseButton class="next" v-else @click="stopTimer"></PauseButton>
      <NextButton @click="nextTimer" :disabled="disable"></NextButton>
    </div>
    <div class="authors">
      <div class="authors__item" v-if="previous !== index">
        <h2>Previous</h2>
        <div>{{checkPrevious()}}</div>
      </div>
      <div class="authors__item">
        <h2>Now</h2>
        <div>{{checkCurrent()}}</div>
      </div>
      <div class="authors__item" v-if="next !== index">
        <h2>Next</h2>
        <div>{{checkNext()}}</div>
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
      disable: false,
      next: 0,
      previous: 0
    }
  },
  methods: {
    ...mapMutations ({
      setTopics: 'topic/setTopics'
    }),
    ...mapActions({
      fetchTopics: 'topic/fetchTopics',
      obtainTopics: 'topic/obtainTopics',
    }),
    startTimer() {
      this.start = true
      const difTime = this.topics[this.index].duration
      let seconds = 1
      this.stop = setInterval(() => {
        if (this.topics[this.index].duration === 0)
          clearInterval(this.stop)
        this.topics[this.index].duration -= 1
        this.process = (100 -(seconds / difTime) * 100)
        seconds++
        },1000)
    },
    stopTimer() {
      this.start = false
      clearInterval(this.stop)
    },
    nextTimer() {
      this.process = 101
      if (this.topics.length - 1 > this.index) {
        this.previous = this.index
        this.index += 1
        if (this.index !== this.topics.length - 1) {
          this.next = this.index + 1
        }
      }
    },
    previousTimer() {
      this.process = 101
      if (this.index) {
        this.next = this.index
        this.index -= 1
        if (this.index !== 0) {
          this.previous = this.index - 1
        }
      }
    },
    checkPrevious() {
      try {
        // eslint-disable-next-line no-empty
        if (this.topics[this.previous].title) {
        }
      }
      catch (e) {
        console.log('e', e)
        return ''
      }

      return this.topics[this.previous].title
    },
    checkCurrent() {
      try {
        // eslint-disable-next-line no-empty
        if (this.topics[this.index].title) {
        }
      }
      catch (e) {
        console.log('e', e)
        return ''
      }

      return this.topics[this.index].title
    },
    checkNext: function () {
      try {
        // eslint-disable-next-line no-empty
        if (this.topics[this.next]) {
        }
      } catch (e) {
        console.log('e', e)
        return ''
      }

      return this.topics[this.next].title
    }
  },
  computed: {
    ...mapState({
      topics: state => state.topic.topics
    }),
    ...mapGetters({
      getTopics: 'topic/getTopics'
    }),
    currentTime() {
      this.obtainTopics(this.$route.params.id)
      let date
      try {
        date = new Date(this.topics[this.index].duration * 1000 - 10800000)
        if (this.index !== this.topics.length - 1) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.next = this.index + 1
        }
        if (0 >= this.topics[this.index].duration) {
          this.stopTimer()
          return {"hours": '00',
            "minutes": '00',
            "seconds": '00'}
        }
      }
      catch(e) {
        console.log(e)
        return {
          "hours": '00',
          "minutes": '00',
          "seconds": '00'
        }
      }
      return {
        "hours": (String(date.getHours()).length === 2 ? date.getHours() : '0' + date.getHours()),
        "minutes": (String(date.getMinutes()).length === 2 ? date.getMinutes() : '0' + date.getMinutes()),
        "seconds": (String(date.getSeconds()).length === 2 ? date.getSeconds() : '0' + date.getSeconds())
      }
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
  @apply flex justify-center mb-20;
}
.timer {
  @apply m-3.5;
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
