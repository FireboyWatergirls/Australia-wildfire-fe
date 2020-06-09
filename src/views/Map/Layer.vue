<template>
  <div>
    <a-button ghost class="layer-button" @click="toggleCollapsed">
      <svg-icon svgClass="iconlayer"></svg-icon>
    </a-button>
    <div class="layer-container" v-if="!collapsed">
      <p>
        <a-icon type="home" />Basemap
      </p>
      <a-select
        show-search
        option-filter-prop="children"
        style="width: 200px"
        :filter-option="filterOption"
        @change="handleChange"
      >
        <a-select-option
          v-for="(item,index) in mapInfo"
          :key="`mapInfo-${index}`"
          :value="item.style"
        >{{item.title}}</a-select-option>
      </a-select>
      <p style="margin-top: 16px">
        <a-icon type="setting" />HotsPots
      </p>
      <a-checkbox
        v-for="(item, index) in hotsPots"
        :key="`hotspots-${index}`"
        style="color: white"
      >{{item.title}}</a-checkbox>
      <p style="margin-top: 16px">
        <a-icon type="layout" />Overlays
      </p>
      <a-checkbox
        v-for="(item, index) in overlays"
        :key="`overlays-${index}`"
        style="color: white;margin-left:0"
      >{{item.title}}</a-checkbox>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'

export default {
  data() {
    return {
      collapsed: false,
      mapInfo: [
        { title: 'streets', style: 'mapbox://styles/mapbox/streets-v10' },
        { title: 'outdoors', style: 'mapbox://styles/mapbox/outdoors-v10' },
        { title: 'light', style: 'mapbox://styles/mapbox/light-v9' },
        { title: 'dark', style: 'mapbox://styles/mapbox/dark-v9' },
        { title: 'satellite', style: 'mapbox://styles/mapbox/satellite-v9' },
        {
          title: 'satellite-streets',
          style: 'mapbox://styles/mapbox/satellite-streets-v10'
        },
        {
          title: 'navigation-preview-day',
          style: 'mapbox://styles/mapbox/navigation-preview-day-v2'
        },
        {
          title: 'navigation-preview-night',
          style: 'mapbox://styles/mapbox/navigation-preview-night-v2'
        },
        {
          title: 'navigation-guidance-day',
          style: 'mapbox://styles/mapbox/navigation-guidance-day-v2'
        },
        {
          title: 'navigation-guidance-night',
          style: 'mapbox://styles/mapbox/navigation-guidance-night-v2'
        }
      ],
      hotsPots: [
        {
          title: 'VIIRS'
        },
        {
          title: 'MODIS'
        }
      ],
      overlays: [
        {
          title: '3D Map'
        },
        {
          title: 'Land Classification Map'
        },
        {
          title: 'Climate Map'
        }
      ]
    }
  },
  components: {
    SvgIcon
  },

  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    },
    changeMap(style) {
      let pitch = this.$store.state.pitch
      this.$store.commit('changeMapItem', { style, pitch })
    },
    handleChange(value) {
      this.$emit('changeBaseMap', value)
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/var.scss';
.layer-button {
  font-size: 16px;
  padding: 0 6px;
}
.layer-container {
  width: 256px;
  height: 56vh;
  position: relative;
  margin-top: 16px;
  background-color: $bg-color1;
  padding: 16px;
  text-align: left;
  color: #fff;
  border: 1px solid rgba(#eee, 0.1);
  border-radius: 6px;
}
</style>
