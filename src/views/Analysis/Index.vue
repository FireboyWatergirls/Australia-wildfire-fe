<template>
  <div id="analysis">
    <div class="catalog"
      v-if="$route.path"
      v-for="(item,index) in catalog"
      :key="`catalog-${index}`"
      :class="item.name"
      @click="$router.push(`/analysis/${item.name}`)">
      <p class="title">{{item.text}}</p>
      <img :src="item.img"/>
    </div>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      catalog: [{
        name: 'ch1',
        text: '1.澳大利亚山火是如何发生的？',
        img: '/static/img/fire.jpg'
      },
      {
        name: 'ch2',
        text: '2.澳大利亚山火为什么烧这么久？',
        img: '/static/img/fire1.jpg'
      },
      {
        name: 'ch3',
        text: '3.澳大利亚山火的影响？',
        img: '/static/img/fire1.jpg'
      },
      {
        name: 'ch4',
        text: '4.此次澳大利亚山火给我们的教训？',
        img: '/static/img/fire.jpg'
      }]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
#analysis {
  position: fixed;
  top: 50px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 50px);
}
.catalog {
  position: absolute;
  display: flex;
  &:hover {
    p {
      color: white;
      cursor: pointer;
    }
    img {
      filter: brightness(0.5);
    }
  }
  p {
    color: rgba(255,255,255,0.623);
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
.content {
  z-index: 1000;
}
</style>
