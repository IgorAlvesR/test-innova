<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <PieChart
          :width="100"
          :height="100"
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
        <p>Integradores por estado</p>
        <br />
        <hr />
      </v-col>
      <v-col cols="12">
        <PieChart
          :width="100"
          :height="100"
          :chartData="{
            datasets: [
              {
                data: filterMarks(),
                backgroundColor: colorsStates
              }
            ],
            labels: marks
          }"
        />
        <p>Integradores por marcas</p>
        <br />
        <hr />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import PieChart from './PieChart'
import { fetchGetIntegrators } from './providers/ProviderIntegrators'
let randomColor = require('randomcolor')
export default {
  components: {
    PieChart
  },
  data: () => ({
    integrators: []
  }),
  computed: {
    colorsStates() {
      return this.integrators.map(() => randomColor())
    },
    states() {
      return this.integrators.map((it) => it.estado)
    },
    marks() {
      return [
        'Jinko Solar',
        'Trina Solar',
        'Canadian Solar',
        'Ja Solar',
        'Hanwha Q-Cells',
        'GCL-Si'
      ]
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
    },
    filterMarks() {
      const countMark = []
      const count = []
      this.marks.forEach((mark) => {
        countMark.push({
          [mark]: this.integrators.filter((it) => it.marcas.includes(mark))
            .length
        })
      })
      countMark.forEach((it) => {
        count.push(...Object.values(it))
      })
      return count
    }
  }
}
</script>
