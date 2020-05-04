<template>
  <div>
    <a-button ghost class="layer-button" @click="toggleCollapsed">
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
@import '@/styles/var.scss';
.layer-button {
  font-size: 16px;
  padding: 0 6px;
}
.layer-container {
  width: 256px;
  height: 56vh;
  position: relative;
  margin-top: 16px;
  background-color: $bg-color1;
  padding: 16px;
  text-align: left;
  color: #fff;
  border: 1px solid rgba(#eee, .1);
  border-radius: 6px;
}
</style>
