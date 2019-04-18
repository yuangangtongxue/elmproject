<template>
  <div>
    <div class="titlemsg">
      <div class="goods">商品</div>
      <div class="pingjia">评价</div>
    </div>
    <div class="maincontent">
      <div class="leftnavtitle">
        <div
          class="leftnavitem"
          v-for="(item,index) in messages"
          :key="item.id"
          @click="toitemposition(index)"
        >
          <div class="itembox">{{item.words}}</div>
        </div>
      </div>
      <div class="rightpart">
        <div class="rightnavitem" v-for="nav in messages" :key="nav.id">
          <div class="navtitlemsg">{{nav.words}}</div>
          <div class="itemcontent" v-for="(bbb,index) in nav.itemmsg" :key="bbb.id">
            <div class="leftpart">
              <img src="@/assets/logo.png" class="foodimg">
            </div>
            <div class="rightpart">
              <span class="foodname">{{bbb.food}}</span>
              <span class="foodsale">月售{{bbb.solenumber}}</span>
              <div class="fooddazhe">
                <div class="dazhenumb">{{bbb.dazhenumb}}折</div>
                <div class="dazheword">{{bbb.messageword}}</div>
              </div>
              <div class="foodprice">
                <div class="rightprice">
                  <span class="nowprice">￥{{bbb.nowprice}}</span>
                  <span class="beforeprice">￥{{bbb.beforeprice}}</span>
                </div>
                <div class="mountpart">
                  <img
                    src="@/assets/jian.png"
                    class="decriseimg"
                    v-if="bbb.isshowdec"
                    @click="showdecmount(nav.id,index)"
                  >
                  <span class="ordernumb" v-if="bbb.isshownumb">{{bbb.clickcount}}</span>
                  <img
                    src="@/assets/jia.png"
                    class="incriseimg"
                    @click="showaddmount(nav.id,index)"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="circle_cart">
      <div class="img_contain" @click="showzhezhao=!showzhezhao">
        <img src="@/assets/shoppingcart.png">
      </div>
      <div class="cart_mount">{{cart_mount}}</div>
    </div>
    <div id="totalmoney_cart">
      <div class="cart_left">
        <span class="total">￥{{total_money}}</span>
        <span class="peisong">配送费￥5</span>
      </div>
      <div class="cart_right" @click="togivemoney('确认订单')">去结算</div>
    </div>
    <transition name="fade">
      <div class="zhezhao" v-if="showzhezhao"></div>
    </transition>
    <transition name="cart">
      <div class="cart_contain" v-if="showzhezhao">
      <div class="cart_contain_title">
        <div class="cart_contain_left">
          <div class="cart_contain_yixuan">已选商品</div>
          <div class="cart_contain_totle">(共0kg)</div>
        </div>
        <div class="cart_contain_right">清空</div>
      </div>
      <div class="cart_contain_main" v-for="(item,index) in cart_contain_msg" :key="index">
        <div class="main_left">{{item.food}}</div>
        <div class="main_right">
          <div class="main_charge">{{item.nowprice}}</div>
          <div class="main_mount">
            <img src="@/assets/jian.png" class="decriseimg">
            <span class="ordernumb">{{item.clickcount}}</span>
            <img src="@/assets/jia.png" class="incriseimg">
          </div>
        </div>
      </div>
    </div>
    </transition>
    
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      cart_contain_msg:[],
      // showcart_contain_main:false,
      currentid: 0,
      showzhezhao:false,
      // isshowdec: false,
      // isshownumb: false,
      total_money: 0,
      cart_mount: 0,
      messages: [
        {
          id: 0,
          words: "热销榜1",
          backgroundstyle: "rgb(215, 223, 215)",
          itemmsg: [
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤面包",
              id: "a"
            },
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤菠萝",
              id: "b"
            },
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤玉米",
              id: "c"
            }
          ]
        },
        {
          id: 1,
          words: "热销榜2",
          backgroundstyle: "rgb(215, 223, 215)",
          itemmsg: [
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤面包",
              id: "a"
            },
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤菠萝",
              id: "b"
            },
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤玉米",
              id: "c"
            }
          ]
        },
        {
          id: 2,
          words: "热销榜3",
          backgroundstyle: "rgb(215, 223, 215)",
          itemmsg: [
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤面包",
              id: "a"
            },
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤菠萝",
              id: "b"
            },
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤玉米",
              id: "c"
            }
          ]
        },
        {
          id: 3,
          words: "热销榜4",
          backgroundstyle: "rgb(215, 223, 215)",
          itemmsg: [
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤面包",
              id: "a"
            },
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤菠萝",
              id: "b"
            },
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤玉米",
              id: "c"
            }
          ]
        },
        {
          id: 4,
          words: "热销榜5",
          backgroundstyle: "rgb(215, 223, 215)",
          itemmsg: [
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤面包",
              id: "a"
            },
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤菠萝",
              id: "b"
            },
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤玉米",
              id: "c"
            }
          ]
        },
        {
          id: 5,
          words: "热销榜6",
          backgroundstyle: "rgb(215, 223, 215)",
          itemmsg: [
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤面包",
              id: "a"
            },
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤菠萝",
              id: "b"
            },
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤玉米",
              id: "c"
            }
          ]
        },
        {
          id: 6,
          words: "热销榜7",
          backgroundstyle: "rgb(215, 223, 215)",
          itemmsg: [
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤面包",
              id: "a"
            },
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤菠萝",
              id: "b"
            },
            {
              clickcount: 0,
              isshownumb: false,
              isshowdec: false,
              nowprice: 21.5,
              dazhenumb: "7.5",
              beforeprice: "25",
              messageword: "每单限购一份",
              solenumber: "1500",
              food: "烤玉米",
              id: "c"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.floorSrcollAddEventListener();
  },
  methods: {
    togivemoney(name) {
      this.$store.dispatch("changetitle", name);
      this.$router.push({
        path: "/givemoney",
        // name: '要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找',
        params: {
          key: "key",
          wordmsg: this.word
        }
      });
    },
    toitemposition(index) {
      // this.currentid = index;
      var _this = this;
      let floor_item = document.getElementsByClassName("rightnavitem"),
        floor_offsetTop = floor_item[index].offsetTop - floor_item[0].offsetTop,
        window_scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop,
        timer = {
          step: 50,
          times: 20,
          FLOOR_OFFSETTOP: floor_offsetTop
        };
      // console.log({ index, offsetTop: timer.FLOOR_OFFSETTOP });
      if (window_scrollTop > floor_offsetTop) {
        _this.setFloorScrollArrowDown(timer);
      } else if (window_scrollTop == floor_offsetTop) {
        return false;
      } else {
        _this.setFloorScrollArrowUp(timer);
      }
    },
    /**
     * 设置楼层向上滚动
     * @params Object timer 定时器配置
     */
    setFloorScrollArrowUp(timer) {
      // var _this = this;
      clearInterval(TIMER);
      var TIMER = setInterval(() => {
        let window_scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        //滚动高度小于所点击的楼层高度
        if (window_scrollTop <= timer.FLOOR_OFFSETTOP) {
          document.documentElement.scrollTop = timer.FLOOR_OFFSETTOP + 1;
          document.body.scrollTop = timer.FLOOR_OFFSETTOP + 1;
          clearInterval(TIMER);
        } else {
          document.documentElement.scrollTop = window_scrollTop - timer.step;
          document.body.scrollTop = window_scrollTop - timer.step;
        }
      }, timer.times);
    },
    /**
     * 设置楼层向下滚动
     * @params Object timer 定时器配置
     */
    setFloorScrollArrowDown(timer) {
      // var _this = this;
      clearInterval(TIMER);
      var TIMER = setInterval(() => {
        let window_scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (window_scrollTop >= timer.FLOOR_OFFSETTOP) {
          document.documentElement.scrollTop = timer.FLOOR_OFFSETTOP + 1;
          document.body.scrollTop = timer.FLOOR_OFFSETTOP + 1;
          clearInterval(TIMER);
        } else {
          document.documentElement.scrollTop = window_scrollTop + timer.step;
          document.body.scrollTop = window_scrollTop - timer.step;
        }
      }, timer.times);
    },
    showaddmount(navid, index) {
      this.messages[navid].itemmsg[index].clickcount++;
      if (this.messages[navid].itemmsg[index].clickcount >= 1) {
        this.messages[navid].itemmsg[index].isshownumb = true;
        this.messages[navid].itemmsg[index].isshowdec = true;
      }
      //加入购物车
      document.getElementById("circle_cart").style.display = "block";
      document.getElementById("totalmoney_cart").style.display = "block";
      this.total_money += this.messages[navid].itemmsg[index].nowprice;
      this.cart_mount += 1;
      //加入购物车动画
      var cart = $("#circle_cart");
      var imgtodrag = $(".incriseimg");
      if (imgtodrag) {
        var imgclone = imgtodrag
          .clone()
          .offset({
            top: imgtodrag.offset().top,
            left: imgtodrag.offset().left
          })
          .css({
            opacity: "0.5",
            position: "absolute",
            height: "0.2rem",
            width: "0.2rem",
            "z-index": "100"
          })
          .appendTo($("body"))
          .animate(
            {
              top: cart.offset().top + 10,
              left: cart.offset().left + 10,
              width: 75,
              height: 75
            },
            500
          );
        imgclone.animate(
          {
            width: 0,
            height: 0
          },
          function() {
            $(this).detach();
          }
        );
      }
      //将相关数据存入cart_contain_msg
      if(this.messages[navid].itemmsg[index].clickcount>=1){
        this.cart_contain_msg.push(this.messages[navid].itemmsg[index])
      console.log(this.cart_contain_msg)
      }
      
    },
    showdecmount(navid, index) {
      this.messages[navid].itemmsg[index].clickcount--;
      this.total_money -= this.messages[navid].itemmsg[index].nowprice;
      this.cart_mount -= 1;
      if (this.total_money <= 0) {
        document.getElementById("circle_cart").style.display = "none";
        document.getElementById("totalmoney_cart").style.display = "none";
      }
      if (this.messages[navid].itemmsg[index].clickcount < 1) {
        this.messages[navid].itemmsg[index].isshownumb = false;
        this.messages[navid].itemmsg[index].isshowdec = false;
        // this.getElementByid("decriseimg").style.display="none";
        // document.getElementsByClassName("decriseimg").style.visibility="hidden"
        //   this.getElementByXid("decriseimg").style.display="block";
      }
      //将相关数据移除cart_contain_msg
      this.cart_contain_msg.splice(this.messages[navid].itemmsg[index])
    },
    /**
     * 监听窗口滚动楼层导航动态定位
     */
    floorSrcollAddEventListener() {
      var _this = this;
      let nav_item = document.getElementsByClassName("leftnavitem"),
        floor_item = document.getElementsByClassName("rightnavitem");
      nav_item[0].className = "leftnavitem active";
      window.onscroll = function() {
        let window_scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight;
        // console.log(window_scrollTop)
        // console.log(scrollHeight)
        // console.log(clientHeight)
        for (let i = 0, len = floor_item.length; i < len; i++) {
          let floor_offsetTop =
            floor_item[i].offsetTop - floor_item[0].offsetTop;
          if (i < len - 1) {
            var floor_offsetTop1 =
              floor_item[i + 1].offsetTop - floor_item[0].offsetTop;
            if (
              window_scrollTop >= floor_offsetTop &&
              window_scrollTop < floor_offsetTop1 &&
              window_scrollTop < scrollHeight - clientHeight - 4
            ) {
              nav_item[i].style.backgroundColor = "#fff";
            } else {
              nav_item[i].style.backgroundColor = "rgb(215, 223, 215)";
            }
          } else {
            //最后一个没有到顶上，单独判断
            if (window_scrollTop >= scrollHeight - clientHeight - 4) {
              nav_item[i].style.backgroundColor = "#fff";
            } else {
              nav_item[i].style.backgroundColor = "rgb(215, 223, 215)";
            }
          }
        }
      };
    }
  }
};
</script>

<style scoped lang="scss">
.titlemsg {
  // border: 1px solid red;
  height: 0.4rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .goods,
  .pingjia {
    // border: 1px solid red;
    height: 0.4rem;
    width: 0.6rem;
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.13rem;
  }
}
.maincontent {
  // border: 1px solid red;
  width: 3.2rem;
  display: flex;
  //   flex-direction: ;
  .leftnavtitle {
    width: 0.8rem;
    // height:5rem;
    // border: 1px solid red;
    position: fixed;
    top: 0.4rem;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(215, 223, 215);
    // position: fixed;
    // top:0.4rem;
    // left:0;
    // z-index: 999;
    .leftnavitem {
      // border: 1px solid red;
      height: 0.5rem;
      width: 0.8rem;
      line-height: 0.4rem;
      text-align: center;
      .itembox {
        height: 0.5rem;
        width: 0.8rem;
        line-height: 0.4rem;
        text-align: center;
      }
    }
    .leftnavitem,
    .active {
      // border: 1px solid red;
      height: 0.5rem;
      width: 0.8rem;
      line-height: 0.4rem;
      text-align: center;
      .itembox {
        height: 0.5rem;
        width: 0.8rem;
        line-height: 0.4rem;
        text-align: center;
      }
    }
  }
  .rightpart {
    width: 3.2rem;
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    // flex-wrap: nowrap;
    // justify-content: center;
    // align-items: center;
    .rightnavitem {
      // border: 1px solid red;
      padding-left: 0.8rem;
      width: 3.2rem;
      .navtitlemsg {
        // border: 1px solid red;
        height: 0.2rem;
        width: 100%;
        font-size: 0.14rem;
        line-height: 0.2rem;
        font-weight: 600;
      }
      .itemcontent {
        height: 1.2rem;
        // border: 1px solid red;
        border-top: 1px solid rgb(236, 227, 227);
        width: 2.4rem;
        display: flex;
        align-items: center;
        .leftpart {
          // border: 1px solid red;
          height: 0.85rem;
          width: 0.85rem;
          img {
            height: 0.85rem;
            width: 0.85rem;
          }
        }
        .rightpart {
          // border: 1px solid red;
          height: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .foodname,
          .foodsale,
          .fooddazhe,
          .foodprice {
            height: 0.2rem;
            // border: 1px solid red;
            width: 1.55rem;
          }
          .foodname {
            font-size: 0.14rem;
            font-weight: 700;
            line-height: 0.2rem;
          }
          .foodsale {
            font-size: 0.1rem;
            font-weight: 200;
            line-height: 0.2rem;
          }
          .fooddazhe {
            font-size: 0.1rem;
            font-weight: 200;
            line-height: 0.2rem;
            display: flex;
            align-items: center;
            .dazhenumb {
              height: 0.14rem;
              width: 0.3rem;
              border: 1px solid rgb(194, 32, 32);
              border-radius: 0.03rem;
              line-height: 0.14rem;
              font-size: 0.1rem;
              text-align: center;
              color: red;
            }
            .dazheword {
              height: 0.14rem;
              line-height: 0.14rem;
              font-size: 0.1rem;
              text-align: center;
              color: red;
            }
          }
          .foodprice {
            display: flex;
            justify-content: space-around;
            .rightprice {
              // border:1px solid red;
              height: 0.2rem;
              width: 0.75rem;
              .nowprice {
                // border:1px solid red;
                height: 0.2rem;
                width: 0.4rem;
                font-size: 0.14rem;
                color: red;
                line-height: 0.14rem;
                text-align: center;
              }
              .beforeprice {
                // border:1px solid red;
                height: 0.2rem;
                width: 0.3rem;
                font-size: 0.11rem;
                color: rgb(114, 107, 107);
                line-height: 0.14rem;
                text-align: center;
                text-decoration: line-through;
              }
            }
            .mountpart {
              // border:1px solid red;
              height: 0.2rem;
              width: 0.65rem;
              display: flex;
              justify-content: flex-end;
              .decriseimg {
                // border:1px solid red;
                width: 0.18rem;
                height: 0.18rem;
                // visibility:hidden;
              }
              .ordernumb {
                // border:1px solid red;
                width: 0.25rem;
                height: 0.18rem;
                line-height: 0.18rem;
                text-align: center;
                // visibility:hidden;
              }
              .incriseimg {
                // border:1px solid red;
                width: 0.18rem;
                height: 0.18rem;
              }
            }
          }
        }
      }
    }
  }
}
#circle_cart {
  height: 0.5rem;
  width: 0.5rem;
  // border:1px solid red;
  position: fixed;
  left: 0.1rem;
  bottom: 0.15rem;
  z-index: 1001;
  display: none;
  .img_contain {
    // border:1px solid red;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.5rem;
    background-color: rgb(96, 171, 221);
    img {
      // border:1px solid red;
      height: 0.35rem;
      width: 0.35rem;
      margin: 0.075rem;
    }
  }
  .cart_mount {
    // border:1px solid red;
    height: 0.15rem;
    width: 0.15rem;
    border-radius: 0.1rem;
    line-height: 0.15rem;
    text-align: center;
    color: #fff;
    background: rgba(245, 188, 3, 0.932);
    position: absolute;
    top: 0;
    right: 0;
  }
}
#totalmoney_cart {
  height: 0.5rem;
  width: 100%;
  // border:1px solid red;
  display: none;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  // display: flex;
  // justify-content: space-around;
  // align-items: center;
  .cart_left {
    float: left;
    height: 0.5rem;
    width: 2.2rem;
    // border:1px solid red;
    background-color: rgb(71, 67, 67);
    display: flex;
    flex-direction: column;
    align-items: center;
    .total {
      // border:1px solid red;
      height: 0.3rem;
      width: 1rem;
      line-height: 0.3rem;
      font-size: 0.16rem;
      text-align: center;
      color: white;
    }
    .peisong {
      // border:1px solid red;
      height: 0.2rem;
      width: 1rem;
      line-height: 0.2rem;
      text-align: center;
      color: #fff;
      font-size: 0.09rem;
    }
  }
  .cart_right {
    height: 0.5rem;
    float: left;
    width: 1rem;
    // border:1px solid red;
    background: rgb(101, 235, 119);
    line-height: 0.5rem;
    text-align: center;
    font-size: 0.15rem;
  }
}
.zhezhao{
  border:1px solid red;
  height:7rem;
  width:3.2rem;
  background:rgb(179, 176, 176);
  position: fixed;
  top:0;
  left: 0;
  opacity: 0.5;
}
.fade-enter-active, .fade-leave-active {
 transition: all .5s
}
.fade-enter, .fade-leave-to{
  // transform: translateY(2rem);
 opacity: 0;
}
.cart_contain {
  border: 1px solid red;
  height: 2rem;
  width: 3.2rem;
  position: fixed;
  transition: height 2s;
  left: 0;
  bottom: 0.5rem;
  background-color:#fff;
  z-index: 900;
  .cart_contain_title {
    border: 1px solid red;
    height: 0.4rem;
    width: 3.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .cart_contain_left {
      border: 1px solid red;
      height: 0.4rem;
      width: 1.4rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .cart_contain_right {
      border: 1px solid red;
      height: 0.4rem;
      width: 1.4rem;
      line-height: 0.4rem;
      text-align: end;
    }
  }
  .cart_contain_main {
    border: 1px solid red;
    height: 0.4rem;
    width: 3.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .main_left {
      border: 1px solid red;
      height: 0.4rem;
      width: 1.4rem;
      line-height: 0.4rem;
    }
    .main_right {
      border: 1px solid red;
      height: 0.4rem;
      width: 1.4rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .main_charge {
        border: 1px solid red;
        height: 0.4rem;
        width: 0.7rem;
        line-height: 0.4rem;
      }
      .main_mount {
        border: 1px solid red;
        height: 0.4rem;
        width: 0.7rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .decriseimg {
          // border:1px solid red;
          width: 0.18rem;
          height: 0.18rem;
          // visibility:hidden;
        }
        .ordernumb {
          // border:1px solid red;
          width: 0.25rem;
          height: 0.18rem;
          line-height: 0.18rem;
          text-align: center;
          // visibility:hidden;
        }
        .incriseimg {
          // border:1px solid red;
          width: 0.18rem;
          height: 0.18rem;
        }
      }
    }
  }
}
.cart-enter-active, .cart-leave-active {
 transition: all .5s
}
.cart-enter, .cart-leave-to{
  transform: translateY(2rem);
 opacity: 0;
}
</style>