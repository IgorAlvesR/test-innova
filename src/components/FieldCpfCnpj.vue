<template>
  <v-text-field
    data-testid
    :value="value"
    @input="$emit('input', $event)"
    :rules="cpfCnpjRules"
    label="CPF/CNPJ"
    v-mask="['###.###.###-##', '##.###.###/####-##']"
    required
  />
</template>

<script>
import { cpf, cnpj } from 'cpf-cnpj-validator'

export default {
  props: {
    value: String
  },
  data: () => ({
    cpfCnpjRules: [
      (v) => !!v || 'Campo obrigatório',
      (v) =>
        (v?.replace(/\D/g, '').length === 14 && cnpj.isValid(v)) ||
        (v?.replace(/\D/g, '').length === 11 && cpf.isValid(v)) ||
        'Cpf ou Cnpj informado não é válido'
    ]
  })
}
</script>
