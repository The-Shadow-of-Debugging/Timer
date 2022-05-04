<template>
  <div class="MyInput">
    <input class="input">
  </div>
</template>

<script>
export default {
  name: 'MyInput'
}
</script>

<style lang="scss" scoped>
.input {
  @apply p-2;
  outline: none;
  border: none;
  background-color: #D9D9D9;
  border-radius: 5px 5px 0px 0px;
  border-bottom: 1px solid #5F5F5F;
}
</style>
