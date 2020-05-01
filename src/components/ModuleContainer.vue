<template>
  <div id="module-container">
    <div class="modulebox-show" v-bind:class="moduleName" v-if="isShow">
      <div class="module-title">
        <span>{{moduleName}}</span>
        <span class="close-button" v-on:click="this.changeShowTag">close</span>
      </div>
      <slot></slot>
    </div>
    <div class="modulebox-hidden"
      v-bind:class="moduleName"
      v-if="!isShow"
      v-on:click="this.changeShowTag">
      <span>{{moduleName}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  props: {
    moduleName: {
      type: String
    }
  },
  methods: {
    changeShowTag: function () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/var.scss';
.modulebox-show {
  display: flex;
  flex-direction: column;
  padding: 10px;
  z-index: 999;
  background-color: $background-color1;
  border: 1px solid #7a7e84;
  .module-title {
    text-shadow: 1px 1px 2px rgba(0,0,0,.8);
    background: rgba(100,191,255,.3);
    text-align: left;
    color: #fff;
    margin: 0 10px 4px 0;
    position: relative;
    padding: 5px 0 5px 10px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    border-left: 5px solid #64bfff;
    vertical-align: middle;
    &:before {
      position: absolute;
      right: -10px;
      bottom: 0;
      content: "";
      border-bottom: 5px solid rgba(100,191,255,.3);
      border-right: 5px solid rgba(100,191,255,.3);
      border-color: rgba(100,191,255,.3) transparent transparent rgba(100,191,255,.3);
      border-style: solid;
      border-width: 5px;
      width: 0;
      height: 0;
      pointer-events: none;
    }
    &:after {
      position: absolute;
      right: -10px;
      bottom: 10px;
      top: 0;
      content: "";
      background: rgba(100,191,255,.3);
      width: 10px;
      pointer-events: none;
    }
    .close-button {
      float: right;
      font-size: 12px;
      font-weight: 400;
      cursor: pointer;
    }
  }
}
.modulebox-hidden {
  pointer-events: all;
  position: absolute;
  border: 1px solid rgb(116, 116, 116);
  background: $background-color1;
  padding: 5px;
  width: 56px;
  cursor: pointer;
  font-size: 14px;
  box-sizing: border-box;
  line-height: 18px;
  &:hover {
    border: 1px solid #7a7e84;
    background: rgba(29, 42, 59, 0.1);
  }
}
.layer {
  position: absolute;
  top: 72px;
  left: 10px;
}
</style>
