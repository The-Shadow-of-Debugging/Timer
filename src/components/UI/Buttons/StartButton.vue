<template>
  <div class="StartButton">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white">
      <path d="M8.5 18.1V5.9L18.075 12ZM10 12ZM10 15.35 15.275 12 10 8.65Z"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'StartButton'
}
</script>

<style lang="scss" scoped>
.StartButton {
  @apply w-7 h-7 text-center p-0;
  background-color: #838383;
}
</style>
