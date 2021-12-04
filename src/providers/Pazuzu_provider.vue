<script lang="ts">
import { defineComponent, provide } from "vue"
import { useCount } from "@/composables"
export default defineComponent({
  name: "PazuzuProvider"
})
</script>
<script setup lang="ts">
const { count, increment } = useCount()
provide("pazuzu", {
  name: "Pazuzu",
  count,
  increment,
  version: "1.0.0"
})
</script>
<template>
  <slot />
</template>