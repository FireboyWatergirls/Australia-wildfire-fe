<template>
  <div id="navigation" :class="{ map: $route.path === '/map' }">
    <div class="navbar-header">
      Australia Bushfire
      <svg-icon svgClass="iconhuo1" />
    </div>
    <div class="navbar-content">
      <div
        class="item"
        v-for="(item, index) in NavList"
        v-bind:key="`NavList-${index}`"
        v-on:click="$router.push(item.path)"
      >
        <span class="text">{{ item.text }}</span>
      </div>
    </div>
    <div class="navbar-foot">
      <svg-icon svgClass="icongit" />
    </div>
  </div>
</template>

<script>
import NavList from '@/router/navList'
import SvgIcon from './SvgIcon'

export default {
  name: 'navigation',
  data () {
    return {
      NavList
    }
  },
  components: {
    SvgIcon
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/var.scss";
#navigation {
  height: 50px;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  background-color: $bg-color1;
  z-index: 100;
  display: flex;
  color: #fff;
  box-shadow: 0 0 4px 0 rgba(128, 148, 175, 0.7);
}
.map {
  background-color: rgba($bg-color1, $header-opacity) !important;
}
.navbar-header {
  margin: auto 16px;
}
.navbar-content {
  display: flex;
  position: absolute;
  right: 48px;
  .item {
    padding: 16px;
    cursor: pointer;
    &:hover {
      background-color: rgba(#ffffffab, 0.1);
    }
  }
}
.navbar-foot {
  padding: 16px;
  position: absolute;
  right: 0;
  cursor: pointer;
  &:hover {
    background-color: rgba(158, 187, 224, 0.3);
  }
}
</style>
