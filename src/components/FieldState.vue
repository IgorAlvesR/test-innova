<template>
  <ProviderGetStates #default="{ data }">
    <v-autocomplete
      v-if="!!data.length"
      label="UF"
      :value="value"
      :items="data"
      @input="$emit('input', $event)"
    />
  </ProviderGetStates>
</template>

<script>
import ProviderGetStates from './providers/ProviderGetStates'

export default {
  components: {
    ProviderGetStates
  },
  props: {
    value: String
  }
}
</script>
