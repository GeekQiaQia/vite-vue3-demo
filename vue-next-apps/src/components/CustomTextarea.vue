<template>
  <form>
    <textarea v-model="description" ref="description" />
    <button @click="handleClick">Send</button>
  </form>
</template>

<script lang="ts">
import {  Vue } from 'vue-class-component';
export default class CustomInput extends Vue {
    description:String=''
       handleClick() {
      this.$emit('submit', this.description)
    }
}
</script>