<template>
  <div id="navigation" :class="{'map': $route.path === '/map'}">
    <div class="navbar-header">Australia Wildfire
      <svg-icon svgClass="iconhuo1"/>
    </div>
    <div class="navbar-content">
      <div class="item"
        v-for="(item, index) in NavList"
        v-bind:key="`NavList-${index}`"
        v-on:click="$router.push(item.path)">
        <span class="text">{{ item.text }}</span>
      </div>
    </div>
    <div class='navbar-foot' >
      <svg-icon svgClass="icongit"/>
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
@import '@/styles/var.scss';
#navigation {
  height: 50px;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  background-color: $background-color2;
  z-index: 100;
  display: flex;
  color: white;
}
.map {
  background-color: $background-color1!important;
}
.navbar-header {
  margin: auto 16px;
}
.navbar-content {
  display: flex;
  padding: 0 16px;
  .item {
    padding: 16px;
    cursor: pointer;
    &:hover {
      background-color: rgba(158, 187, 224, 0.3);
    }
  }
}
.navbar-foot {
  padding: 16px;
  position: absolute;
  right: 0;
  cursor: pointer;
}
</style>
