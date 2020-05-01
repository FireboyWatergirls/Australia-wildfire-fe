<template>
  <icon-font v-bind:type="svgClass"></icon-font>
</template>

<script>
import { Icon } from 'ant-design-vue'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1764088_q689evc3nwa.js'
})
export default {
  name: 'svg-icon',
  components: {
    IconFont
  },
  props: {
    svgClass: {
      type: String,
      required: true
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>

</style>
