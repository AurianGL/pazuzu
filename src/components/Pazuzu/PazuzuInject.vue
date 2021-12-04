<script setup lang="ts">
import { inject } from "vue"
import { Plus } from "@/components/icons"
const { name, version, count, increment } = inject("pazuzu")
</script>
<template>
  <p>{{ name }}</p>
  <p>{{ version }}</p>
  <div class="flex justify-center align-middle items-center">
    <div @click="increment" class="py-2 flex align-middle">
      <Plus color="black" />
    </div>
    <p class="px-3">{{ count }}</p>
  </div>
</template>