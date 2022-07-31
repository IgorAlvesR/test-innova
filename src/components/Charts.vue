<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <PieChart
          :chartData="{
            datasets: [
              {
                data: filterStates(),
                backgroundColor: colorsStates
              }
            ],
            labels: [...new Set(states)]
          }"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import PieChart from './PieChart'
import { fetchGetIntegrators } from './providers/ProviderIntegrators'

export default {
  components: {
    PieChart
  },
  data: () => ({
    integrators: []
  }),
  computed: {
    colorsStates() {
      return this.integrators.map(
        () => `#${Math.floor(Math.random() * 16777215).toString(16)}`
      )
    },
    states() {
      return this.integrators.map((it) => it.estado)
    }
  },
  async mounted() {
    this.integrators = await fetchGetIntegrators()
  },
  methods: {
    /* 
    TRICK -> código apenas para filtrar quantidade de estados que existem
    deveria estar na api    
    */
    filterStates() {
      const statesUnique = [...new Set(this.states)]
      const countState = []
      const count = []
      statesUnique.forEach((state) => {
        countState.push({
          [state]: this.integrators
            .filter((it) => state === it.estado)
            .map((it) => it.estado).length
        })
      })
      countState.forEach((it) => {
        count.push(...Object.values(it))
      })
      return count
    }
  }
}
</script>
