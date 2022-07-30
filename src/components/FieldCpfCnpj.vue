<template>
  <v-text-field
    :value="cpfCnpj"
    @input="$emit('input', $event)"
    :rules="cpfCnpjRules"
    label="Cpf/Cnpj"
    v-mask="['###.###.###-##', '##.###.###/####-##']"
    required
  />
</template>

<script>
import { cpf, cnpj } from 'cpf-cnpj-validator'

export default {
  props: {
    cpfCnpj: String
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
