<template>
  <div>
    <titlecomponent></titlecomponent>
    <div class="storeitem" v-for="item in detailmsg" :key="item.id">
      <div class="leftitem" @click="foodmes()">
        <img src="@/assets/shangjia.png">
        <div class="leftdetail">
          <div class="topitem">
            <div class="pinpai">品牌</div>
            <div class="storename">{{item.name}}</div>
          </div>
          <div class="middleitem">
            <div class="starcontainer"></div>
            <div class="mark-solenumb">
              <span class="mark">{{item.mark}}</span>
              <span class="solenumb">月售{{item.solenumb}}单</span>
            </div>
          </div>
          <div class="buttomitem">
            <div class="startprice">￥{{item.startprice}}起送/配送费约￥{{item.transprice}}</div>
          </div>
        </div>
      </div>
      <div class="rightitem">
        <div class="topmessage">保准票</div>
        <div class="middlemessage">
          <div class="zhuansong">蜂鸟专送</div>
          <div class="zhunshi">准时达</div>
        </div>
        <div class="buttommessage">{{item.distance}}公里/{{item.hour}}小时{{item.minute}}分钟</div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import foot from "../components/foot";
import titlecomponent from "../components/title";
export default {
  data() {
    return {
        msg:"",
      detailmsg: [
        {
          id: 1,
          name: "我的牛肉面",
          mark: "4.3",
          solenumb: "120",
          startprice: "15",
          transprice: "5",
          distance: "20",
          hour: "5",
          minute: "25"
        },
        {
          id: 2,
          name: "我的牛肉面",
          mark: "4.3",
          solenumb: "120",
          startprice: "15",
          transprice: "5",
          distance: "20",
          hour: "5",
          minute: "25"
        },
        {
          id: 3,
          name: "我的牛肉面",
          mark: "4.3",
          solenumb: "120",
          startprice: "15",
          transprice: "5",
          distance: "20",
          hour: "5",
          minute: "25"
        },
        {
          id: 4,
          name: "我的牛肉面",
          mark: "4.3",
          solenumb: "120",
          startprice: "15",
          transprice: "5",
          distance: "20",
          hour: "5",
          minute: "25"
        },
        {
          id: 5,
          name: "我的牛肉面",
          mark: "4.3",
          solenumb: "120",
          startprice: "15",
          transprice: "5",
          distance: "20",
          hour: "5",
          minute: "25"
        },
        {
          id: 6,
          name: "我的牛肉面",
          mark: "4.3",
          solenumb: "120",
          startprice: "15",
          transprice: "5",
          distance: "20",
          hour: "5",
          minute: "25"
        },
        {
          id: 7,
          name: "我的牛肉面",
          mark: "4.3",
          solenumb: "120",
          startprice: "15",
          transprice: "5",
          distance: "20",
          hour: "5",
          minute: "25"
        },
        {
          id: 8,
          name: "我的牛肉面",
          mark: "4.3",
          solenumb: "120",
          startprice: "15",
          transprice: "5",
          distance: "20",
          hour: "5",
          minute: "25"
        }
      ]
    };
  },
  components:{
    titlecomponent,
    foot
  },
  methods:{
    foodmes(){
      this.$router.push({
        path: "/storeitem",
        // name: '要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找',
        params: {
          key: "key",
          wordmsg: this.word
        }
      });
    }
      // getparam(){ 
      //   // 取到路由带过来的参数   
      //   let routerParams = this.$route.params.wordmsg;
      //   // 将数据放在当前组件的数据内
      //   this.msg = routerParams;
      //   console.log(routerParams, this.msg); // 输出 test message
      // }
  },
  mounted(){
      // this.getparam();
  },
  watch:{
    // '$route':'getParam'
  }
};
</script>

<style scoped lang="scss">
.storeitem {
  // border: 1px solid red;
  border-bottom: 1px solid rgb(224, 220, 220);
  height: 0.9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top:0.3rem;
  .leftitem {
    // border: 1px solid red;
    height: 0.8rem;
    width: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      // border: 1px solid red;
      height: 0.7rem;
      width: 0.7rem;
    }
    .leftdetail {
      // border: 1px solid red;
      height: 0.8rem;
      width: 1.1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .topitem {
        // border: 1px solid red;
        height: 0.2rem;
        width: 1.1rem;
        line-height: 0.2rem;
        display: flex;
        align-items: center;
        .pinpai {
          // border: 1px solid red;
          height: 0.18rem;
          width: 0.28rem;
          background: yellow;
          border-radius: 0.05rem;
          line-height: 0.18rem;
        }
        .storename {
          // border: 1px solid red;
          width: 0.82rem;
          height: 0.18rem;
          line-height: 0.18rem;
          overflow: hidden;
        }
      }
      .middleitem {
        // border: 1px solid red;
        height: 0.2rem;
        width: 1.1rem;
        line-height: 0.2rem;
        display: flex;
        align-items: center;
        .starcontainer {
          // border: 1px solid red;
          height: 0.2rem;
          width: 0.5rem;
        }
        .mark-solenumb {
          // border: 1px solid red;
          height: 0.2rem;
          width: 0.6rem;
          .mark {
            // border: 1px solid red;
            height: 0.2rem;
            width: 0.2rem;
            font-size: 0.04rem;
          }
          .solenumb {
            // border: 1px solid red;
            height: 0.2rem;
            width: 0.4rem;
            font-size: 0.04rem;
          }
        }
      }
      .buttomitem {
        // border: 1px solid red;
        height: 0.2rem;
        width: 1.1rem;
        line-height: 0.2rem;
        .startprice {
          // border: 1px solid red;
          height: 0.2rem;
          width: 1.1rem;
          font-size: 0.1rem;
        }
      }
    }
  }
  .rightitem {
    // border: 1px solid red;
    height: 0.8rem;
    width: 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .topmessage {
      // border: 1px solid red;
      height: 0.2rem;
      width: 1.1rem;
      text-align: right;
      line-height: 0.2rem;
      font-size: 0.1rem;
    }
    .middlemessage {
      // border: 1px solid red;
      height: 0.2rem;
      width: 1.1rem;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      .zhuansong {
        border: 1px solid rgb(44, 47, 206);
        border-radius: 0.03rem;
        background: rgb(44, 47, 206);
        height: 0.1rem;
        width: 0.4rem;
        font-size: 0.06rem;
      }
      .zhunshi {
        border: 1px solid rgb(44, 47, 206);
        border-radius: 0.03rem;
        height: 0.1rem;
        width: 0.3rem;
        font-size: 0.06rem;
      }
    }
    .buttommessage {
      // border: 1px solid red;
      height: 0.2rem;
      width: 1.1rem;
      font-size: 0.1rem;
      text-align: right;
      line-height: 0.2rem;
    }
  }
}
</style>