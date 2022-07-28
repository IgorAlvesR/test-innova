<template>
  <v-app>
    <Header />
    <v-main>
      <v-container fluid class="pa-0">
        <v-row no-gutters>
          <v-col cols="12">
            <Content />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'App',
  components: { Header, Content }
}
</script>
