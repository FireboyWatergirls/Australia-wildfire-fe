<template>
  <div>
    <map-menu class="menu" @changeItem="changeMenu"></map-menu>
    <!-- <div id="map" v-show="menuKey !== '1'"></div> -->
    <key-events class="events-constainer" v-if="menuKey === '1'" />
    <s-t-visualization v-if="menuKey === '2'"></s-t-visualization>
    <div id="total-impact" v-if="menuKey === '3'" @mousewheel.prevent>
      <impact-total></impact-total>
    </div>
    <div id="natural-impact" v-if="menuKey === '4'">
      <impact-bio></impact-bio>
    </div>
    <div id="society-impact" v-if="menuKey === '5'">
      <impact-society></impact-society>
    </div>
  </div>
</template>

<script>
import Menu from './Menu'
import STVisualization from './STVisualization'
import KeyEvents from './KeyEvents'
import ImpactTotal from './Impact/total'
import ImpactSociety from './Impact/society'
import ImpactBio from './Impact/bio'

export default {
  data() {
    return {
      menuKey: '2'
    }
  },
  components: {
    MapMenu: Menu,
    STVisualization,
    KeyEvents,
    ImpactTotal,
    ImpactSociety,
    ImpactBio
  },
  methods: {
    changeMenu: function(key) {
      this.menuKey = key
    }
  }
}
</script>
<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 72px;
  left: 10px;
  z-index: 100;
}
</style>
