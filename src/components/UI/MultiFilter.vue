
<template>
  <select :value="modelValue" @change="changeOption">
    <option v-for="option in options" :key="option.value" :value="option.value">{{option.name}}</option>
  </select>
</template>
<script>
export default {
  name:'MultiFilter',
  props:{
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  },
}
</script>
<style scoped>
select {
  border: 1px solid #C4C4C4;
  border-radius: 4px;
}
</style>
