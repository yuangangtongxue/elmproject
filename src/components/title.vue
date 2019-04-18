<template>
  <div>
    <div class="titlebox">
      <div class="backItm" @click="backlastpage()">
        <img src="@/assets/back.png">
      </div>
      <div class="titleWord">{{this.$store.state.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    backlastpage(){
      this.$router.go(-1);
      this.$store.state.name="美食"
    }
  }
};
</script>

<style scoped lang="scss">
.titlebox {
  // border:1px solid red;
  height: 0.4rem;
  width: 3.2rem;
  position: fixed;
  top: 0;
  left:0;
  background: rgb(65, 102, 202);
  display: flex;
  justify-content: center;
  z-index: 999;
  .backItm {
    height: 0.4rem;
    width: 0.4rem;
    // border:1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 0.3rem;
      width: 0.3rem;
    }
  }
  .titleWord {
    // border:1px solid red;
    height: 0.4rem;
    width: 2.4rem;
    // padding:0 auto;
    padding-left: 1rem;
    margin-right: 0.4rem;
    font-size: 0.16rem;
    color: #fff;
    line-height: 0.4rem;
  }
}
</style>