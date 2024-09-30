<template>
  <div :class="[buttons.theme[theme], buttons.sizes[size]]" class="cursor-pointer text-center">
    <div>
      {{ label }}
    </div>
  </div>
</template>

<script setup>
const buttons = {
  theme: {
    primary: 'bg-primary-500 text-white dark:bg-secondary-500 dark:text-secondary-200',
    secondary: 'bg-secondary-500 text-white'
  },

  sizes: {
    sm: 'w-24 py-2',
    md: 'w-32 py-2',
    lg: 'w-34 py-3'
  }
}
const props = defineProps({
  label: {
    type: String,
    Required: true
  },
  size: {
    type: String
  },
  theme: {
    type: String
  }
})
</script>
