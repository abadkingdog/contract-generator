<template>
  <div class="paper">
    <div class="paper-content">
      <Switcher
        v-for="(section, index) in sections"
        :type="section"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import Switcher from './Switcher'

export default {
  name: 'page',
  components: {
    Switcher
  },
  props: {
    sections: {
      type: Array,
      default: () => []
    },
  },
}
</script>

<style lang="less" scoped>
@FORMAT_A4_HEIGHT: 297mm;
@FORMAT_A4_WIDTH: 210mm;
@FORMAT_A4_OFFSET_TOP: 20mm;
@FORMAT_A4_OFFSET_BOTTOM: 20mm;
@FORMAT_A4_OFFSET_LEFT: 20mm;
@FORMAT_A4_OFFSET_RIGHT: 20mm;
@FORMAT_A4_MARGIN_BOTTOM: 20mm;
.paper {
  margin: 0 0 @FORMAT_A4_MARGIN_BOTTOM;
  width: @FORMAT_A4_WIDTH;
  border: solid 1px rgba(173, 182, 190, 0.18);
  background-color: #fff;
  line-height: 1.5em;
  font-size: 12pt;
  color: #26313b;
  text-align: left;
  box-sizing: border-box;
  position: relative;
  .paper-content {
    height: @FORMAT_A4_HEIGHT - @FORMAT_A4_OFFSET_TOP - @FORMAT_A4_OFFSET_BOTTOM;
    margin: @FORMAT_A4_OFFSET_TOP @FORMAT_A4_OFFSET_LEFT @FORMAT_A4_OFFSET_BOTTOM @FORMAT_A4_OFFSET_LEFT;
    overflow: hidden;
  }
}
</style>