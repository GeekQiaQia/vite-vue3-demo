<template>
  <label>
    {{ label }}
    <input
    
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </label>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    label: String,
    modelValue:String
  }
})
export default class CustomInput extends Vue {

}
</script>