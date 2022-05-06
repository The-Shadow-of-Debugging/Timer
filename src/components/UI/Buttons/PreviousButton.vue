<template>
  <div class="PreviousButton">
    <button disabled="disabled">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white">
        <path d="M6.125 17.3V6.7H7.625V17.3ZM17.875 17.3 9.925 12 17.875 6.7ZM16.375 12ZM16.375 14.5V9.5L12.625 12Z"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'PreviousButton',
  props: {
    disabled: {
      type: Boolean,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.PreviousButton {
  @apply w-7 h-7 text-center p-0;
  background-color: #838383;
}
</style>
