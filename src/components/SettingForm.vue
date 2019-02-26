<template>
  <div class="ui basic segment setting-form">
    <h2 class="ui inverted header setting-header">Settings</h2>
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
            <label for="allFamilies">Select all</label>
          </div>
        </div>
        <label for="valueFamilyId">Font family</label>
        <multiselect
          v-if="showFamilySelect"
          id="valueFamilyId"
          v-model="valueFamily"
          :clear-on-select="false"
          :close-on-select="false"
          :multiple="true"
          :options="optionsFamily"
          placeholder="Select Font Family"
        />
      </div>
      <div class="field">
        <label for="pagesCountId">Pages</label>
        <input
          id="pagesCountId"
          v-model="pagesCount"
          type="number"
          min="1"
        >
      </div>
      <div class="ui divider"></div>
      <button
        class="ui primary button fluid "
        :class="{disabled, loading: disabled}"
        :disabled="disabled"
        @click="handleSubmit"
      >
        Generate
      </button>
      <div class="ui divider"></div>
      <div class="slot">
        <slot></slot>
      </div>
    </div>
    <div class="ui form inverted to-bottom">
      <div class="ui checkbox">
        <input
          id="cbxDebugId"
          v-model="cbxDebug"
          name="debug"
          type="checkbox"
        >
        <label for="cbxDebugId">Show info</label>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { FONT_LIST } from '@/constants/fonts'
import { DEFAULT_FONT } from '@/constants/settings'

export default {
  name: 'SettingForm',
  components: {
    Multiselect
  },

  props: {
    disabled: Boolean,
    debugMode: Boolean
  },

  data: () => ({
    pagesCount: 1,
    optionsFamily: FONT_LIST,
    valueFamily: [DEFAULT_FONT],
    cbxDebug: true,
    cbxAllFamily: false
  }),

  mounted() {
    this.cbxDebug = this.debugMode
  },

  computed: {
    showFamilySelect() {
      return this.optionsFamily.length
    }
  },

  methods: {
    selectAllFonts() {
      this.valueFamily = this.optionsFamily
    },

    handleSubmit() {
      this.$emit('update', {
        pages: this.pagesCount,
        fontFamilies: this.valueFamily
      })
    }
  },

  watch: {
    cbxAllFamily(val) {
      if (val) {
        this.selectAllFonts()
      } else {
        this.valueFamily = null
      }
    },

    cbxDebug(val) {
      this.$emit('switchDebugMode', val)
    }
  }
}
</script>

<style lang="less">
  .setting-form {
    height: 100%;
  }
  .ui.header.setting-header {
    padding: 1rem 0 2rem;
  }
  .fonts-select .multiselect > .multiselect__tags {
    max-height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .buttons-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
    .ui.button {
      flex: 0 1 46%;
    }
  }
  .ui.form.to-bottom {
    position: absolute;
    bottom: 50px;
    z-index: 201;
  }
  .slot {
    margin: 4rem 0;
  }
</style>
