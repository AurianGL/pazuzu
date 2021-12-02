<script setup lang="ts">
import { inject } from "vue"
const {name, version, count, increment} = inject("pazuzu")
</script>
<template>
  <div class="text-gray-900 text-xl font-bold text-center">
    <p>{{ name }}</p>
    <p>{{ version }}</p>
    <div class="flex justify-center">
      <button @click="increment" class="rounded bg-red-900 px-3 text-yellow-400">+</button>
      <p class="px-3">{{ count }}</p>
    </div>
    <p></p>
  </div>
</template>