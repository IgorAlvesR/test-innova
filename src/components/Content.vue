<template>
  <v-tabs
    v-model="tab"
    prev-icon="mdi-arrow-left-bold-outline"
    next-icon="mdi-arrow-right-bold-outline"
    grow
    show-arrows
  >
    <v-tab class="d-flex justify-start">
      <v-icon left> mdi-account-multiple </v-icon>
      Exibir integradores
    </v-tab>
    <v-tab class="d-flex justify-start">
      <v-icon left> mdi-account-multiple-plus </v-icon>
      Cadastrar integradores
    </v-tab>
    <v-tab class="d-flex justify-start">
      <v-icon left> mdi-chart-bar </v-icon>
      Gráficos
    </v-tab>

    <!-- 
        TRICK - utilizado condicional para que os dados sejam re-renderizados ao mudar para essa tab
       -->
    <v-tab-item>
      <TableIntegrators v-if="tab === 0" />
    </v-tab-item>
    <v-tab-item>
      <FormIntegrators v-if="tab === 1" />
    </v-tab-item>
    <v-tab-item>
      <Charts v-if="tab === 2" />
    </v-tab-item>
  </v-tabs>
</template>

<script>
import FormIntegrators from './FormIntegrators'
import TableIntegrators from './TableIntegrators'
import Charts from './Charts'

export default {
  components: {
    FormIntegrators,
    TableIntegrators,
    Charts
  },
  data: () => ({
    tab: null
  })
}
</script>
