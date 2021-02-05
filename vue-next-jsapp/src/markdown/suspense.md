```html
<template> 
  <div v-if="errMsg"> {{ errMsg }} </div> 
  <Suspense v-else> 
    <template #default> 
      <article-info/> 
    </template> 
    <template #fallback> 
      <div>正在拼了命的加载…</div> 
    </template> 
  </Suspense> 
</template> 
<script> 
import { onErrorCaptured } from 'vue' 
setup () { 
  const errMsg = ref(null) 
  onErrorCaptured(e => { 
    errMsg.value = '呃，出了点问题！' 
    return true 
  })} 
  return { error } 
</script> 

```