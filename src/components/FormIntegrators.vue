<template>
  <v-container class="mt-6">
    <v-card class="pa-6">
      <v-alert :value="!!error" transition="scale-transition" type="error">
        {{ error }}
      </v-alert>
      <v-alert
        :value="showAlertSuccess && !error"
        transition="scale-transition"
        type="success"
      >
        Integrador cadastrado com sucesso
      </v-alert>
      <v-form ref="form" v-model="valid" lazy-validation>
        <FieldCpfCnpj v-model="integrator.cpfCnpj" />
        <v-text-field v-model="integrator.name" label="Nome do integrador" />
        <v-text-field
          v-model="integrator.ownerName"
          label="Nome do proprietário"
        />
        <FieldState v-model="integrator.state" />
        <v-text-field v-model="integrator.city" label="Cidade" />
        <v-autocomplete
          v-model="integrator.marks"
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
          v-model="integrator.companySize"
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
import { fetchAddIntegrators } from './providers/ProviderIntegrators'

export default {
  components: {
    FieldCpfCnpj,
    FieldState
  },
  data: () => ({
    valid: true,
    showAlertSuccess: false,
    error: false,
    integrator: {
      name: null,
      cpfCnpj: null,
      ownerName: null,
      state: null,
      city: null,
      marks: [],
      companySize: null
    }
  }),
  methods: {
    disabledAlert(alert) {
      setTimeout(() => {
        this[alert] = false
      }, 3000)
    },
    async add() {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        const response = await fetchAddIntegrators(this.integrator)
        if (response?.message) {
          this.error = response.message
          this.disabledAlert('error')
          return
        }
        this.$refs.form.reset()
        this.showAlertSuccess = true
        this.disabledAlert('showAlertSuccess')
      }
    }
  }
}
</script>
