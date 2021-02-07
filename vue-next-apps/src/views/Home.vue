<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <custom-input v-model="input" label="Text Input" class="text-input"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import CustomInput from '@/components/CustomInput.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
    CustomInput
  },
})
export default class Home extends Vue {}
</script>
