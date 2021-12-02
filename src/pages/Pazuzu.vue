<script setup lang="ts">
import { PazuzuProvider } from "@/providers"
import { PazuzuInject, Lamashtu, Card } from "@/components/Pazuzu"
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
      <Card>
        <PazuzuInject />
      </Card>
      <Card>
        <Lamashtu context="lamashtu" />
      </Card>
    </div>
  </PazuzuProvider>
</template>