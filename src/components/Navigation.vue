<template>
  <div id="navigation" :class="{ map: $route.path === '/map' }">
    <div class="navbar-header">
      Australia Bushfire
      <svg-icon svgClass="iconhuo1" />
    </div>
    <div class="navbar-content">
      <div
        class="item"
        v-for="(item, index) in navList"
        v-bind:key="`navList-${index}`"
        v-on:click="$router.push({path: item.path},onComplete => {},onAbort => {})"
      >
        <span class="text">{{ item.text }}</span>
      </div>
    </div>
    <a class="navbar-foot" href="https://github.com/FireboyWatergirls/Australia-wildfire-fe">
      <svg-icon svgClass="icongit" />
    </a>
  </div>
</template>

<script>
import navList from '@/router/navList'
import SvgIcon from './SvgIcon'

export default {
  name: 'navigation',
  data() {
    return {
      navList
    }
  },
  components: {
    SvgIcon
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/var.scss';
#navigation {
  height: 50px;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  background-color: $bg-color1;
  z-index: 100;
  display: flex;
  color: #fff;
  box-shadow: 0 0 4px 0 rgba($theme-color, 0.8);
}
.map {
  background-color: rgba($bg-color1, $header-opacity) !important;
  position: fixed !important;
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
  color: #fff;
  padding: 16px;
  position: absolute;
  right: 0;
  cursor: pointer;
  &:hover {
    background-color: rgba(#ffffffab, 0.1);
  }
}
</style>
