<template>
  <div style="width: 256px;">
    <a-button ghost
      style="margin-bottom: 16px;"
      @click="toggleCollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-menu
      :default-selected-keys="['2']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      class="map-menu"
    >
      <a-menu-item key="1">
        <a-icon type="video-camera" />
        <span>Key Events</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="clock-circle" />
        <span>Space-time Visualization</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="pie-chart" /><span> Bushfire Impact </span></span>
        <a-menu-item key="3">
          Total Impact
        </a-menu-item>
        <a-menu-item key="4">
          Impact on Protected Species
        </a-menu-item>
        <a-menu-item key="5">
          Impact on the Economy
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import { Menu, Button, Icon } from 'ant-design-vue'

export default {
  data () {
    return {
      collapsed: false
    }
  },
  components: {
    AMenu: Menu,
    AMenuItem: Menu.Item,
    ASubMenu: Menu.SubMenu,
    AButton: Button,
    AIcon: Icon
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
.map-menu {
  background-color: $bg-color1;
  border: 1px solid rgba(#eee, .1);
}
</style>
