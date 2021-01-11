<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div  ref="root">
      this is a ref element
    </div>
  </div>
</template>
<script>
import {onMounted, ref } from 'vue'
export default {
    setup(){
      const root=ref(null);
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
