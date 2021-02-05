import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'
test('creates a todo', async () => {
    const wrapper = mount(TodoApp)
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)
  
    await wrapper.get('[data-test="new-todo"]').setValue('New todo')
    await wrapper.get('[data-test="form"]').trigger('submit')
  
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
  })

  test('completes a todo', async () => {
    const wrapper = mount(TodoApp)
  
    await wrapper.get('[data-test="todo-checkbox"]').setValue(true)
  
    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
  })