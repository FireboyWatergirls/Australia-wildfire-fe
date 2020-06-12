<template>
  <div>
    <cpi class="line1" />
    <consume class="line2" />
    <aircraft class="line3" />
    <businesses class="pie-map" />
  </div>
</template>
<script>
import Cpi from './cpiline'
import Consume from './consumeline'
import Aircraft from './aircraftline'
import Businesses from './buspie'
export default {
  components: {
    Cpi,
    Consume,
    Aircraft,
    Businesses
  }
}
</script>

<style lang="scss" scoped>
.pie-map {
  position: fixed;
  top: 0vh;
  width: 100vw;
  height: 100vh;
  z-index: 5;
}
.line1 {
  position: fixed;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 10vh;
  left: 61vw;
  z-index: 20;
  width: 38vw;
  height: 28vh;
}
.line2 {
  position: fixed;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 12vh;
  left: 61vw;
  z-index: 20;
  width: 38vw;
  height: 28vh;
}
.line3 {
  position: fixed;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 14vh;
  left: 1vw;
  z-index: 20;
  width: 98vw;
  height: 27vh;
}
</style>
