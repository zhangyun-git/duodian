<template>
<div class='vipwrap'>
    <div class='vipliststop'>
       vip
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

<style scoped lang='scss'>
@import url('../../common/css/style.css');
* {
    padding: 0;
    margin: 0;
}

html,
body {
    width: 100%;
    height: 100%;
}

#app {
    width: 100%;
    height: 100%;
}

.vipwrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .vipliststop{
        width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    }
}

</style>