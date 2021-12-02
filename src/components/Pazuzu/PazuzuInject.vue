<script setup lang="ts">
import { inject } from "vue"
const { name, version, count, increment } = inject("pazuzu")
</script>
<template>
  <p>{{ name }}</p>
  <p>{{ version }}</p>
  <div class="flex justify-center align-middle items-center">
    <div
      @click="increment"
      class="py-2 flex align-middle"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="crimson" viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <p class="px-3">{{ count }}</p>
  </div>
  <p></p>
</template>