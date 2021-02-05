import { mount } from '@vue/test-utils'
import ComplexForm from '@/components/ComplexForm.vue'

test('submits a form', async () => {
  const wrapper = mount(ComplexForm)

  await wrapper.find('input[type=email]').setValue('name@mail.com')
  await wrapper.find('textarea').setValue('Lorem ipsum dolor sit amet')
  await wrapper.find('select').setValue('moscow')
  await wrapper.find('input[type=checkbox]').setValue()
  await wrapper.find('input[type=radio][value=monthly]').setValue()
})