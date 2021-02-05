<template>
    <div>
    <input type="email" v-model="email">

    <button @click="submit">Submit</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class Nav extends Vue {
      email='';
       submit() {
      this.$emit('submit', this.email)
    }
  
}
</script>