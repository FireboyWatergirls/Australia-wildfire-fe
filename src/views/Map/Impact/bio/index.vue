<template>
  <div>
    <Bio class="scatter-grid" />
    <koala class="scatter-map" />
  </div>
</template>
<script>
import Bio from './scattergrid'
import Koala from './koalamap'
export default {
  components: {
    Bio,
    Koala
  }
}
</script>
<style lang="scss" scoped>
.scatter-grid {
  position: fixed;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 9vh;
  left: 65vw;
  z-index: 20;
  width: 38vw;
  height: 28vh;
}
.scatter-map {
  position: fixed;
  top: 0vh;
  width: 100vw;
  height: 100vh;
  z-index: 5;
}
</style>
