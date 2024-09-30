<template>
  <div>
    <h3 class="text-9xl font-playpen font-semibold dark:text-secondary-500">{{ title }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    tyep: String,
    require: true
  }
})
</script>
