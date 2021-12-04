<script lang="ts" setup>
import { useStore } from "vuex"
import { Plus } from "@/components/icons"
import { computed } from "@vue/reactivity"

const store = useStore()
const count = computed(() => store.state.count)
const increment = () => store.commit("INCREMENT") 
</script>
<template>
  <div>Lilitu</div>
  <div @click="increment" class="py-2 flex align-middle">
    <Plus color="black" />
    <p class="px-3">{{ count }}</p>
  </div>
</template>
