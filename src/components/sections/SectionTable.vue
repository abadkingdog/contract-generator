<template>
  <table
    ref="box"
    class="table-bordered"
    rules="groups"
  >
    <thead v-if="hasHeader">
      <tr>
        <th
          v-for="cell in tdCount"
          :key="cell"
          :style="cellStyles"
        >
          {{ lipsum.generate(5).substring(0, 5) }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in trCount"
        :key="row"
      >
        <td :style="cellStyles">
          {{ row }}
        </td>
        <td align="right" :style="cellStyles">
          {{ randPrice() }}
        </td>
        <td
          v-for="cell in (tdCount - 2)"
          :key="cell"
          :style="cellStyles"
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
import {
  BORDER_WIDTH,
  TD_COUNT,
  TR_COUNT,
  HAS_HEADER,
  ROW_PRICE
} from '@/constants/table'
import { LoremIpsum } from '@/utils/lorem-ipsum'

export default {
  name: 'SectionTable',

  data: () => ({
    tdCount: 2,
    trCount: 1,
    hasHeader: 0,
    lipsum: new LoremIpsum()
  }),

  mounted() {
    this.createCells()
  },

  methods: {
    createCells() {
      this.tdCount = random(TD_COUNT.start, TD_COUNT.end)
      this.trCount = random(TR_COUNT.start, TR_COUNT.end)
      this.hasHeader = random(HAS_HEADER.start, HAS_HEADER.end)
    },
    randPrice() {
      return random(ROW_PRICE.start, ROW_PRICE.end)
    }
  },

  computed: {
    cellStyles() {
      const borderWidth = random(BORDER_WIDTH.start, BORDER_WIDTH.end)

      return {
        borderWidth: `${borderWidth}px`
      }
    }
  }
}
</script>

<style lang="less" scoped>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th, td {
    display: table-cell;
    line-height: 1.5em;
  }
  .table-bordered {
    border: 1px solid gray;
    td, th {
      border: 1px solid gray;
      padding: .2rem .5rem;
      vertical-align: top;
      font-weight: normal;
    }
    th {
      font-weight: bold;
      border-bottom: 2px solid black;
    }
  }
</style>
