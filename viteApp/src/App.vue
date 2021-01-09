<template>
  <div>
      <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <RefSugar/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import RefSugar from './components/RefSugar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    RefSugar
  }
}
</script>
