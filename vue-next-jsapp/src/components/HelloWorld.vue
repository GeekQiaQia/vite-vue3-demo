<template>
  <h1>{{ msg }}</h1>
  <button @click="counter++">counter is: {{ counter }}</button>
   {{twiceTheCounter}}
  <p>Edit <code>components/HelloWorld.vue </code>  to test hot module replacement.</p>
</template>

<script>
  import { getCurrentInstance, onMounted, ref,watch,computed  } from 'vue'
  import useCounter from './useCounter';
 

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   // 当setup中定义的响应式数据和data()选项中定义的重复时，vue3优先获取data中的数据；
   //  在源码中先从setupState中取值，再从data中取值；
  setup(props,ctx){
      const { counter,twiceTheCounter }=useCounter();
      const instance= getCurrentInstance();  // 获组件实例
      console.log(ref,watch,computed,props,ctx);
    // const counter = ref(0)  // ref 返回响应式对象 {value:0}
    // const twiceTheCounter = computed(() => counter.value * 2)
    // console.log(counter.value);  // 0 

    // console.log(twiceTheCounter);
    // watch(()=>{return counter.value}, (newValue, oldValue) => {
    //     console.log('The new counter value is: ' + counter.value)
    //   })

       onMounted(()=>{
       // 在组件挂载的时候，通过组件实例的上下文获取setup外部属性；
        console.log(instance.ctx.counter);  // 1;
     });

    return {counter,twiceTheCounter }
  },
  data() {
    return {
        // 与setup中变量相同时；counter从data中取值；
      counter2: 1
    }
  }
};


</script>
