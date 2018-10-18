<template>
    <div class='dismain'>
        <div class='dismainleft'>
            <div class='betters'>
                <p v-for="(item,index) in left" :key="index" :class="acts==index ? 'actives':'' " @click="clickleft(item.categoryName,index)">{{item.categoryName}}</p>
            </div>
        </div>
        <Disright :rigthtop='rigthtop'></Disright>
    </div>
    
</template>

<script>
import Disright from '@/components/disright'
import betterscroll from "better-scroll"
    export default {
        name: 'index',
        props:{
            left:{
                type:Array,
                required:true
            }
        },
        data () {
            return {
                rigthtop: [],
                acts:0,
                scroll: ''
            }
        },
        mounted() {
            this.mounts()
            this.scroll = new betterscroll(".dismainleft",{
                click:true,
                probeType:2
            })
            this.scroll.on('scroll',(pos)=>{
               
            })
            this.scroll.on('touchEnd',(pos)=>{
                if(pos.y>100){
                    this.scroll.refresh()
                }
            }) 
        },
        methods:{
            mounts(){
                console.log(this.left)
            },
            clickleft(aks,inds){
                this.acts = inds
                console.log(inds)
                this.left.map((item,index)=>{
                    if(aks==item.categoryName){
                        this.rigthtop=item.childCategoryList
                    }
                })
            }
        },
        components:{
            Disright
        }
    }
</script>

<style>
</style>