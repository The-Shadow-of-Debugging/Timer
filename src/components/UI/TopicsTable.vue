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
          <tr v-for="topic in topics" :key="topic.id">
              <td>{{topic.title}}</td>
              <td>{{fromStringToTime(topic.start)}}</td>
              <td>{{fromStringToTime(+topic.start + +topic.duration)}}</td>
              <td>{{fromStringToTime(topic.duration)}}</td>
              <td>
                <svg @click="$emit('remove', topic)" width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="1" x2="14" y2="1" stroke="#838383" stroke-width="2"/>
                </svg>
              </td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    name: "TopicsTable",
    props: {
        topics: {
            type: Array,
            required: true
        }
    },
    methods: {
      fromStringToTime(number) {
        const date = new Date((+number * 1000) - 10800000)
        return (String(date.getHours()).length === 2 ? date.getHours() : '0' + date.getHours()) + ':'
        + (String(date.getMinutes()).length === 2 ? date.getMinutes() : '0' + date.getMinutes()) + ':'
        + (String(date.getSeconds()).length === 2 ? date.getSeconds() : '0' +date.getSeconds())
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
