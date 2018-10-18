<template>
    <footer>
            <router-link tag="dl" to="/" exact>
                <dt><i class="iconfont icon-shouye"></i></dt>
                <dd>首页</dd>
            </router-link>
            <router-link tag="dl" to="/discover">
                <dt><i class="iconfont icon-dazhongdianping"></i></dt>
                <dd>分类</dd>
            </router-link>
            <router-link tag="dl" to="/vip">
                <dt><i class="iconfont icon-faxiandingdan"></i></dt>
                <dd>会员</dd>
            </router-link>
            <router-link tag="dl" to="/shopcar">
                <dt><i class="iconfont icon-gouwuche"></i></dt>
                <dd>购物车</dd>
            </router-link>
            <router-link tag="dl" to="/my">
                <dt><i class="iconfont icon-wode"></i></dt>
                <dd>我的</dd>
            </router-link>
        </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>