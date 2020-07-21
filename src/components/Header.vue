<template>
  <div>
    <!-- 登录 -->
    <div class="login">
      <div class="d-flex flex-column">
        <a href id="closelogin">×</a>
        <div>
          登录账号:
          <input type="text" v-model="uname" id="loginname" placeholder="请输入用户名3-12位" />
          <span></span>
        </div>
        <div>
          登录密码:
          <input type="password" v-model="pswd" id="loginpswd" placeholder="请输入密码6-18位" />
          <span></span>
        </div>
        <div>
          <button @click="log" id="loginbtn">登录!</button>
        </div>
      </div>
    </div>
    <!-- 注册 -->
    <div class="reg">
      <div class="d-flex flex-column">
        <a href id="none">×</a>
        <div>
          注册账户:
          <input type="text" v-model="uname" class="tsname" placeholder="请输入用户名3-12位" />
          <span></span>
        </div>
        <div>
          注册密码:
          <input type="password" v-model="pswd" class="tspswd" placeholder="请输入密码6-18位" />
          <span></span>
        </div>
        <div>
          确认密码:
          <input type="password" v-model="con" id="tsconfirm" placeholder="确认密码" />
          <span></span>
        </div>
        <div>
          <button @click="reg" id="regbtn">注册!</button>
        </div>
      </div>
    </div>
    <!--  -->
    <header>
      <div class="nav">
        <div class="mpbox">
          <div class="d-flex flex-row justify-content-between align-items-center">
            <div class="navleft">
              <div class="zhankai1">
                <div>
                  <a href>国美会员</a>
                </div>
                <div>
                  <img src="img/icon/zhankai.png" />
                </div>
                <div class="hide1">
                  <div>
                    <img src="img/icon/未登录.png" />
                  </div>
                  <div>
                    欢迎来到国美,
                    <a id="rega" class="rega">请注册!</a>
                  </div>
                </div>
              </div>
              <div id="denglubtn">
                <a href  class="denglu">登录</a>
              </div>
              <div>
                <a class="rega"  >
                  注册有礼
                  <img src="img/icon/liwu.png" />
                </a>
              </div>
            </div>
            <div class="navright">
              <div>
                <a href>我的订单</a>
              </div>
              <div>
                <div class="zhankai1">
                  <div>
                    <a href>我的国美</a>
                  </div>
                  <div>
                    <img src="img/icon/zhankai.png" />
                  </div>
                  <div class="hide1">111111</div>
                </div>
              </div>
              <div>
                <div class="zhankai1">
                  <div>
                    <a href>企业采购</a>
                  </div>
                  <div>
                    <img src="img/icon/zhankai.png" />
                  </div>
                  <div class="hide1">2222222</div>
                </div>
              </div>
              <div>
                <div class="zhankai1">
                  <div>
                    <a href>服务中心</a>
                  </div>
                  <div>
                    <img src="img/icon/zhankai.png" />
                  </div>
                  <div class="hide1">
                    <p class="font-weight-bold">
                      <a href>用户服务</a>
                    </p>
                    <hr />
                    <ul
                      class="d-flex flex-row flex-wrap justify-content-around align-items-center p-0 mr-1"
                    >
                      <li>
                        <a href>售后服务</a>
                      </li>
                      <li>
                        <a href>帮助服务</a>
                      </li>
                      <li>
                        <a href>新手指南</a>
                      </li>
                      <li>
                        <a href>客服服务</a>
                      </li>
                      <li>
                        <a href>用户注销</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <a href>网站导航</a>
                </div>
                <div></div>
                <div></div>
              </div>
              <div>
                <a href>手机国美</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mpbox">
        <div class="select d-flex justify-content-between align-items-center">
          <div>
            <div>
              <a href>
                <img src="img/1.gif" />
              </a>
            </div>
          </div>
          <div class="d-flex flex-wrap flex-column">
            <div class="d-flex">
              <div>
                <select>
                  <option selected="selected">商品</option>
                  <option>店铺</option>
                  <option>话题</option>
                  <option>圈子</option>
                </select>
              </div>
              <div>
                <input type="text" name id placeholder="海尔洗衣机" />
              </div>
              <div>
                <button type="button">
                  <a href class="text-white">搜索</a>
                </button>
              </div>
            </div>
            <div>
              <ul class="d-flex">
                <li>
                  <a href>领空调通用券</a>
                </li>
                <li>
                  <a href>美的空调</a>
                </li>
                <li>
                  <a href>海尔冰箱</a>
                </li>
                <li>
                  <a href>苹果手机</a>
                </li>
                <li>
                  <a href>格力空调</a>
                </li>
                <li>
                  <a href>吹风机</a>
                </li>
                <li>
                  <a href>电风扇</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <img src="img/icon/gouwuche.png" />
              <router-link @click="setdata" to="/cart">我的购物车</router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: sessionStorage.getItem('uname'),
      pswd: sessionStorage.getItem('pswd'),
      con: sessionStorage.getItem('pswd')
    };
  },
  mounted(){
      if(sessionStorage.getItem('uname')&&sessionStorage.getItem('pswd')){
          this.axios.get("/login", {
          params: {
            uname: sessionStorage.getItem('uname'),
            pswd: sessionStorage.getItem('pswd')
          }
        }).then(res => {
            console.log(res)
          if (res.data.code == 200) {
                let rega = document.getElementById("rega");
                var login = document.getElementsByClassName("login")[0];
                login.style.display = "none";
                var logintext = document.getElementsByClassName("denglu")[0];
                logintext.innerHTML = res.data.uname;
                rega.innerHTML = res.data.uname;
                sessionStorage.setItem('islog',true)
                sessionStorage.setItem('uname',this.uname)
                sessionStorage.setItem('pswd',this.pswd)
          }
        });
      }
  },
  methods: {
    setdata(){
      //sessionStorage.setItem('cartdata',this.$store.state.cartdata)
    },
    log() {
    
      this.axios.get("/login", {
          params: {
            uname: this.uname,
            pswd: this.pswd
          }
        }).then(res => {
            console.log(res)
          if (res.data.code == 200) {
                let rega = document.getElementById("rega");
                alert(res.data.message);
                var login = document.getElementsByClassName("login")[0];
                login.style.display = "none";
                var logintext = document.getElementsByClassName("denglu")[0];
                logintext.innerHTML = res.data.uname;
                rega.innerHTML = res.data.uname;
                sessionStorage.setItem('islog',true)
                sessionStorage.setItem('uname',this.uname)
                sessionStorage.setItem('pswd',this.pswd)
                
          }else if (res.data.code == 180) {
              alert(res.data.message);
          }
        });

    },
    reg() {
      console.log(1546);
      sessionStorage.getItem("testuname");
      sessionStorage.getItem("testpswd");
      sessionStorage.getItem("testcon");
      if (
        sessionStorage.getItem("testuname") &&
        sessionStorage.getItem("testcon") &&
        sessionStorage.getItem("testpswd")
      ) {
        //发送axios请求
        this.axios
          .post("/reg", `uname=${this.uname}&pswd=${this.pswd}`)
          .then(res => {
            console.log(res.data);
            if (res.data.code == 200) {
              if (window.confirm("注册成功,即将登陆")) {
                var reg = document.getElementsByClassName("reg")[0];

                reg.style.display = "none";
                // var lognameval=document.getElementById('loginname').value;
                // var logpswdval=document.getElementById('loginpswd').value;
                // lognameval=intname1.value;
                // logpswdval=intpswd1.value;
                // console.log(lognameval,logpswdval);
                this.axios
                  .get("/login", {
                    params: {
                      uname: this.uname,
                      pswd: this.pswd
                    }
                  })
                  .then(res => {
                    var logintext = document.getElementsByClassName(
                      "denglu"
                    )[0];
                    logintext.innerHTML = res.data.uname;
                    sessionStorage.setItem('islog',true)
                    sessionStorage.setItem('uname',this.uname)
                    sessionStorage.setItem('pswd',this.pswd)
                  });
              } else {
                var reg = document.getElementsByClassName("reg")[0];
                reg.style.display = "none";
              }
              sessionStorage.removeItem("testuname");
              sessionStorage.removeItem("testpswd");
              sessionStorage.removeItem("testcon");
            } else {
              alert("注册失败，用户名重复");
              sessionStorage.removeItem("testuname");
              sessionStorage.removeItem("testpswd");
              sessionStorage.removeItem("testcon");
              this.uname = "";
              this.pswd = "";
              this.con = "";
            }
          });
      }
    }
  }
};
</script>

<style>
/* 全局样式 */
* {
  box-sizing: border-box;
  list-style: none;
}
.mpbox {
  width: 1200px;
  margin: 0 auto;
}
.mpbox::after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
/* 导航栏整体内容 */
.nav {
  background-color: #f8f8f8;
  border-bottom: 1px solid #f3f3ff;
  height: 30px;
  position: relative;
  font-size: 12px;
}
.nav a {
  color: #888;
  text-decoration: none;
  cursor: pointer;
}
.nav a:hover {
  color: #f5004b;
}
/* 导航栏左侧内容 */
.navleft div,
.navright div {
  float: left;
  text-align: center;
  line-height: 30px;
}
.navleft div:not(:first-child) {
  margin-left: 12px;
}
.navleft img {
  height: 30px;
  margin-left: -17px;
  margin-top: -5px;
}
.navleft > div:last-child a {
  color: #f5004b;
  margin-bottom: 3px;
}
.navleft > div:last-child img {
  margin-left: 1px;
  width: 20px;
  height: 20px;
}
/* 导航栏右侧内容 */
.navright > div:first-child {
  margin-right: 10px;
}
.navright img {
  margin-left: -5px;
  margin-top: -3px;
}
.navright > div img {
  margin-left: -17px;
}
.navright > div:not(:first-child):not(:last-child) {
  margin-right: 5px;
}
/* 导航栏展开隐藏区域 */
.hide1 {
  width: 192px;
  height: auto;
  position: absolute;
  top: 28px;
  display: none;
  border: 1px solid #e6e6e6;
  border-top: none;
  left: -13px;
  padding: 10px 22px;
  background-color: white;
}
.zhankai1 {
  position: relative;
}

.hide1 ul {
  list-style: none;
}
.hide1 > ul li {
  display: flex;
}
.zhankai1:hover .hide1 {
  display: block;
}
.zhankai1 > div {
  margin-left: 10px;
}
.zhankai1:hover {
  border-bottom: none;
  background-color: white !important;
}
/* 搜索框区域 */
.select select,
.select input,
.select button {
  border: 1px solid hotpink;
}
.select {
  height: 120px;
}
.select select {
  height: 30px;
  width: 63px;
  color: #888;
  outline: none;
}
.select input {
  height: 30px;
  width: 310px;
  color: #888;
  outline: none;
}

.select button {
  height: 30px;
  background-color: hotpink;
  width: 80px;
}
.select a {
  color: #888;
  text-decoration: none;
  font-size: 14px;
}
.select a:hover {
  color: #f5004b;
}
.select ul {
  margin-left: -40px;
}
.select > div li a {
  padding: 0px 10px 0 0;
  font-size: 8px;
}
.select > div:nth-child(2) {
  margin-bottom: -30px;
}
/* 登录窗口 */
/* 登录窗口 */
.reg {
  width: 500px;
  height: 400px;
  background-color: white;
  position: fixed;
  z-index: 10000000;
  top: 300px;
  left: 700px;
  display: none;
  border: 1px solid gray;
}
.reg a {
  position: absolute;
  left: 450px;
  top: 20px;
  text-decoration: none;
}
.reg a::before {
  content: "";
  display: table;
}
.reg > div {
  margin-left: 140px;
  margin-top: 100px;
}
.reg > div div + div {
  margin-top: 20px;
}
/* 登录窗口 */
.login {
  width: 500px;
  height: 400px;
  background-color: white;
  position: fixed;
  z-index: 10000000;
  top: 300px;
  left: 700px;
  display: none;
  border: 1px solid gray;
}
.login a {
  position: absolute;
  left: 450px;
  top: 20px;
  text-decoration: none;
}
.login a::before {
  content: "";
  display: table;
}
.login > div {
  margin-left: 140px;
  margin-top: 100px;
}
.login > div div + div {
  margin-top: 20px;
}
</style>