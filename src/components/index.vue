<template>
    <div class='wrap'>
        <Top :locations='locations'></Top>
        <header>
            <p :class="indexs == 1 ? 'active':''" @click='lisone'>多点超市<img src="https://img.dmallcdn.com/bizItem/201809/b21eb4db-0cac-40c5-b312-159e6e65db91" alt=""></p>
            <p :class="indexs == 2 ? 'active':''" @click='listwo'>全球精选<img src="https://img.dmallcdn.com/bizItem/201809/575d47ac-3e19-460a-ad1a-e5d774406bd3" alt=""></p>
        </header>
        <div class="swiper-containers">
            <div class="swiper-wrapper" id="betters">
                <div class="swiper-slide">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item,index) in imgs" :key="index"><img :src="item" alt=""></div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                    <section>
                        <div class='dls'>
                            <dl v-for="(item,index) in lists" :key="index">
                                <dt><img :src="item.img" alt=""></dt>
                                <dd>{{item.title}}</dd>
                            </dl>
                        </div>
                        <Discount><img src="https://img.dmallcdn.com/mIndex/201809/52784bb1-9922-432c-a4ed-87821c619d1e_750H" alt="" class='img'></Discount>
                        <Title></Title>
                        <div class="poster">
                            <div class="posterleft"><img src="https://img.dmallcdn.com/mIndex/201809/a07551eb-ceee-49bf-870e-ba55dceaf891_480x480H" alt=""></div>
                            <div class="posterRight">
                                <img src="https://img.dmallcdn.com/mIndex/201809/661b90ad-3948-4602-a9eb-1ab1e0e6e322_480x480H" alt="">
                                <img src="https://img.dmallcdn.com/mIndex/201809/48fa62b0-f9a6-4073-ab5b-e2e2fd1d309d_480x480H" alt="">
                            </div>
                        </div>
                        <Discount><img src="https://img.dmallcdn.com/mIndex/201809/fe7ddfa5-b9c9-483d-b80f-f987f5790345_750H" alt="" class='img'></Discount>
                        <div class='snackstop'>
                            <li v-for="(item,index) in lis" :key="index">
                                <img :src="item.img" alt="">
                            </li>
                        </div>
                    </section>
                </div>
                <div class="swiper-slide">222</div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import flex from '../common/js/libs/flexible.js'
import Top from '@/components/top'
import Footer from '@/components/footer'
import Discount from '@/components/discount'
import Title from '@/components/title'
import Swiper from 'swiper'
import map from '@/utils/map'

    export default {
        name: 'index',
        data () {
            return {
            msg: 'Welcome to Your Vue.js App',
            indexs: 1,
            mySwipers: '',
            locations: '北京八维研修学院',
            imgs: ['https://img.dmallcdn.com/mIndex/201809/52614ba2-8f36-4fb0-b556-9fa698c64e00_750H',
            'https://img.dmallcdn.com/mIndex/201809/1e4fbbb2-9d19-4e0a-a017-ecea3cf2e9f6_750H',
            'https://img.dmallcdn.com/mIndex/201809/a9092cb9-aa7f-4f16-b451-0a58c1521c85_750H',
            'https://img.dmallcdn.com/mIndex/201809/ebabb6f5-19cc-4fca-86d1-2a44df7bafc6_750H',
            'https://img.dmallcdn.com/mIndex/201809/ebabb6f5-19cc-4fca-86d1-2a44df7bafc6_750H',
            'https://img.dmallcdn.com/mIndex/201809/119bb2d7-c512-40d3-90cf-88efeae96312_750H',
            'https://img.dmallcdn.com/mIndex/201809/6612c083-7c67-4bed-99f6-7601ee58a1b1_750H'],
            lists: [{"img":"https://img.dmallcdn.com/mIndex/201809/ba8d1b34-4922-46d1-8ad2-7ad07f6f73cd_240x240H","title":"早晚市"},
            {"img":"https://img.dmallcdn.com/mIndex/201809/21aac3b9-c078-46d9-96c4-4e36f6753ad6_240x240H","title":"进店必买"},
            {"img":"https://img.dmallcdn.com/mIndex/201809/de467114-70bb-46a2-bf6b-ac25de544c50_240x240H","title":"热销榜单"},
            {"img":"https://img.dmallcdn.com/mIndex/201809/c81642f4-aaa1-40a8-b801-4bb8b2311128_240x240H","title":"直采品牌"},
            {"img":"https://img.dmallcdn.com/mIndex/201809/769eecfa-5c92-4817-858c-35a08d361858_240x240H","title":"自由购"},
            {"img":"https://img.dmallcdn.com/mIndex/201809/01a0dedf-56d2-462b-a530-147ec9353c75_240x240H","title":"常购清单"},
            {"img":"https://img.dmallcdn.com/mIndex/201809/0b601405-81d6-4787-8130-62c09046abcc_240x240H","title":"母婴天下"},
            {"img":"https://img.dmallcdn.com/mIndex/201809/6421daaa-f0c2-479f-a11a-adc00eba5dae_240x240H","title":"领劵中心"},
            {"img":"https://img.dmallcdn.com/mIndex/201809/e72f5e93-20b6-4ce4-afd0-a166e5599ab8_240x240H","title":"多点四季"},
            {"img":"https://img.dmallcdn.com/mIndex/201809/4b3c9338-4043-4002-b4e4-9eb02ecd79ad_240x240H","title":"会员专享"}],
            lis: [{'img':'https://img.dmallcdn.com/mIndex/201809/3c53ff26-4a34-4576-8f9b-f102ce1413b2_360x360H'},
            {'img':'https://img.dmallcdn.com/mIndex/201809/013f3b3a-edb7-41e1-8795-b1b41bc5c08b_360x360H'},
            {'img':'https://img.dmallcdn.com/mIndex/201809/eed87735-48ee-4386-9d01-dfbcda187e28_360x360H'},
            {'img':'https://img.dmallcdn.com/mIndex/201810/67e7501c-4f7d-4ee6-a87f-eeb734a5bcc1_360x360H'},
            {'img':'https://img.dmallcdn.com/mIndex/201810/9b5be618-2ea3-4b05-b535-094dee901a42_360x360H'},
            {'img':'https://img.dmallcdn.com/mIndex/201810/a7f83e2a-fdea-4a38-9e4c-4b4608744620_360x360H'},
            {'img':'https://img.dmallcdn.com/mIndex/201809/0bfeda72-3dbd-4ac1-a220-73e4f0704670_360x360H'},
            {'img':'https://img.dmallcdn.com/mIndex/201809/07ed44a9-1b22-4114-85ab-5fc0f63644fd_360x360H'},
            {'img':'https://img.dmallcdn.com/mIndex/201809/46584d67-631d-4722-906b-9a83246a34cc_360x360H'}]
            }
        },
        mounted() {
            this.mount()
            if(localStorage.getItem('wxLocation')==null){
                this.$router.replace('/location')
            }
        },
        methods:{
            mount(){
                var that=this
                var mySwipers = new Swiper('.swiper-containers', {
                    loop: true,
                    on: {
                        slideChange: function() {
                            if(mySwipers){
                                that.indexs = mySwipers.activeIndex  
                                
                            }
                        }
                    }
                })
                that.mySwipers=mySwipers
                var mySwiper = new Swiper('.swiper-container', {
                    autoplay: true,//可选选项，自动滑动
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                    }
                })
            },
            lisone(){
                this.mySwipers.slideTo(1)
            },
            listwo(){
                this.mySwipers.slideTo(2)
            }

        },
        components:{
            Top,
            Footer,
            Discount,
            Title
        }
    }
</script>

<style>

</style>