<template>
  <div class="ProjectPage">
    <div class="ProjectPage__container">
      <TopicsTable :topics="getTopic"></TopicsTable>
      <div @click="showDialog">+ New Topic</div>
      <TopicWindow v-model:show="dialogVisible" class="TopicWindow">
        <h1 class="TopicWindow__title">Add new topic</h1>
        <div class="TopicWindow__item TopicWindowItem">
          <label class="TopicWindowItem__title">Topic</label>
          <MyInput class="TopicWindowItem__input"></MyInput>
        </div>
        <div class="TopicWindow__item TopicWindowItem">
          <label class="TopicWindowItem__title">Expected Start</label>
          <MyInput class="TopicWindowItem__input"></MyInput>
        </div>
        <div class="TopicWindow__item TopicWindowItem">
          <label class="TopicWindowItem__title">Expected End</label>
          <MyInput class="TopicWindowItem__input"></MyInput>
        </div>
        <div class="TopicWindow__item TopicWindowItem">
          <label class="TopicWindowItem__title">Time Left</label>
          <MyInput class="TopicWindowItem__input"></MyInput>
        </div>
        <MyButton :title="'Create'" class="TopicWindow__btn"></MyButton>
      </TopicWindow>
    </div>
    <MyButton :title="'Start'" class="ProjectPage__btn" @click="$router.push('/timer')"></MyButton>
  </div>
</template>

<script>
import TopicsTable from '@/components/UI/TopicsTable.vue'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
import MyButton from '@/components/UI/MyButton'
import TopicWindow from '@/components/UI/ModalWindows/TopicWindow'
import MyInput from '@/components/UI/Input/MyInput'
export default {
  components: { MyInput, TopicWindow, MyButton, TopicsTable },
  data() {
    return {
      dialogVisible: false
    }
  },
  name: 'ProjectPage',
  methods: {
    ...mapMutations ({

    }),
    ...mapActions({
      fetchTopics: 'topic/fetchTopics'
    }),
    showDialog() {
      this.dialogVisible = true
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
    }
  },
  mounted(){
    this.fetchTopics()
  }
}
</script>

<style lang="scss" scoped>
.ProjectPage {
  @apply flex flex-col min-h-screen min-w-full justify-between items-center;
  &__container {
    @apply flex flex-col;
  }
  &__btn {
    @apply self-end mb-7 mr-12;
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
.TopicWindowItem {
  @apply flex justify-between mb-7;
  &__title {
    @apply text-base self-center;
  }
}
</style>
