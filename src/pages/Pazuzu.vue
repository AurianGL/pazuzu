<script setup lang="ts">
import { ComposedProvider } from "@/providers"
import { PazuzuInject, Lamashtu, Lilitu, Card } from "@/components/Pazuzu"
</script>
<template>
  <ComposedProvider>
    <div
      class="
        w-screen
        h-screen
        bg-pazuzu-img
        bg-center
        bg-no-repeat
        flex
        items-center
        justify-center
        bg-black
      "
    >
      <Card title="Inject">
        <PazuzuInject />
      </Card>
      <Card title="Dynamic inject">
        <Lamashtu context="lamashtu" />
      </Card>
      <Card title="With vueX">
        <Lilitu />
      </Card>
    </div>
  </ComposedProvider>
</template>