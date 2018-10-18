<template>
<div class='mywrap'>
    <div class='mydevtop'>
        <header>
        <div class='welcome'>Hello,你好</div>
    <div class='tops'>
        <router-link tag="span" to="/login">
        去登录
    </router-link>
    </div>
    </header>
    <div class="order">
        <div class='ordertop'>
            <span>我的订单</span>
            <p>全部订单<i class='iconfont icon-chevron-thin-right'></i></p>
        </div>
        <div class='orderbot'>
            <dl>
                <dt><i class='iconfont icon-qianbao'></i></dt>
                <dd>待支付</dd>
            </dl>
            <dl>
                <dt><i class='iconfont icon-wenjian'></i></dt>
                <dd>代发货</dd>
            </dl>
            <dl>
                <dt><i class='iconfont icon-qiaquan'></i></dt>
                <dd>已发货</dd>
            </dl>
        </div>
    </div>
    <div class='zichan'>我的资产</div>
    <div class='property'>
            <dl>
                <dt>￥0.00</dt>
                <dd>余额</dd>
            </dl>
            <dl>
                <dt>0</dt>
                <dd>积分</dd>
            </dl>
            <dl>
                <dt>￥0.00</dt>
                <dd>卡包</dd>
            </dl>
            <dl>
                <dt>0</dt>
                <dd>优惠卷</dd>
            </dl>
        </div>
    </div>
    <Footer></Footer>
</div>
</template>

<script>
import Footer from '@/components/footer'
    export default {
       data(){
           return{

           }
       },
       mounted() {
           
       },methods:{

       },
        components:{
            Footer,
        } 
    }
</script>

<style scoped>
@import url('../../common/fonts/iconfont.css');
@import url('../../common/css/my.css');
</style>