<template>
  <div class="card">
    <div class="header">
      <already-started class="mark"></already-started>
      <div class="time">
        <div class="start">{{'1:30:00'}}</div>
        <div class="end">{{'1:30:00'}}</div>
      </div>
    </div>
    <div class="title">{{'Project name goes here'}}</div>
  </div>
</template>
<script>
export default {
  name: 'my-card',
}
</script>
<style>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #C4C4C4;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 200px;
  height: 127px;
  padding: 13px 10px;
  box-sizing: border-box;
}
.header {
  display: flex;
  justify-content: space-between;
}
.mark {
  align-self: flex-start;
}
.time {
  color: #004889;
}
</style>

