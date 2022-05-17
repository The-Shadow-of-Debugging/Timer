<template>
  <div class="TopicsTable">
      <table>
          <tr>
              <th>Topic</th>
              <th>Expected Start</th>
              <th>Expected End</th>
              <th>Duration</th>
            <th></th>
          </tr>
          <draggable :list="topics"
                     item-key="id"
                     @start="drag=true"
                     @end="drag=false" >
            <template #item="{element}">
              <tr>
                <td>{{ element.title }}</td>
                <td>{{ fromStringToTime(element.start) }}</td>
                <td>{{ fromStringToTime(+element.start + +element.duration) }}</td>
                <td>{{ fromStringToTime(element.duration) }}</td>
                <td>
                  <svg @click="$emit('remove', element)" width="14" height="2" viewBox="0 0 14 2" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="14" y2="1" stroke="#838383" stroke-width="2"/>
                  </svg>
                </td>
              </tr>
            </template>
        </draggable>
      </table>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      drag: false,
    }
  },
  name: "TopicsTable",
  components: { draggable },
  props: {
    topics: {
      type: Array,
      required: false,
      default: null
    },
  },
  methods: {
    ...mapMutations ({
      setTopics: 'topic/setTopics'
    }),
    fromStringToTime(number) {
      const date = new Date((+number * 1000) - 10800000)
      console.log('date', date)
      return (String(date.getHours()).length === 2 ? date.getHours() : '0' + date.getHours()) + ':'
          + (String(date.getMinutes()).length === 2 ? date.getMinutes() : '0' + date.getMinutes()) + ':'
          + (String(date.getSeconds()).length === 2 ? date.getSeconds() : '0' + date.getSeconds())
    }
  },
  computed: {
    myList: {
      get() {
        return this.topics
      },
      set(value) {
        this.setTopics(value)
      }
    }
  }
}
</script>

<style scoped>
.TopicsTable {
  @apply mt-20;
}
table {
  @apply mx-auto;
}
table tr:nth-child(even) {
    background-color: #DDDDDD;
}
table tr, table th {
    @apply text-center;
}
table th {
    @apply px-5;
}
table th:last-child {
  @apply px-8;
}
table tr svg {
  @apply mx-auto;
}
</style>
