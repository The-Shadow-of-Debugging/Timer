<template>
  <div class="TimerButton">
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white">
        <path d="M14.25 18.5V5.5H17.8V18.5ZM6.2 18.5V5.5H9.75V18.5Z"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'TimerButton',
}
</script>

<style lang="scss" scoped>
.TimerButton {
  @apply w-7 h-7 text-center p-0;
  background-color: #838383;
}
</style>
