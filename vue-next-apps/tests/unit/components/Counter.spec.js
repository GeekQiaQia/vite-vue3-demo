import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

test('emits an event when clicked', () => {
    const wrapper = mount(Counter)
  
    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')
  
    expect(wrapper.emitted()).toHaveProperty('increment')
  })

  test('emits an event with count when clicked', () => {
    const wrapper = mount(Counter)
  
    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')
  
    // `emitted()` accepts an argument. It returns an array with all the
    // occurrences of `this.$emit('increment')`.
    const incrementEvent = wrapper.emitted('increment')
  
    // We have "clicked" twice, so the array of `increment` should
    // have two values.
    expect(incrementEvent).toHaveLength(2)
  
    // Then, we can make sure each element of `wrapper.emitted('increment')`
  // contains an array with the expected object.
  expect(incrementEvent[0]).toEqual([
    {
      count: 1,
      isEven: false
    }
  ])

  expect(incrementEvent[1]).toEqual([
    {
      count: 2,
      isEven: true
    }
  ])
  })

  /**
   * If you are using the Composition API,
   *  you will be calling context.emit() instead of this.$emit(). emitted()
   *  captures events from both,
   *  so you can test your component using the same techniques described here
   * 
   * 
  */