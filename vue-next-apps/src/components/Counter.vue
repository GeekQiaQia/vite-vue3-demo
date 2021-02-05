<template>
  <div>
   <button @click="handleClick">Increment</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class Counter extends Vue {
      count=0;
   handleClick() {
      this.count += 1
       this.$emit('increment', {
        count: this.count,
        isEven: this.count % 2 === 0
      })
    }
}
</script>