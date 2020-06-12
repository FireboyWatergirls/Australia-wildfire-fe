<template>
  <div>
    <region-circle class="pie" />
    <fire class="themeriver" />
    <regionmap class="health-map" />
    <deathpie class="deathpie" />
  </div>
</template>
<script>
import RegionCircle from './regioncircle'
import Fire from './firethemeriver'
import regionmap from './healthmap'
import deathpie from './deathpie'
export default {
  components: {
    RegionCircle,
    Fire,
    regionmap,
    deathpie
  }
}
</script>

<style lang="scss" scoped>
.deathpie {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 66vh;
  right: 1vw;
  z-index: 50;
}
.pie {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 10vh;
  left: 69vw;
  z-index: 10;
}
.themeriver {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 66vh;
  left: 1vw;
  z-index: 20;
}
.pie-map {
  position: fixed;
  top: 0vh;
  width: 100vw;
  height: 100vh;
  z-index: 5;
}
.health-map {
  position: fixed;
  top: 0vh;
  width: 100vw;
  height: 100vh;
  z-index: 5;
}
</style>
