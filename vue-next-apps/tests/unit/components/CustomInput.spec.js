import { mount } from '@vue/test-utils'
import CustomInput from '@/views/Home.vue'

test('fills in the form', async () => {
    const wrapper = mount(CustomInput)
  
    await wrapper.find('.text-input input').setValue('text')
  
    // continue with assertions or actions like submit the form, assert the DOM…
  })

  /**
   * If you are using the Composition API,
   *  you will be calling context.emit() instead of this.$emit(). emitted()
   *  captures events from both,
   *  so you can test your component using the same techniques described here
   * 
   * 
  */