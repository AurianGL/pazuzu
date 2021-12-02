import { ref, readonly } from "vue"

const count = ref<number>(0)

export const useCount = () => {
  return {
    count: readonly(count),
    increment: () => count.value++
  }
}
