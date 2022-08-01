<template>
  <v-container style="max-width: 300px">
    <div v-if="!isLengthChartData" class="text-center">
      <v-progress-circular indeterminate color="primary" />
    </div>
    <Pie
      v-else
      :chartData="chartData"
      :chartId="chartId"
      :width="width"
      :height="height"
      :cssClasses="cssClasses"
      :styles="styles"
      :plugins="plugins"
    />
  </v-container>
</template>
<script>
import { Pie } from 'vue-chartjs/legacy'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'PieChart',
  components: {
    Pie
  },
  props: {
    chartId: {
      type: String,
      default: 'pie-chart'
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => ({})
    },
    plugins: {
      type: Array,
      default: () => []
    },
    chartData: Object
  },
  data: () => ({
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  computed: {
    isLengthChartData() {
      return this.chartData?.datasets[0]?.data.length
    }
  }
}
</script>
