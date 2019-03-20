<template>
  <div class="field fonts-select">
    <div class="pull-right">
      <div class="ui checkbox">
        <input
          :id="cbxId"
          v-model="selectAll"
          type="checkbox"
        >
        <label :for="cbxId">Select all</label>
      </div>
    </div>
    <label>{{ label }}</label>
    <multiselect
      v-if="showSelect"
      v-model="value"
      :clear-on-select="false"
      :close-on-select="false"
      :multiple="true"
      :options="options"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },

  props: {
    placeholder: { type: String, default: 'Placeholder' },
    label: { type: String, default: 'Label' },
    inputId: { type: String, default: null },
    defaultValue: { type: Array, default: () => ([]) },
    options: { type: Array, default: () => ([]) },
    cbxId: { type: String, default: 'SelectAll' },
    id: { type: String, default: null },
  },

  data: () => ({
    value: null,
    selectAll: false
  }),

  mounted() {
    this.value = this.defaultValue
  },

  computed: {
    showSelect() {
      return this.options.length
    }
  },

  watch: {
    selectAll(val) {
      this.value = val ? this.options : this.defaultValue
    },

    value(val) {
      this.$emit('onChange', {
        id: this.id,
        value: val
      })
    }
  }
}
</script>

<style lang="less">
  .ui.form .fonts-select {
    input {
      border: 0 !important;
    }
  }
</style>
