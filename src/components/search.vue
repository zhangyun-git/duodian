<template>
 <div class='seawrap'>
    <TOPS>
    </TOPS>
    <section @click='hides'>
        <div class='searchs'>
            <input type="text" placeholder="小区、街道、大厦" v-model="val" @input ="inputFunc()"><button>取消</button>
        </div>
        <div class='mark' v-show="shows">
            <p v-for="(item,index) in citylist" :key='index' @click='clicks(item.name)'>
                <span>{{item.name}}</span>
                <span>{{item.district}}</span>
            </p>
        </div>
        <div class='dingwei' @click='refding'>
            <i class='iconfont icon-dingwei'></i>定位当前位置
        </div>
        <div class='dong'>
            <dl>
                <dt><img src="//img.dmallcdn.com/common/ea483fae-ca6d-4a26-9da3-ce0f0b3f770c" alt=""></dt>
                <dd>您还没有收货地址</dd>
            </dl>
            <img src="../common/image/1.gif" alt="" v-show="hid">
        </div>
        <div class='dizhis' v-show="adds">
            <p v-for="(ols,ind) in lis" :key='ind' @click='clickss(ols)'>{{ols}}</p>
            <input type="text" placeholder="请输入地址" v-model="vals" @input ="inputFuncs()">
            <button @click='sures'>确定</button>
        </div>
        <div class='addre' @click='addresslog'>新增地址</div>
    </section>
  </div>
</template>

<script>
import map from '@/utils/map'
import TOPS from '@/components/tops'
    export default {
        data(){
            return{
                val: '',
                citylist: [],
                addres: '',
                shows: false,
                hid:false,
                adds: false,
                lis: [],
                vals: '',
                newaddress: ''
            }
        },
        mounted() {
            this.mouts()
        },
        methods:{
            mouts(){
                this.lis=JSON.parse(localStorage.getItem('addresss'))
                console.log(this.lis)
            },
            inputFunc(){
                let names = this.val
                this.shows=true
                let that = this
                AMap.plugin('AMap.Autocomplete', function(){
            // 实例化Autocomplete
                var autoOptions = {
                    //city 限定城市，默认全国
                    city: '全国'
                }
                var autoComplete= new AMap.Autocomplete(autoOptions);
                autoComplete.search(names, function(status, result) {
                    // 搜索成功时，result即是对应的匹配数据
                    that.citylist = result.tips
                    console.log(that.citylist)
                })
            })
            },
            clicks(vals){
                localStorage.setItem('wxLocation', vals)
                this.addres = vals
                this.$router.replace({
                    path: `/?vals=${vals}`
                })
            },clickss(valss){
                localStorage.setItem('wxLocation', valss)
                this.addres = valss
                this.$router.replace({
                    path: `/?vals=${valss}`
                })
            },
            hides(){
                this.shows = false
            },
            refding(){
                this.getLocation()
                this.hid = true
            },async getLocation(){
                    var add = await map.getLocation()
                    console.log(add.formattedAddress)
                    localStorage.setItem('wxLocation', add.formattedAddress)
                    if(add.formattedAddress){
                        this.hid = false
                        this.$router.replace('/')
                    }
                    // map.getLocation.then((data) => {
                    // //localStorage.setItem('wxLocation', data)
                    // console.log(data,this.$router.query)
                    // }).catch(() => {
                    //     console.log('失败')
                    // })
            },
            addresslog(){
                this.$router.push('/newaddress')
            },
            inputFuncs(){
                this.newaddress=this.vals
            },
            sures(){
                
                if(this.newaddress.length!=''){
                    if(this.lis.indexOf(this.newaddress)==-1){
                    this.lis.push(this.newaddress)
                    localStorage.setItem('addresss',JSON.stringify(this.lis))
                    }
                }
            }
        },
        components:{
            TOPS
        }
    }
</script>

<style scoped lang='scss'>
@import url('../common/fonts/iconfont.css');
@import url('../common/css/search.css');
</style>