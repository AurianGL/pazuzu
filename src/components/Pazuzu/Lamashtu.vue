<script setup lang="ts">
import { inject } from "vue"
const props = defineProps({
  context: {
    type: String,
    required: true
  }
})
// here the name of the provider is passed as a prop for even more reusability
const { name, version } = inject(props.context)
</script>
<template>
    <p>{{ name }}</p>
    <p>{{ version }}</p>
</template>