<template>
  <div class="ProjectPage">
    <TopicsTable :topics="getTopics"></TopicsTable>
  </div>
</template>

<script>
import TopicsTable from '@/components/UI/TopicsTable.vue'
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  components: { TopicsTable },
  name: 'ProjectPage',
  methods: {
    ...mapMutations ({

    }),
    ...mapActions({
      fetchTopics: 'topic/fetchTopics'
    })
  },
  computed: {
    ...mapState({
      topics: state => state.topics
    }),
    ...mapGetters({
      getTopics: 'topic/getTopics'
    })
  },
  mounted(){
    this.fetchTopics()
  }
}
</script>

<style lang="scss" scoped>
.ProjectPage {
}
</style>
