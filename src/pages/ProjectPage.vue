<template>
  <div class="ProjectPage">
    <div class="ProjectPage__container">
      <TopicsTable :topics="getTopic" @remove="removeTopic"></TopicsTable>
      <div @click="showDialog">+ New Topic</div>
      <TopicWindow v-model:show="dialogVisible" class="TopicWindow">
        <TopicForm @create="createTopic"></TopicForm>
      </TopicWindow>
    </div>
    <MyButton :title="'Start'" class="ProjectPage__btn" @click="$router.push(`/timer/${$route.params.id}`)"></MyButton>
  </div>
</template>

<script>
import TopicsTable from '@/components/UI/TopicsTable.vue'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
import MyButton from '@/components/UI/MyButton'
import TopicWindow from '@/components/UI/ModalWindows/TopicWindow'
import TopicForm from '@/components/UI/Forms/TopicForm'
export default {
  components: { TopicWindow, MyButton, TopicsTable, TopicForm },
  data() {
    return {
      dialogVisible: false,
    }
  },
  name: 'ProjectPage',
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
</style>
