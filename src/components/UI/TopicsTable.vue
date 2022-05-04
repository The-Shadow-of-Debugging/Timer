<template>
  <div class="TopicsTable">
      <table>
          <tr>
              <th>Topic</th>
              <th>Expected Start</th>
              <th>Expected End</th>
              <th>Time Left</th>
          </tr>
          <tr v-for="topic in topics" :key="topic.id">
              <td>{{topic.title}}</td>
              <td>{{topic.start}}</td>
              <td>{{topic.end}}</td>
              <td>{{topic.left}}</td>
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
    }
}
</script>

<style>
table tr:nth-child(even) {
    background-color: #DDDDDD;
}
table tr, table th {
    @apply text-center;
}
table th {
    @apply px-5;
}
table th:first-child {
    @apply px-0;
}
</style>