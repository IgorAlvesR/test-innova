// Libraries
import Vuetify from 'vuetify'

// Components
import FieldCpfCnpj from '../../src/components/FieldCpfCnpj'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'

describe('FieldCpfCnpj.vue', () => {
  const localVue = createLocalVue()
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })
  it('Deve entrar um valor de cpf ou cnpj e retornar o mesmo mascarado', () => {
    const wrapper = mount(FieldCpfCnpj, {
      localVue,
      vuetify,
      propsData: { value: '10196083907' }
    })
    expect(wrapper.find('[data-testid]').element.value).toBe('101.960.839-07')
  })
})
