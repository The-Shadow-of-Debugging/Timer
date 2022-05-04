<template>
  <div class="TopicWindow" v-if="show" @click.stop="hideDialog">
    <div class="TopicWindow__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopicWindow',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.TopicWindow {
  @apply inset-0 fixed flex;
  border: 1px solid black;
  background: rgba(0, 0, 0, 0.5);
    &__content {
      @apply m-auto rounded-xl p-5;
      background-color: white;
      min-height: 12px;
      min-width: 400px;
    }
}
</style>
