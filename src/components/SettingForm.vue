<template>
  <div class="ui basic segment">
    <div class="ui form inverted">
      <div class="field fonts-select">
        <div class="pull-right">
          <div class="ui checkbox">
            <input
              id="allFamilies"
              v-model="cbxAllFamily"
              name="allFamilies"
              type="checkbox"
            >
            <label for="allFamilies">Random from all</label>
          </div>
        </div>
        <label for="numPages">Font family</label>
        <multiselect
          v-if="showFamilySelect"
          v-model="valueFamily"
          :clear-on-select="false"
          :close-on-select="false"
          :multiple="true"
          :options="optionsFamily"
          :preselect-first="true"
          placeholder="Select Font Family"
        />
      </div>
      <div class="field">
        <label for="numPages">Pages</label>
        <input
          id="numPages"
          v-model="numPages"
          type="number"
          min="1"
        >
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { FONT_LIST } from '../constants/fonts'

export default {
  name: 'SettingForm',
  components: {
    Multiselect
  },

  props: {
    disabled: Boolean
  },

  data: () => ({
    numPages: 1,
    optionsFamily: FONT_LIST,
    valueFamily: null,
    cbxAllFamily: false,
  }),

  computed: {
    showFamilySelect() {
      return this.optionsFamily.length
    }
    // cbxAllFamily() {
    //   return this.valueFamily && this.valueFamily.length === this.optionsFamily.length
    // }
  },

  methods: {
    selectAllFonts() {
      this.valueFamily = this.optionsFamily
    }
  },

  watch: {
    numPages(val) {
      this.$emit('updatePageCount', {
        pages: val,
      })
    },

    valueFamily(val) {
      this.$emit('updateFonts', {
        fontFamilies: val
      })
    },

    cbxAllFamily(val) {
      if (val) {
        this.selectAllFonts()
      } else {
        this.valueFamily = null
      }
    }
  }
}
</script>

<style>
  .fonts-select .multiselect > .multiselect__tags {
    max-height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
