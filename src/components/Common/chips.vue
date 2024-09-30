<template>
  <div v-for="item in items" :key="item.id">
    <p>{{ item.name }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array
  }
})
</script>
