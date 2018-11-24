<template>
  <div class="sidebar">
    <div class="form-group row">
      <label for="numPages" class="col-sm-2 col-form-label">Pages</label>
      <div class="col-sm-10">
        <input
          type="number"
          class="form-control"
          id="numPages"
          min="1"
          v-model="numPages"
        >
      </div>
   </div>
    <button
      class="btn btn-primary mb-3"
      @click="handlerSubmit()"
      :disabled="disabled"
    >
      Generate
    </button>
  </div>
</template>

<script>
export default {
  name: 'contract',
  props: {
    disabled: Boolean
  },
  data: () => ({
    numPages: 1
  }),

  methods: {
    handlerSubmit () {
      this.$emit('update', {
        pages: this.numPages
      })
    }
  },

  watch: {
    numPages (val) {
      this.$emit('update', {
        pages: val
      })
    }
  }
}
</script>

<style>
  .sidebar {
    background: #fff;
    border: 1px solid #eee;
    padding: 30px 10px;
  }
</style>