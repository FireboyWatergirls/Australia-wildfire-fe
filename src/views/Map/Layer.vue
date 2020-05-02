<template>
  <div>
    <a-button style="font-size: 16px; padding: 0 6px" @click="toggleCollapsed">
      <svg-icon svgClass="iconlayer"></svg-icon>
    </a-button>
    <div class="layer-container" v-if="!collapsed">
      <p>Basemap</p>
      <p>HotsPots</p>
      <p>....</p>
    </div>
  </div>
</template>

<script>
import {Button} from 'ant-design-vue'
import SvgIcon from '@/components/SvgIcon'

export default {
  data () {
    return {
      collapsed: false
    }
  },
  components: {
    SvgIcon,
    AButton: Button
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="scss" scoped>
.layer-container {
  width: 256px;
  height: 50vh;
  position: relative;
  margin-top: 16px;
  background-color: #fff;
  padding: 16px;
  text-align: left;
}
</style>
