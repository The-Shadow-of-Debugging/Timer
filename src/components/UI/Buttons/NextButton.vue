<template>
  <div class="StopButton">
    <button disabled="disabled">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white">
        <path d="M16.375 17.3V6.7H17.875V17.3ZM6.125 17.3V6.7L14.075 12ZM7.625 12ZM7.625 14.5 11.375 12 7.625 9.5Z"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'StopButton',
  props: {
    disabled: {
      type: Boolean,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.StopButton {
  @apply w-7 h-7 text-center p-0;
  background-color: #838383;
}
</style>
