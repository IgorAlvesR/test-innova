<template>
  <v-container class="mt-6">
    <v-card class="pa-6">
      <v-form ref="form" v-model="valid" lazy-validation>
        <FieldCpfCnpj v-model="cpfCnpj" />
        <v-text-field v-model="integratorName" label="Nome do integrador" />
        <v-text-field v-model="ownerName" label="Nome do proprietário" />
        <FieldState v-model="state" />
        <v-text-field v-model="city" label="Cidade" />
        <v-autocomplete
          v-model="marks"
          multiple
          chips
          label="Marcas de painéis"
          :items="[
            'Jinko Solar',
            'Trina Solar',
            'Canadian Solar',
            'Ja Solar',
            'Hanwha Q-Cells',
            'GCL-Si'
          ]"
        />
        <v-autocomplete
          v-model="companySize"
          label="Porte da empresa"
          :items="['Pequena', 'Média', 'Grande']"
        />

        <v-btn class="mt-6" color="primary" :disabled="!valid" @click="add()">
          Cadastrar
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import FieldCpfCnpj from './FieldCpfCnpj'
import FieldState from './FieldState'

export default {
  components: {
    FieldCpfCnpj,
    FieldState
  },
  data: () => ({
    valid: true,
    integratorName: null,
    cpfCnpj: null,
    ownerName: null,
    state: null,
    city: null,
    marks: [],
    companySize: null
  }),
  methods: {
    add() {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        console.log('é válido')
      }
    }
  }
}
</script>
