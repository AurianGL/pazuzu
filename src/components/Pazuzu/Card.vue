<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "Pouet"
  }
})
</script>

<template>
  <div class="font-bold text-center p-2">
    <div class="bg-yellow-500 text-center rounded">{{ props.title }}</div>
    <div class="text-gray-900 text-xl p-4 mt-2 rounded bg-yellow-500">
      <slot></slot>
    </div>
  </div>
</template>