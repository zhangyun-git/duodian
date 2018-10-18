<template>
    <div class='wrap'>
        <div class='wrapsect'>
            <div class='wraptop'>
                <ul>
                    <li v-for="(item,index) in tops" :key="index" :class="act==index ? 'active':''" @click='topclick(item.name,index)'>{{item.name}}</li>
                </ul>
            </div>
            <Disleft :left='left'></Disleft>
            
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/footer'
import flex from '@/common/js/libs/flexible.js'
import axios from 'axios'
import Disleft from '@/components/disleft'
    export default {
        name: 'index',
        data () {
            return {
                list: [],
                tops: [],
                left: [],
                rigthtop: [],
                act:0
            }
        },
        mounted() {
            this.mount()
        },
        methods:{
            mount(){
                axios.get('http://localhost:8080/api').then(res=>{
                    this.list=res.data.data.wareCategory
                    this.left=res.data.data.wareCategory[0].categoryList
                    res.data.data.wareCategory.map((item,index)=>{
                        this.tops.push(item.store)
                    })
                    this.rigthtop=this.left[0].childCategoryList
                })
            },
            topclick(ak,inds){
                this.act=inds
                this.list.map((item,index)=>{
                    if(ak==item.store.name){
                        this.left=item.categoryList
                    }
                })
            }
        },
        components:{
            Footer,
            Disleft
        }
    }
</script>

<style scoped>
@import url('../../common/css/style.css');
@import url('../../common/fonts/iconfont.css');
</style>