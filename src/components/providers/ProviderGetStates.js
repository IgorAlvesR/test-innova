const URL_API_STATES =
  'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

export default {
  name: 'ProviderGetStates',
  data: () => ({
    data: [],
    error: null
  }),
  mounted() {
    this.fetchStates()
  },
  methods: {
    async fetchStates() {
      try {
        const response = await fetch(URL_API_STATES)
        const states = await response.json()
        this.data = states.map((state) => `${state.nome} - ${state.sigla}`)
      } catch ({ message }) {
        if (message) {
          this.error = message
        }
      }
    }
  },
  render() {
    return this.$scopedSlots.default({
      data: this.data,
      error: this.error
    })
  }
}
