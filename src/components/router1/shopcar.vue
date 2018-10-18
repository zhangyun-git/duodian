<template>
    <div class='shopcarlist'>
        <div class='shopcarmain'>
            <div class='shopcartop'>
                <div class='shoptopleft'>
                    <p>多点君需要你的详细地址哟~</p>
                    <p>送至:{{shopaddress}}</p>
                </div>
                <i class='iconfont icon-chevron-thin-right'></i>
            </div>
            <div class='shopcarcenter'>
                <img src="//img.dmallcdn.com//dshop/201805/324b1ec1-0ada-410e-8970-23cc28812c9b" alt="">
                <p>购物车还没有买商品</p>
                <Btn>我要买买买</Btn>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/footer'
import Btn from '@/components/Btn'
    export default {
        data(){
            return{
                shopaddress: []
            }
        },
        mounted() {
            this.shopaddress = localStorage.getItem('wxLocation');
        },
        methods:{

        },
        components:{
            Footer,
            Btn
        }
    }
</script>

<style scoped lang='scss'>
@import url('../../common/css/style.css');
@import 'defaults';
@import url('../../common/fonts/iconfont.css');
.shopcarlist{
   width:100%;
   height:100%;
   display:flex;
   flex-direction: column;
   overflow: hidden;
}
.shopcarmain{
    width:100%;
    flex:1;
    display:flex;
    flex-direction: column;
    flex-shrink: 0;
}
.shopcartop{
    width:94%;
    height:2rem;
    display:flex;
    padding:0 3%;
    justify-content: space-between;
    align-items: center;
    border-top:5px dashed red;
    p:nth-child(1){
        font-size: .4rem;
    }
    p:nth-child(2){
        color: grey;
        margin-top: .2rem;
        width:70%;
        @include overflow();
    }
    .iconfont{
        font-size: .4rem;
    }    
}
.shopcarcenter{
    width:100%;
    flex: 1;
    flex-shrink: 0;
    display: flex;
    background: #f5f5f5;   
    flex-direction: column;
    text-align: center;
    img{
        width:3rem;
        height:3rem;
        margin-left: 35%;
        margin-top: 20%;
    }
    p{
        color: #979797;
        font-size: .45rem;
        line-height: 1rem;
    }
    .btns{
    margin-left: 35%;
    margin-top: .2rem;
    }
}
</style>