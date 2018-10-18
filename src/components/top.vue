<template>
    <div class='top'>
        <div class='topleft'>
            <i class='iconfont icon-dingwei1'></i>
            <span @click="orientation">送至: {{tops}}</span>
            <i class='iconfont icon-youjiantou-01'></i>
        </div>
        <div class='topright'>
            <i class='iconfont icon-fangdajing'></i>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            locations:{
                type:String,
                required:true
            }
        },
        data() {
            return {
                tops: ''
            }
        },
        mounted() {
            this.mounts()
        },
        methods:{
            mounts(){
                this.tops = localStorage.getItem('wxLocation')
            },
            orientation(){
                this.$router.push('/search')
            }
        }
    }
</script>

<style scoped>
@import url('../common/css/style.css');
@import url('../common/fonts/iconfont.css');
.topleft{
    display:flex;
}
.topleft span{
    width:4rem;
    overflow: hidden;
    flex-shrink: 0;
    text-overflow:ellipsis;
    white-space:nowrap
}
</style>