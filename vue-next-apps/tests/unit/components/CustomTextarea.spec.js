import { mount } from '@vue/test-utils'
import CustomTextarea from '@/components/CustomTextarea.vue'

test('emits textarea value on click', async () => {
    const wrapper = mount(CustomTextarea)
    const description = 'Some very long text...'
  
    await wrapper.findComponent({ ref: 'description' }).setValue(description)
  
    wrapper.find('.submit').trigger('click')
  
    expect(wrapper.emitted('submit')[0][0]).toEqual({ description })
  })