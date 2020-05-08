<template>
  <div class="timeline" >
      <vue-slider
      id="slider"
      v-model="value"
      :data="data"
      :absorb="true"
      :tooltip="'active'"
      :use-keyboard="true"
      :marks="true"
      style="widte:80vw"
      v-on:drag-end="filter(value)">
        <template v-slot:dot>
          <img :src="'/static/icon/fire.png'" class="custom-dot" style="width:25px"/>
        </template>
        <!--<template v-slot:mark="{ pos, label }">
          <div class="custom-mark" style="color: #f5f5f5">{{ label }}</div>
        </template>-->
      </vue-slider>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  components: {
    VueSlider
  },
  computed: {
    timeLineState () {
      if (this.$store.state.funName === 'timeLine') {
        console.log('1')
        return true
      } else {
        console.log('0')
        return false
      }
    }
  },
  methods: {
    filter: function (value) {
      console.log(this.$store.state.funName)
      // this.$store.commit('setFilter', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline {
  padding-top: 800px;
  width: 80%;
  margin-left:100px
}
.vue-slider-dot-tooltip-inner {
  color: #f5f5f5;
  background-color: rgba(255, 255, 255, 0.35);
}
.vue-slider-mark-label {
  color: #f5f5f5;
}
</style>
