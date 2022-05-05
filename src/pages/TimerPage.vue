<template>
  <div class="TimerPage">
    <h1>There will be a timer</h1>
    <MyTimer :topics="getTopic" :date="currentTime" :number="process"></MyTimer>
    <MyButton :title="'Start'" @click="startTimer"></MyButton>
    <MyButton :title="'Stop'" @click="stopTimer"></MyButton>
  </div>
</template>

<script>
import MyTimer from '@/components/UI/MyTimer'
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
import MyButton from '@/components/UI/MyButton'
export default {
  name: 'TimerPage',
  components: { MyButton, MyTimer },
  data() {
    return {
      stop: 0,
      process: 101,
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
      this.stop = setInterval(() => {
        this.getTopic[0].start -= 1
        this.process -= 1},1000)
    },
    stopTimer() {
      clearInterval(this.stop)
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
      const date = new Date(this.getTopic[0].start * 1000)
      return {"hours": date.getHours(),
        "minutes": date.getMinutes(),
        "seconds": date.getSeconds()}
    }
  },
  mounted(){
    this.fetchTopics()
  }
}
</script>

<style lang="scss" scoped>
.TimerPage {
}
</style>
