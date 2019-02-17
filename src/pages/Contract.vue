<template>
  <div class="contract">
    <div class="ui container">
      <div class="ui sidebar inverted vertical menu left uncover visible">
        <setting-form
          :disabled="!show"
          @updatePageCount="handleUpdatePageCount"
          @updateFonts="handleUpdateFonts"
        >
          <button
            class="ui submit small button"
            :class="{ disabled: isLoading }"
            :disabled="isLoading"
            @click="handlerSubmit()"
          >
            Generate
          </button>
        </setting-form>
      </div>
      <div class="pusher">
        <h1 class="ui header">Contract generator</h1>
        <template v-if="show">
          <page
            v-for="page in pages"
            :key="page.id"
            :order="page.id"
            :sections="page.sections"
            :settings="settings"
            @updatePageData="handlePageData"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import shuffle from 'lodash/shuffle'
import { SECTION_LIST } from '@/constants/sections'
import Page from '@/components/Page'
import SettingForm from '@/components/SettingForm'

const SECTIONS = shuffle(SECTION_LIST)

export default {
  name: 'Contract',
  components: {
    Page,
    SettingForm
  },

  data: () => ({
    show: true,
    pagesCount: 1,
    settings: {
      fontFamilies: [],
    },
    contractDetails: [],
    isLoading: false
  }),

  methods: {
    handlerSubmit() {
      console.log('submit', this.contractDetails)
      this.isLoading = true
      setTimeout(() => { this.isLoading = false }, 1000)
    },

    handleUpdatePageCount({ pages }) {
      this.show = false
      this.pagesCount = pages
      this.$nextTick(() => {
        this.show = true
      })
    },
    handleUpdateFonts({ fontFamilies }) {
      this.show = false
      this.settings = { ...this.settings, fontFamilies }
      this.$nextTick(() => {
        this.show = true
      })
    },

    handlePageData({ sections, order, fontFamily }) {
      this.contractDetails[order] = {
        sections,
        fontFamily
      }
    }
  },

  computed: {
    pages() {
      const pages = []
      for (let i = 0; i < this.pagesCount; i++) {
        pages.push({
          id: i,
          sections: SECTIONS
        })
      }
      return pages
    }
  },

  watch: {
    pagesCount: {
      deep: true,
      handler(val) {
        this.pagesCount = val
      }
    }
  }
}
</script>

<style>
  .contract {
    background: #fcfcfc;
    padding: 20px 0;
  }
</style>
