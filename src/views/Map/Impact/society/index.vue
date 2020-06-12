<template>
  <div>
    <businesses class="pie-map" />
    <div class="charts">
      <module-container moduleName="cpi">
        <cpi />
      </module-container>
      <module-container moduleName="consume">
        <consume />
      </module-container>
      <module-container moduleName="aircraft">
        <aircraft />
      </module-container>
    </div>
  </div>
</template>

<script>
import Cpi from './cpiline'
import Consume from './consumeline'
import Aircraft from './aircraftline'
import Businesses from './buspie'
import ModuleContainer from '@/components/ModuleContainer'

export default {
  components: {
    Cpi,
    Consume,
    Aircraft,
    Businesses,
    ModuleContainer
  }
}
</script>

<style lang="scss" scoped>
.pie-map {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
}
.charts {
  position: fixed;
  top: 72px;
  right: 10px;
  z-index: 5;
}
</style>
