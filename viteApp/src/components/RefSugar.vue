<template>
    <div>
    <span>refSugar </span>    
    <button @click="inc">{{ count }}</button>
    <div>the computed variable pulsOne: {{pulsOne}}</div>
    <div> ref destruction {{counter}} {{twiceTheCounter}} </div>
    </div>
</template>

<script setup>
 import useCounter from './useCounter';
import {watch,computed} from 'vue'
// declaring a variable that compiles to a ref
ref: count = 1;
ref:pulsOne=computed((()=>count+1));

ref:({counter,twiceTheCounter}=useCounter());
function inc() {
  // the variable can be used like a plain value
  count++
}


// access the raw ref object by prefixing with $
console.log($count.value)

watch($count,()=>{
    console.log(count);
})
</script>

<style scoped>

</style>