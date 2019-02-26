<template>
  <table
    ref="box"
    class="table-bordered"
  >
    <tbody>
      <tr
        v-for="row in trCount"
        :key="row"
      >
        <td
          v-for="cell in tdCount"
          :key="cell"
          width="*"
        >
          <span v-if="lipsum">
            {{ lipsum.generate(5).substring(0, 5) }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import random from 'lodash/random'
import coordMixin from '@/mixins/coords'
import { LoremIpsum } from '@/utils/lorem-ipsum'

export default {
  name: 'SectionTable',

  mixins: [coordMixin],

  data: () => ({
    tdCount: 1,
    trCount: 1,
    lipsum: null,
  }),

  created() {
    this.lipsum = new LoremIpsum()
  },

  mounted() {
    this.createCells()
  },

  methods: {
    createCells() {
      this.tdCount = random(8) + 1
      this.trCount = random(5) + 1
    }
  },
}
</script>

<style lang="less" scoped>
  table {
    border-collapse: collapse;
    margin-bottom: 20px;
    width: 100%;
  }
  th, td {
    display: table-cell;
    line-height: 1.5em;
    padding: .5rem 0;
  }
  .table-bordered {
    border: 1px solid #dee2e6;
    td, th {
      border: 1px solid #dee2e6;
    }
    td,
    th {
      padding: 0;
      vertical-align: top;
      border-top: 1px solid #dee2e6;
    }
  }
</style>
