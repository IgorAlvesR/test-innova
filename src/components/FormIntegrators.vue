<template>
  <v-container class="mt-6">
    <v-card class="pa-6" :elevation="elevation">
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
      </v-form>
      <v-alert :value="!!error" transition="scale-transition" type="error">
        {{ error }}
      </v-alert>
      <v-alert
        :value="showAlertSuccess && !error"
        transition="scale-transition"
        type="success"
      >
        Integrador {{ isUpdate ? 'atualizado' : 'cadastrado' }} com sucesso
      </v-alert>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          v-if="isUpdate"
          color="blue darken-1"
          text
          @click="$emit('close')"
        >
          Cancelar
        </v-btn>
        <v-btn
          :text="!!isUpdate"
          :color="isUpdate ? 'blue darken-1' : 'primary'"
          :disabled="!valid"
          @click="isUpdate ? update() : add()"
        >
          {{ isUpdate ? 'Atualizar' : 'Cadastrar' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import FieldCpfCnpj from './FieldCpfCnpj'
import FieldState from './FieldState'
import {
  fetchAddIntegrators,
  fetchUpdateIntegrators
} from './providers/ProviderIntegrators'

export default {
  props: {
    elevation: String,
    isUpdate: Boolean,
    name: String,
    cpfCnpj: String,
    ownerName: String,
    state: String,
    city: String,
    marks: Array,
    companySize: String,
    id: String
  },
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
  created() {
    this.integrator.name = this.name
    this.integrator.cpfCnpj = this.cpfCnpj
    this.integrator.ownerName = this.ownerName
    this.integrator.state = this.state
    this.integrator.city = this.city
    this.integrator.marks = this.marks
    this.integrator.companySize = this.companySize
  },
  methods: {
    disabledAlert(alert) {
      setTimeout(() => {
        this[alert] = false
        this.$emit('close')
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
    },
    async update() {
      const isValid = this.$refs.form.validate()
      if (isValid) {
        const response = await fetchUpdateIntegrators(this.integrator, this.id)
        if (response?.message) {
          this.error = response.message
          this.disabledAlert('error')
          return
        }
        this.showAlertSuccess = true
        this.disabledAlert('showAlertSuccess')
        this.$emit('updated')
      }
    }
  }
}
</script>
