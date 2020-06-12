<template>
  <div id="analysis">
    <div class="catalog" v-if="$route.path === '/analysis'">
      <div
        class="catalog-item"
        v-for="(item, index) in catalog"
        :key="`catalog-${index}`"
        :class="item.name"
        @click="$router.push(`/analysis/${item.name}`)"
      >
        <p class="title">{{ item.text }}</p>
        <img :src="item.img" />
      </div>
    </div>
    <div class="catalog-header" v-if="$route.path !== '/analysis'">
      <span>{{catalog.filter(item => item.name === $route.name)[0].text}}</span>
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          Read other chapters
          <a-icon type="down" />
        </a>
        <a-menu slot="overlay" @click="changeChapter">
          <a-menu-item v-for="item in catalog" :key="item.name">{{item.text}}</a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
    <router-view v-if="$route.path !== '/analysis'"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catalog: [
        {
          name: 'ch1',
          text: '1. What are the causes of Australian brushfires?',
          img: '/static/img/fire01.png'
        },
        {
          name: 'ch2',
          text: '2.Why is there a violent wildfire this time?',
          img: '/static/img/fire02.png'
        },
        {
          name: 'ch3',
          text: '3.What are the impacts of the Australia bushfire?',
          img: '/static/img/fire03.png'
        },
        {
          name: 'ch4',
          text: '4.Lessons from environmental problems',
          img: '/static/img/fire04.png'
        }
      ]
    }
  },
  methods: {
    changeChapter({ key }) {
      this.$router.push(`/analysis/${key}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/var.scss';
.catalog {
  position: fixed;
  top: 50px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 50px);
}
.catalog-item {
  position: absolute;
  display: flex;
  &:hover {
    p {
      color: white;
      cursor: pointer;
      font-size: 22px;
    }
    img {
      filter: brightness(0.5);
    }
  }
  p {
    color: rgba(255, 255, 255, 0.623);
    z-index: 2;
    width: 100%;
    text-align: center;
    z-index: 100;
    font-size: 20px;
  }
  img {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
  }
}
.ch1 {
  width: 50%;
  height: 37%;
  top: 0;
  left: 0;
  line-height: 37vh;
}
.ch2 {
  width: 50%;
  height: 63%;
  top: 0;
  right: 0;
  line-height: 63vh;
}
.ch3 {
  width: 50%;
  height: 63%;
  bottom: 0;
  left: 0;
  line-height: 63vh;
}
.ch4 {
  width: 50%;
  height: 37%;
  bottom: 0;
  right: 0;
  line-height: 37vh;
}
.catalog-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  line-height: 48px;
  border-bottom: 1px solid rgba($theme-color, 0.5);
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
