<template>
    <div class='dismainright'>
                    <ol>
                        <li>全部</li>
                        <li v-for="(item,index) in rigthtop" @click='topclick(item.categoryName,index)' :class="num==index ? 'actives':'' " :key="index">{{item.categoryName}}</li>
                    </ol>
                    <div class='dismaindet'>
                       <dl>
                           <dt><img src="http://img.dmall.com/20170727/a27d485b-8382-4638-935f-58a247390eb1_240x240H" alt=""></dt>
                           <dd>
                               <p>缤纷田园鲜鸡蛋 30枚 新老包装随机</p>
                               <p class='mainbottom'><span>￥19.90</span><span class='bottomrights'>+</span></p>
                           </dd>
                       </dl>
                       <dl>
                           <dt><img src="http://img.dmall.com/20171129/4193455d-0fac-4794-b556-444474431da6_240x240H" alt=""></dt>
                           <dd>
                               <p>桃谷香鲜鸡蛋 30枚 </p>
                               <p class='mainbottom'><span>￥23.90</span><span class='bottomrights'>+</span></p>
                           </dd>
                       </dl>
                       <dl>
                           <dt><img src="http://img.dmall.com/20170817/81f780ae-58f5-4409-92ee-d46fcc180175_240x240H" alt=""></dt>
                           <dd>
                               <p>去头红虾【散】 500g</p>
                               <p class='mainbottom'><span>￥29.90</span><span class='bottomrights'>+</span></p>
                           </dd>
                       </dl>
                    </div>
    </div>
</template>

<script>

    export default {
        name: 'index',
        props:{
            rigthtop:{
                type:Array,
                required:true
            }
        },
        data () {
            return {
               num: 0
            }
        },
        mounted() {
            this.mount()
        },
        methods:{
            mount(){
                
            },
            topclick(akss,ind){
                this.num=ind
            }
        }
    }
</script>

<style>
</style>