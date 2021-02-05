import { mount } from '@vue/test-utils'
import Password from '@/components/Password.vue'


test('renders an error if length is too short', () => {
    const wrapper = mount(Password, {
      props: {
        minLength: 10
      },
      data() {
        return {
          password: 'short'
        }
      }
    })
  
    expect(wrapper.html()).toContain('Password must be at least 10 characters')
  })
  
  // Using setProps

  test('renders a greeting when show is true', async () => {
    const wrapper = mount(Password)
    expect(wrapper.html()).toContain('Hello')
  
    await wrapper.setProps({ show: false })
  
    expect(wrapper.html()).not.toContain('Hello')
  })