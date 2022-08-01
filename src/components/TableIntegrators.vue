<template>
  <v-container class="mt-6">
    <v-card>
      <v-data-table
        :loading="!integrators.length"
        loading-text="Carregando... Por favor aguarde!"
        no-data-text="Não há nenhuma informação disponível"
        :headers="headers"
        :items="integrators"
        :footer-props="{ itemsPerPageText: 'Itens por página' }"
        disable-sort
      >
        <template v-slot:top>
          <v-dialog v-model="dialog">
            <v-card tile id="title">
              <v-card-title>Atualizar dados integrador</v-card-title>
              <hr />
              <v-card-text>
                <v-container>
                  <FormIntegrators
                    v-if="editedItem && dialog"
                    :id="editedItem.id"
                    :name="editedItem.integratorName"
                    :cpfCnpj="editedItem.cpfCnpj"
                    :ownerName="editedItem.ownerName"
                    :state="editedItem.state"
                    :city="editedItem.city"
                    :marks="editedItem.marks"
                    :companySize="editedItem.companySize"
                    elevation="0"
                    isUpdate
                    @close="close"
                    @updated="updateListIntegrators()"
                  />
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
          <ConfirmDialog ref="dialogDelete" />
          <v-alert
            :value="!!deleteAlert.show"
            transition="scale-transition"
            :type="deleteAlert.type"
          >
            {{ deleteAlert.message }}
          </v-alert>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-hover v-slot="{ hover }">
            <v-icon
              :color="hover ? 'primary' : ''"
              small
              class="mr-2"
              @click="editIntegrator(item)"
            >
              mdi-pencil
            </v-icon>
          </v-hover>
          <v-hover v-slot="{ hover }">
            <v-icon
              :color="hover ? 'error' : ''"
              small
              @click="deleteIntegrator(item)"
            >
              mdi-delete
            </v-icon>
          </v-hover>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import {
  fetchGetIntegrators,
  fetchDeleteIntegrators
} from './providers/ProviderIntegrators'
import FormIntegrators from './FormIntegrators'
import ConfirmDialog from './ConfirmDialog'

export default {
  components: {
    FormIntegrators,
    ConfirmDialog
  },
  data: () => ({
    deleteAlert: {
      type: 'success',
      show: false,
      message: 'Integrador excluído com sucesso!'
    },
    integrators: [],
    editedItem: null,
    dialog: false,
    headers: [
      { text: 'CPF/CNPJ', value: 'cpfCnpj' },
      { text: 'Nome do integrador', value: 'integratorName' },
      { text: 'Nome do proprietário', value: 'ownerName' },
      { text: 'Ações', value: 'actions' }
    ]
  }),
  watch: {
    dialog(val) {
      val || this.close()
    }
  },
  async created() {
    this.integrators = await fetchGetIntegrators()
    this.initialize()
  },
  methods: {
    initialize() {
      this.integrators = this.integrators.map((it) => ({
        id: it.id,
        cpfCnpj: it.cpfCnpj,
        integratorName: it.nomeIntegrador,
        ownerName: it.nomeProprietario,
        state: it.estado,
        city: it.cidade,
        marks: it.marcas,
        companySize: it.porteEmpresa
      }))
    },
    editIntegrator(integrador) {
      this.editedItem = integrador
      this.dialog = true
    },
    async deleteIntegrator(integrator) {
      if (
        await this.$refs.dialogDelete.open(
          'Excluir Integrador',
          `Confirma a exclusão do integrador <strong>${integrator.integratorName}</strong> ?`
        )
      ) {
        const response = await fetchDeleteIntegrators(integrator.id)
        if (response?.message) {
          this.deleteAlert.show = true
          this.deleteAlert.message = response.message
          this.type = 'error'
        }
        this.deleteAlert.show = true
        this.integrators = await fetchGetIntegrators()
        this.initialize()
        setTimeout(() => {
          this.deleteAlert.show = false
        }, 1500)
      }
    },
    deleteIntegratorConfirm() {},
    close() {
      this.dialog = false
    },
    async updateListIntegrators() {
      this.integrators = await fetchGetIntegrators()
      this.initialize()
    }
  }
}
</script>
