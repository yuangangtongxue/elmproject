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
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      currentid: 0,
      isshowdec: false,
      isshownumb: false,
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
              nowprice: "21.5",
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
      console.log({ index, offsetTop: timer.FLOOR_OFFSETTOP });
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
          document.documentElement.scrollTop = timer.FLOOR_OFFSETTOP;
          document.body.scrollTop = timer.FLOOR_OFFSETTOP;
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
          document.documentElement.scrollTop = timer.FLOOR_OFFSETTOP;
          document.body.scrollTop = timer.FLOOR_OFFSETTOP;
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
        // this.getElementByXid("decriseimg").style.display="none";
        //   this.getElementByClassname("decriseimg").style.display="block";
        // document.getElementsByClassName("decriseimg").style.visibility="visible"
      }
    },
    showdecmount(navid, index) {
      this.messages[navid].itemmsg[index].clickcount--;
      if (this.messages[navid].itemmsg[index].clickcount < 1) {
        this.messages[navid].itemmsg[index].isshownumb = false;
        this.messages[navid].itemmsg[index].isshowdec = false;
        //   this.getElementByid("decriseimg").style.display="none";
        // document.getElementsByClassName("decriseimg").style.visibility="hidden"
        //   this.getElementByXid("decriseimg").style.display="block";
      }
    },
    /**
     * 监听窗口滚动楼层导航动态定位
     */
    floorSrcollAddEventListener() {
      var _this = this;
      let nav_item = document.getElementsByClassName("leftnavitem"),
        floor_item = document.getElementsByClassName("rightnavitem");
      nav_item[0].className = "leftnavitem active";
      window.onscroll = function () {
          let window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          let clientHeight = document.documentElement.clientHeight
          let scrollHeight = document.documentElement.scrollHeight
          for (let i = 0, len = floor_item.length; i < len; i++) {
              let floor_offsetTop = floor_item[i].offsetTop - floor_item[0].offsetTop;
              if(i<len-1){
                var floor_offsetTop1 = floor_item[i+1].offsetTop - floor_item[0].offsetTop;
                if (window_scrollTop >= floor_offsetTop && window_scrollTop < floor_offsetTop1 && window_scrollTop < scrollHeight - clientHeight-1) {
                        nav_item[i].style.backgroundColor = "#fff";
              }else{
                        nav_item[i].style.backgroundColor = "rgb(215, 223, 215)";
              }
              }else{//最后一个没有到顶上，单独判断
                if(window_scrollTop >= scrollHeight - clientHeight-1){
                   nav_item[i].style.backgroundColor = "#fff";
                }else{
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
    .leftnavitem,.active{
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
        border: 1px solid red;
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
              //   border:1px solid red;
              height: 0.2rem;
              width: 0.75rem;
              .nowprice {
                //   border:1px solid red;
                height: 0.2rem;
                width: 0.4rem;
                font-size: 0.14rem;
                color: red;
                line-height: 0.14rem;
                text-align: center;
              }
              .beforeprice {
                //   border:1px solid red;
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
              //   border:1px solid red;
              height: 0.2rem;
              width: 0.65rem;
              display: flex;
              justify-content: flex-end;
              .decriseimg {
                //   border:1px solid red;
                width: 0.18rem;
                height: 0.18rem;
                // visibility:hidden;
              }
              .ordernumb {
                //   border:1px solid red;
                width: 0.25rem;
                height: 0.18rem;
                line-height: 0.18rem;
                text-align: center;
                // visibility:hidden;
              }
              .incriseimg {
                //   border:1px solid red;
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
</style>