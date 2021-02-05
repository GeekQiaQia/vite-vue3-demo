<template>
     <div>
       <div v-if="show">{{ greeting }}</div>
      <input v-model="password">
      <div v-if="error">{{ error }}</div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
     msg: String,
     minLength: {
      type: Number
    },
    show: {
      type: Boolean,
      default: true
    }
  }
})
export default class Password extends Vue {
      password='';
      minLength:number;
      greeting:string='Hello';

    get  error() {
      if (this.password.length < this.minLength) {
        return `Password must be at least ${this.minLength} characters.`
      }
      return
    }
}
</script>