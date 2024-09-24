<template>
  <div :class="[buttons.theme[theme], buttons.sizes[size]]" class="cursor-pointer">
    <div>
      {{ label }}
    </div>
  </div>
</template>

<script setup>
const buttons = {
  theme: {
    primary: 'secondary_bg text-white',
    secondary: 'green_bg text-white'
  },

  sizes: {
    sm: 'w-24 py-2',
    md: 'w-28 py-2'
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
