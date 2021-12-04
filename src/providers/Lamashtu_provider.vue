<script lang="ts">
import { defineComponent, provide } from "vue"
export default defineComponent({
  name: "LamashtuProvider"
})
</script>
<script setup lang="ts">
provide("lamashtu", {
  name: "Lamashtu",
  version: "1.0.1"
})
</script>
<template>
  <slot />
</template>