<script setup lang="ts">
import { PazuzuProvider } from "@/providers"
import { PazuzuInject } from "@/components/Pazuzu"
</script>
<template>
  <PazuzuProvider>
    <div
      class="
        w-screen
        h-screen
        bg-gradient-to-b
        flex
        items-center
        justify-center
        from-red-600
        to-yellow-500
      "
    >
      <PazuzuInject />
    </div>
  </PazuzuProvider>
</template>