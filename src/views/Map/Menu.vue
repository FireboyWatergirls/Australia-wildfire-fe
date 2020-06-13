<template>
  <div style="width: 256px;">
    <a-button ghost style="margin-bottom: 16px;" @click="toggleCollapsed">
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <a-menu
      :default-open-keys="['sub1','sub2']"
      mode="inline"
      :theme="theme"
      :inline-collapsed="collapsed"
      class="map-menu"
      :class="this.theme === 'dark' ? 'dark' : ''"
      @click="changeItem"
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
        <span slot="title">
          <a-icon type="pie-chart" />
          <span>Bushfire Impact</span>
        </span>
        <a-menu-item key="3">Total Impact</a-menu-item>
        <a-menu-item key="4">Impact on Biodiversity</a-menu-item>
        <a-menu-item key="5">Impact on the Society</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
      theme: 'dark'
    }
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    },
    changeItem(e) {
      this.$emit('changeItem', e.key)
      if (e.key === '1') {
        this.theme = 'light'
      } else {
        this.theme = 'dark'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/var.scss';
.map-menu {
  border: 1px solid rgba(#eee, 0.1);
}
.dark {
  background-color: $bg-color1;
}
</style>
