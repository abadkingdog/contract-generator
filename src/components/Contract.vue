<template>
  <div class="contract">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3">
          <Sidebar
            @update="handleUpdate"
            :disabled="!show" />
        </div>
        <div class="col-sm-9">
          <template v-if="show">
            <Page
              v-for="page in pages"
              :key="page.id"
              :sections="page.sections"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import shuffle from 'lodash/shuffle'
import Page from './Page'
import Sidebar from './Sidebar'

const SECTIONS = shuffle([
  'header',
  'title',
  'paragraph',
  'paragraph',
  'list',
  'table',
  'paragraph',
  'paragraph',
  'paragraph',
  'paragraph',
]);

export default {
  name: 'contract',
  components: {
    Page,
    Sidebar
  },

  data: () => ({
    show: true,
    pagesCount: 1
  }),

  methods: {
    handleUpdate ({ pages }) {
      this.show = false
      this.pagesCount = pages;
      this.$nextTick(() => {
        this.show = true
      })
    }
  },

  computed: {
    pages () {
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
      handler (val) {
        console.log(val)
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