<template>
  <div>
    <a-button ghost class="layer-button" @click="toggleCollapsed">
      <svg-icon svgClass="iconlayer"></svg-icon>
    </a-button>
    <div class="layer-container" v-if="!collapsed">
      <p><a-icon type="home"/> Basemap</p>
      <!-- <a-radio style="color: white">Satellite Map</a-radio><br>
      <a-radio style="color: white">Street View</a-radio><br>
      <a-radio style="color: white">Dark</a-radio><br>
      <a-radio style="color: white">Light</a-radio><br> -->
      <a-dropdown>
        <a-menu slot="overlay">
          <a-menu-item v-for="(item,index) in mapInfo" :key="index" @click="changeMap(item.style)">{{item.title}}</a-menu-item>
          <!-- <a-menu-item> Street View</a-menu-item>
          <a-menu-item> Dark</a-menu-item>
          <a-menu-item> Light</a-menu-item> -->
        </a-menu>
        <a-button style="margin-left: 16px"> Select <a-icon type="down" /> </a-button>
      </a-dropdown>
      <p style="margin-top: 16px"><a-icon type="setting" theme="filled" /> HotsPots</p>
      <a-dropdown>
        <a-menu slot="overlay">
          <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
          <a-menu-item key="2"> <a-icon type="user" />2nd menu item </a-menu-item>
          <a-menu-item key="3"> <a-icon type="user" />3rd item </a-menu-item>
        </a-menu>
        <a-button style="margin-left: 16px"> Select <a-icon type="down" /> </a-button>
      </a-dropdown>
      <p style="margin-top: 16px"><a-icon type="layout" theme="filled" /> Overlays</p>
      <a-checkbox style="color: white" @change="changeMapPitch">3D Map
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
      collapsed: false,
      mapInfo: [
        {title: 'streets', style: 'mapbox://styles/mapbox/streets-v10'},
        {title: 'outdoors', style: 'mapbox://styles/mapbox/outdoors-v10'},
        {title: 'light', style: 'mapbox://styles/mapbox/light-v9'},
        {title: 'dark', style: 'mapbox://styles/mapbox/dark-v9'},
        {title: 'satellite', style: 'mapbox://styles/mapbox/satellite-v9'},
        {title: 'satellite-streets', style: 'mapbox://styles/mapbox/satellite-streets-v10'},
        {title: 'navigation-preview-day', style: 'mapbox://styles/mapbox/navigation-preview-day-v2'},
        {title: 'navigation-preview-night', style: 'mapbox://styles/mapbox/navigation-preview-night-v2'},
        {title: 'navigation-guidance-day', style: 'mapbox://styles/mapbox/navigation-guidance-day-v2'},
        {title: 'navigation-guidance-night', style: 'mapbox://styles/mapbox/navigation-guidance-night-v2'}
      ]
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
    },
    changeMap (style) {
      let pitch = this.$store.state.pitch
      this.$store.commit('changeMapItem', {style, pitch})
    },
    changeMapPitch (e) {
      let style = this.$store.state.style
      let pitch
      if (e.target.checked) {
        pitch = 45
        this.$store.commit('changeMapItem', {style, pitch})
      } else {
        pitch = 0
        this.$store.commit('changeMapItem', {style, pitch})
      }
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
