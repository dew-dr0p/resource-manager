import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FormInput from '../FormInput.vue'

describe('FormInput', () => {
  it('renders properly', () => {
    const wrapper = mount(FormInput)
    expect(wrapper.text()).toContain('')
  })
})
