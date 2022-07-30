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

    <v-tab-item>exibição</v-tab-item>
    <v-tab-item>
      <!-- 
        TRICK - utilizado condicional para que os dados sejam re-renderizados ao mudar para essa tab
       -->
      <FormIntegrators v-if="tab === 1" />
    </v-tab-item>
    <v-tab-item>gráficos</v-tab-item>
  </v-tabs>
</template>

<script>
import FormIntegrators from './FormIntegrators'

export default {
  components: {
    FormIntegrators
  },
  data: () => ({
    tab: null
  })
}
</script>
