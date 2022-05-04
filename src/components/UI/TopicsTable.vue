<template>
  <div class="TopicsTable">
      <table>
          <tr>
              <th>Topic</th>
              <th>Expected Start</th>
              <th>Expected End</th>
              <th>Time Left</th>
            <th></th>
          </tr>
          <tr v-for="topic in topics" :key="topic.id">
              <td>{{topic.title}}</td>
              <td>{{topic.start}}</td>
              <td>{{topic.end}}</td>
              <td>{{topic.left}}</td>
              <td>
                <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
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
