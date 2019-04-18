<template>
    <div>
        <titlecomponent></titlecomponent>
        <div class="receivegoodsaddress">
            <div class="add_address">请添加一个收货地址</div>
            <img src="@/assets/getmore.png">
        </div>
        <div class="arrivetime">
            <div class="leftarrtime">送达时间</div>
            <div class="rightarrtime">
                <div class="jingkuai">尽快送达 | 预计 20:30</div>
                <div class="fengniao">蜂鸟专送</div>
            </div>
        </div>
        <div class="payway">
            <div class="waysleft">支付方式</div>
            <div class="waysright">
                <div class="waysword">在线支付</div>
                <img src="@/assets/getmore.png">
            </div>
        </div>
    </div>
</template>

<script>
import titlecomponent from "../components/title";
    export default {
        components: {
    titlecomponent
  },
    }
</script>

<style lang="scss" scoped>
  .receivegoodsaddress{
    //   border:1px solid red;
      height:0.7rem;
      width:3.2rem;
      margin-top:0.4rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid rgb(65, 102, 202);
      .add_address{
        //   border:1px solid red;
          height:0.3rem;
          width:2.7rem;
          line-height: 0.3rem;
          font-size: 0.15rem;
      }
      img{
        //   border:1px solid red;
          height:0.3rem;
          width:0.3rem;
      }
  }
  .arrivetime{
    //   border:1px solid red;
      border-left: 10px solid rgb(65, 102, 202);
      height:0.8rem;
      width:3.2rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid rgb(65, 102, 202);
      .leftarrtime{
        //   border:1px solid red;
          height:0.4rem;
          width:1.3rem;
          font-size: 0.15rem;
          font-weight: 800;
          line-height:0.4rem;
          
      }
      .rightarrtime{
          height:0.8rem;
          width:1.5rem;
        //   border:1px solid red;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-end;
          .jingkuai{
            //   border:1px solid red;
              height:0.3rem;
              width:1.5rem;
              font-size: 0.14rem;
            font-weight: 400;
            color: rgb(65, 102, 202);
            line-height: 0.3rem;
            text-align: end;
          }
          .fengniao{
            //   border:1px solid red;
              height:0.15rem;
              width:0.5rem;
              font-size: 0.12rem;
              background-color: rgb(65, 102, 202);
              border-radius: 0.04rem;
            line-height: 0.15rem;
            text-align: end;
          }
      }
  }
  .payway{
    //   border:1px solid red;
      height:0.4rem;
      width:3.2rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 1px solid rgb(65, 102, 202);
      .waysleft{
    //   border:1px solid red;          
          height: 0.4rem;
          width:1.4rem;
          font-size: 0.14rem;
          line-height: 0.4rem;
      }
      .waysright{
        //   border:1px solid red;
          height: 0.4rem;
          width:1.4rem;
          display: flex;
          justify-content: flex-end;
          align-items: center;

          .waysword{
            //   border:1px solid red;
              font-size: 0.12rem;
          line-height: 0.4rem;
          }
          img{
            //   border:1px solid red;
              height:0.25rem;
              width:0.25rem;
          }
      }
  }
</style>