<template>
  <div class='wrap'>
    <div class='header'>
    <router-link tag="i" class='iconfont icon-xiangzuo' to="/">
    </router-link>验证手机</div>
    <section>
      <img src="//img.dmallcdn.com/common/964135f3-19de-4ab7-a9ba-512b10acd452_750H" alt="">
      <div class='tops'></div>
      <p><input v-model="phone" type="text" placeholder="请输入你的手机号">
      <button class='btn' @click='btn' v-if="!isSendMsg" :disabled="isMsgCode">获取验证码</button>
      <button class='btn' disabled="true" v-else>{{time}}秒后重新获取</button>
      </p>
      <p><input v-model="msgCode" type="text" placeholder="请输入验证码"></p>
      <div class='tongyi'>
        <span>验证手机视为已阅读并同意</span>
        <a href="https://i.dmall.com/#login/view/agreement/agreement">用户协议</a>
      </div>
      <button class="btns" @click='btns' :disabled="isLogin">确定</button>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        phone: '',
        msgCode: '',
        time: 10,
        isSendMsg: false,
      }
    },
    computed: {
      isMsgCode () {
        var reg = /[0-9]{11}/;
        return !reg.test(this.phone)
      },
      isLogin () {
        if (this.phone != '' && this.msgCode.length == 7) {
          return false
        }
        return true
      }
    },
    methods: {
      btn() {
        console.log(1)
        axios.get('/api/user/msgCode', {
          params: {
            phone: this.phone
          }
        }).then(res => {
          console.log(res.data)
          this.isSendMsg = true;
          var interval = setInterval(() => {
            this.time -= 1;
            if (this.time <= 0) {
              clearInterval(interval);
              this.isSendMsg = false;
              this.time = 10;
            }
          }, 1000)
        })
      },
      btns() {
        axios.post('http://localhost:3000/api/user/login', {
          phone: this.phone,
          msgCode: this.msgCode
        }).then(res => {
          console.log(res.data)
          const url = this.$route.query.redirectUrl || '/my'
          this.$router.replace(url)
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>
  @import url('../common/fonts/iconfont.css');
  * {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  body,html{
    width:100%;
    height:100%;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  .wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .header {
    width: 100%;
    height: 1rem;
    position: relative;
    text-align: center;
    line-height: 1.2rem;
    font-size: .4rem;
    align-items: center;
  }
  .iconfont {
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
    color: #fff;
    background: #000;
    display: block;
    position: absolute;
    top: .15rem;
    left: .1rem;
    text-align: center;
    font-size: .4rem;
    line-height: .7rem;
    font-weight: 100;
  }
  section {
    width: 100%;
    flex: 1;
  }
  img {
    width: 100%;
    display: block;
  }
  p {
    width: 100%;
    height: 1.4rem;
    display: flex;
    align-items: center;
  }
  input {
    width: 70%;
    height: 1rem;
    border: 0;
    font-size: .4rem;
    margin-left: .3rem;
    outline: none;
  }
  .tongyi {
    width: 100%;
    height: 1.4rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .tongyi a {
    margin-right: .3rem;
    color: #ff712b;
    margin-left: .1rem;
  }
  .tops {
    width: 100%;
    height: .2rem;
    background: #eee;
  }
  .btn {
    padding: 8px 12px;
    color: #ff712b;
    border: 0;
    font-size: .35rem;
    background: #fff;
    border: solid 1px #ff712b;
    outline: none;
    border-radius: .1rem;
  }
  .btns {
    width: 95%;
    margin-left: 2.5%;
    height: 100%;
    border: 0;
    background: #ff712b;
    color: #fff;
    height: 1rem;
    font-size: .4rem;
    border-radius: .1rem;
  }
</style>