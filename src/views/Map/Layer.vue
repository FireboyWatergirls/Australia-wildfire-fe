<template>
  <div>
    <a-button ghost class="layer-button" @click="toggleCollapsed">
      <svg-icon svgClass="iconlayer"></svg-icon>
    </a-button>
    <div class="layer-container" v-if="!collapsed">
      <p><a-icon type="home"/> Basemap</p>
      <a-radio style="color: white">Satellite Map</a-radio><br>
      <a-radio style="color: white">Street View</a-radio><br>
      <a-radio style="color: white">Dark</a-radio><br>
      <a-radio style="color: white">Light</a-radio><br>
      <p style="margin-top: 16px"><a-icon type="setting" theme="filled" /> HotsPots</p>
      <a-dropdown>
      <a-menu slot="overlay">
        <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item><br>
        <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item><br>
        <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
      </a-menu>
      <a-button style="margin-left: 16px"> Select <a-icon type="down" /> </a-button>
    </a-dropdown><br>
      <p style="margin-top: 16px"><a-icon type="layout" theme="filled" /> Overlays</p>
      <a-checkbox style="color: white">3D Map
      </a-checkbox><br>
      <a-checkbox style="color: white">Land Classification Map
      </a-checkbox><br>
      <a-checkbox style="color: white">Climate Map
      </a-checkbox>
    </div>
  </div>
</template>

<script>
import {Button, Checkbox, Dropdown, Icon, Radio} from 'ant-design-vue'
import SvgIcon from '@/components/SvgIcon'

export default {
  data () {
    return {
      collapsed: false
    }
  },
  components: {
    SvgIcon,
    AButton: Button,
    ACheckbox: Checkbox,
    ADropdown: Dropdown,
    AIcon: Icon,
    ARadio: Radio
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
