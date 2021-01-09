import { ref, computed, watch } from 'vue'
export default function useCounter() {
  const counter = ref(0) // ref 返回响应式对象 {value:0}
  const twiceTheCounter = computed(() => counter.value * 2)
  console.log(counter.value) // 0

  watch(
    () => {
      return counter.value
    },
    (newValue, oldValue) => {
      console.log('The new counter value is: ' + counter.value)
    }
  )

  return {
    counter,
    twiceTheCounter
  }
}
