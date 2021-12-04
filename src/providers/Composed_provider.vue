<script lang="ts" setup>
import { LamashtuProvider, PazuzuProvider } from "@/providers"
</script>
<template>
  <PazuzuProvider>
    <LamashtuProvider>
      <slot />
    </LamashtuProvider>
  </PazuzuProvider>
</template>