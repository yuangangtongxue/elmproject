<template>
<div>
  <div class="container" v-for="nav in message" :key="nav.id">
    <section class="guide_item">
      <router-link to="/home" class="routerLink">
        <div class="img_contain">
          <img src="@/assets/home.png" alt>
        </div>
        <span class="guide_word">外卖</span>
      </router-link>
    </section>
    <section class="guide_item">
      <router-link to="/search" class="routerLink">
        <div class="img_contain">
          <img src="@/assets/search.png" alt>
        </div>
        <span class="guide_word">搜索</span>
      </router-link>
    </section>
    <section class="guide_item">
      <router-link to="/order" class="routerLink">
        <div class="img_contain">
          <img src="@/assets/order.png" alt>
        </div>
        <span class="guide_word">订单</span>
      </router-link>
    </section>
    <section class="guide_item">
      <router-link to="/mine" class="routerLink">
        <div class="img_contain">
          <img src="@/assets/mine.png" alt>
        </div>
        <span class="guide_word">我的</span>
      </router-link>
    </section>
  </div>
</div>
  
</template>

<script>
export default {
  name: "navigate",
  data() {
    return {
      message:[
        {id:1,name:"home",word:"外卖"},
        {id:2,name:"search",word:"搜索"},
        {id:3,name:"order",word:"订单"},
        {id:4,name:"mine",word:"我的"}
      ],
      // clickit:true,
    };
  },
  methods: {
    // home() {
    //   if(clickit == true){
    //     clickit = !clickit;    
    //   }
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  // border: 1px solid red;
  border-top:1px solid rgb(146, 138, 138);
  height: 0.5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  background:#fff;
  .guide_item {
    // border: 1px solid red;
    height: 0.5rem;
    width: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .routerLink {
      // border: 1px solid red;
      height: 0.5rem;
      width: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      .img_contain {
        // border: 1px solid red;
        height: 0.3rem;
        height: 0.3rem;
        img {
          // border: 1px solid red;
          height: 0.3rem;
          height: 0.3rem;
        }
      }
      .guide_word {
        height: 0.15rem;
        width: 0.3rem;
        // margin: 0 auto;
        // border: 1px solid red;
      }
    }
  }
}
</style>
