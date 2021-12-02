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
provide("lamashtu", {
  name: "Lamashtu",
  version: "1.0.1"
})
</script>
<template>
  <slot />
</template>