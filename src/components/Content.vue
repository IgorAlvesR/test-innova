<template>
  <v-tabs
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
    <v-tab-item>cadastro</v-tab-item>
    <v-tab-item>gráficos</v-tab-item>
  </v-tabs>
</template>
