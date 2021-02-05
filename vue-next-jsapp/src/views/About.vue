<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div  ref="root">
      this is a ref element
    </div>
    <div v-for="(item, i) in list" :ref="el => { if (el) divs[i] = el }">
    {{ item }}
  </div>
  </div>
</template>
<script>
import {onMounted, ref } from 'vue'
export default {
    setup(){
      const root=ref(null);
      const list = reactive([1, 2, 3])
      const divs = ref([])
      
      onMounted(()=>{
         // the DOM element will be assigned to the ref after initial render
        console.log(root.value) // <div>This is a root element</div>
      })

      return {
        
        root
      
      }
    }
}
</script>
