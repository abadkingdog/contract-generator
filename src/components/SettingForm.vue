<template>
  <div class="ui basic segment setting-form">
    <h2 class="ui inverted header setting-header">Settings</h2>
    <div class="ui form inverted">
      <template v-for="(item, key) in sectionSettings">
        <setting-form-multi-choice
          :id="item.id"
          :key="key"
          :placeholder="item.placeholder"
          :label="item.label"
          :default-value="item.defaultValue"
          :options="item.options"
          :cbx-id="item.cbxId"
          @onChange="handleSectionChange"
        />
      </template>
      <div class="field">
        <label for="pagesCountId">Pages</label>
        <input
          id="pagesCountId"
          v-model="pagesCount"
          type="number"
          min="1"
        >
      </div>
      <div class="field">
        <label for="sectionsConfigId">Page sections</label>
        <textarea
          id="sectionsConfigId"
          v-model="sectionsConfig"
          rows="3"
        ></textarea>
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
import { mapActions, mapState } from 'vuex'
import SettingFormMultiChoice from './SettingFormMultiChoice.vue'
import { SECTION_SETTINGS } from '@/constants/settings'

export default {
  name: 'SettingForm',
  components: {
    SettingFormMultiChoice
  },

  props: {
    disabled: Boolean
  },

  data: () => ({
    pagesCount: 1,
    sectionsConfig: [],
    sectionSettings: Object.values(SECTION_SETTINGS),
    cbxDebug: true
  }),

  mounted() {
    this.cbxDebug = this.debugMode
    this.pagesCount = this.page.count
    this.sectionsConfig = this.page.sections.join(',')
  },

  methods: {
    ...mapActions('settings', [
      'changeSectionSettings',
      'setPagesCount',
      'setSectionsConfig',
      'toggleDebugMode'
    ]),

    handleSubmit() {
      this.$emit('generate')
    },

    handleSectionChange({ id, value }) {
      this.changeSectionSettings({ id, value })
    }
  },

  computed: {
    ...mapState('settings', [
      'page',
      'debugMode'
    ])
  },

  watch: {
    cbxDebug(val) {
      this.toggleDebugMode(val)
      // this.$emit('switchDebugMode', val)
    },

    pagesCount(val) {
      this.setPagesCount(parseInt(val, 10))
    },

    sectionsConfig(val) {
      this.setSectionsConfig(val)
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
