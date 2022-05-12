<template>
  <div class="MyButton">
    <button>{{title}}</button>
  </div>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.MyButton {
  @apply w-36 h-9 rounded text-center leading-8 font-medium;
  background: #D9D9D9;
  color: #575757;
}
</style>
