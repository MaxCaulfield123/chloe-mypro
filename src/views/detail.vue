<template>
  <div class="about">

    <!-- 详情头部列表 -->
    <div>
        <div class="mpbox">
            <img src="img/detailshead.jpg" alt="">
        </div>
        <div class="detailhead">
            <div class="mpbox headlist">
                <ul>
                    <li>首页</li>
                    <li>Mate系列</li>
                    <li>P系列</li>
                    <li>nova系列</li>
                    <li>畅想系列</li>
                    <li>平板/笔记本</li>
                    <li>智能手表</li>
                    <li>智能手环</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- 头部面包屑导航 -->
    <div class="headbread">
        <div class="mpbox">
            <div class="headbreadleft">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="">数码</a></li>
                    <li class="breadcrumb-item"><a href="">时尚数码</a></li>
                    <li class="breadcrumb-item"><a href="">耳机/耳麦</a></li>
                    <li class="breadcrumb-item"><a href="">华为(HUAWEI)</a></li>
                    <li class="breadcrumb-item"><a href="">FreeBuds3</a></li>
                </ul>
            </div>
            <div class="headbreadright">
                <ul>
                    <li>收藏店铺</li>
                    <li>在线客服</li>
                    <li>国美自营</li>
                    <li>华为官方品牌旗舰店</li>
                </ul>
            </div>
        </div>
    </div>
	<!-- 放大镜 -->
	<div class="mpbox zoomall">
		<div class="zoom">
			<div class="midimg">
				<img :src="'img/详情/xq/middle/'+midimg" alt="">
				<div class="zhaozi"></div>
			</div>
			<div class="bigimg">
				<img class="bigimgson" :src="'img/详情/xq/big/'+bigimg" alt="">
			</div>
			<div class="smimglist">
				<div><img src="img/icon/zuojiantou.png" alt=""></div>
				<ul >
					<li v-for="(item, index) in detail.smallimg" @click="showother(index,$event)" :key="index" ><img  :src="'img/详情/xq/small/'+item" class="smimglistimg" alt=""></li>
				</ul>
				<div><img src="/img/icon/youjiantou.png" alt=""></div>
			</div>
			<div class="zoomtext"></div>
		</div>
		<div class="text">
			<div>
				<span>{{detail.title}}</span>
			</div>
			<div>
				<span>
					下单即送双肩包，鼠标，鼠标垫，键盘膜，清洁套装【赠品与商品分两单邮寄】更多优惠请点击【ThinkPad官方旗舰店】
				</span>
			</div>
			<div class="textprice">
				<div>
					<div class="textprice-l">团购价<span>¥{{detail.price}}</span><span>降价通知</span></div>
					<div class="textprice-r">
						<div>|</div>
						<div>好评度100%</div>
					</div>
				</div>
			</div>
			<div class="textlist">
				<div>
					<span class="lspan">服务</span>由国美安排厂商配送并提供保障监管
				</div>
				<div>
					<span class="lspan">类型</span>
					<ul>
						<li class="guige" v-for="(item,index) of detail.dtype" :key="index">{{item}}</li>
						<!-- <li class="guige">i5十代 8G 512G 02CD</li>
						<li class="guige">i7十代 8G 512G 03CD</li> -->
					</ul>
				</div>
				<div>
					<span class="lspan">货源</span>有货
				</div>
				<div><span class="lspan">易卡分期</span>0首付 30天免息 0利率</div>
			</div>
			<div class="iptcar">
				<div>
					<button class="addminus">-</button>
					<input  class="addminus" type="text" value="1">
					<button class="addminus">+</button>
				</div>
				<button @click="toss" >加入购物车</button>
			</div>
		</div>
	</div>

  </div>
</template>




<script>
export default {
  data(){
    return {
	  detail:{},
	  midimg:'',
	  bigimg:''
    }
  },
  methods:{
	toss(){
		if(sessionStorage.getItem('isfir')){
			console.log('不是第一次')
				this.detail.num=1;
				this.detail.ischk=1;
				var cart=JSON.parse(sessionStorage.getItem('cartdata'));
				cart.push(this.detail)
				//cart=JSON.parse(cart);
				sessionStorage.setItem('cartdata',JSON.stringify(cart))
				console.log(cart)
		}else{
			console.log('第一次创建空数组')
			let arr=[];
			this.detail.num=1;
			this.detail.ischk=true;
			arr.push(this.detail);
			sessionStorage.setItem('cartdata',JSON.stringify(arr));
			sessionStorage.setItem('isfir',true)
			console.log(JSON.parse(sessionStorage.getItem('cartdata')))
			// var cart=sessionStorage.getItem('cartdata');
			// cart=JSON.parse(cart);
			// cart.push(this.detail);
			// sessionStorage.setItem('cartdata',JSON.stringify(cart));
		}
	},
	showother(i,e){
		// e为第二个传参$event用于获取鼠标位置和事件对象	
		let imgs=document.getElementsByClassName('smimglistimg')

		imgs.forEach(item => {
			item.style.border='1px solid white'
		});
		e.target.style.border='1px solid red'
		this.midimg=this.detail.midimg[i]
		this.bigimg=this.detail.bigimg[i]
	},
    choosetext(){
     // 规格列表选择效果
			let guiges=document.getElementsByClassName('guige')
			for(var item of guiges){
				item.style.border="1px solid #999";
				item.onclick=function(){
					for(var n of guiges){
						n.style.border="1px solid #999"
					}
					this.style.border="1px solid red"
				}
			}
    }
  },
  updated(){
    this.choosetext();
  },
  mounted(){
    console.log(this.$route.params)
    // 获取detailtext
    this.axios.get('/getdetail?id='+this.$route.params.id).then((res)=>{
	  this.detail=res.data[0]
	  this.detail.bigimg=this.detail.bigimg.split('-');
	  this.detail.dtype=this.detail.dtype.split('&');
	  this.detail.midimg=this.detail.midimg.split('-');
	  this.detail.smallimg=this.detail.smallimg.split('-');
	  this.midimg=this.detail.midimg[0]
	  this.bigimg=this.detail.bigimg[0]
	  console.log(this.detail)
    })
    //按钮加减
    var allam=document.getElementsByClassName('addminus');
			var minus=allam[0];
			var ipt=allam[1];
			var add=allam[2];
			minus.onclick=function(){
			var count=ipt.value;
				if(count>1){
					count--;
					ipt.value=count;
				}else{
					ipt.value=1;
				}
			}
			add.onclick=function(){
			var count=ipt.value;
				count++;
				ipt.value=count;
      }
      
    //详情区域外包裹
			var zoomall=document.getElementsByClassName('zoomall')[0]
			//遮罩
			var mask=document.getElementsByClassName('zhaozi')[0];
			//中图片容器
			var mid=document.getElementsByClassName('midimg')[0];
			//大图片容器
			var big=document.getElementsByClassName('bigimg')[0];
			//大图片
			var bigimg=document.getElementsByClassName('bigimgson')[0];
			//显示隐藏
			mid.onmouseover=function(e){
				mask.style.display='block';
				big.style.display='block'
			}
			mid.onmouseleave=function(){
				mask.style.display='none';
				big.style.display='none'
			}
			mid.onmousemove=function(e){
				var left=e.clientX-zoomall.offsetLeft-mask.offsetWidth/2;
				var top=e.clientY-zoomall.offsetTop-mask.offsetHeight/2;
				if(left<0){
					left=0
				}else if(left>mid.offsetWidth-mask.offsetWidth){
					left=mid.offsetWidth-mask.offsetWidth
				}

				if(top<0){
					top=0
				}else if(top>mid.offsetHeight-mask.offsetHeight){
					top=mid.offsetHeight-mask.offsetHeight
				}
				mask.style.left=left+'px';
				mask.style.top=top+'px';
				
				bigimg.style.marginLeft=-16/9*left+'px';
				bigimg.style.marginTop=-16/9*top+'px'
      }
      		
  }
}
</script>




<style>
        /* 详情头部最顶端 */
        .detailhead{
            background-color: #333333;
            height: 40px;
        }
        .headlist ul{list-style: none}
        .headlist li{float: left;color: white;line-height: 40px;font-size: 16px;cursor: pointer;}
        .headlist li~li{margin-left: 15px}
        .headlist li:hover{
            background-color:#292929
        }
        /* 详情导航 */
        .breadcrumb-item + .breadcrumb-item::before{
	        content:">";
        }
        .breadcrumb{background-color: #f6f6f6;padding: 0;margin: 0}
        .headbread{background-color: #f6f6f6;height: 40px;line-height: 40px;font-size: 14px}
        .headbread a{text-decoration: none;color: black}
        .headbread a:hover{
            color: hotpink
        }
        .headbreadright{margin-top: -56px}
        .headbreadleft li{float: left;}
        .headbreadright li{
            float: right;
        }
        .headbreadright li:not(:first-child){
            margin-right: 10px
        }
		/* 商品详情区域 */
		/* 全部样式 */
		.zoomall{
			display: flex;
			margin-top: 40px;
		}
		/* 左侧放大镜样式 */
		
		.zoom{
			width: 450px;
			height: 556px;
			display: flex;
			flex-flow: column;
			position: relative;
		}
		.midimg{
			width: 450px;
			height: 450px;
			border: 1px solid #888;
			box-sizing: border-box;
			position: relative;
		}
		.midimg img{
			width: 100%;
			height: 100%;
		}
		.zhaozi{
			position: absolute;
			top: 0;
			left: 0;
			width: 253px;
			height: 253px;
			background-color: lightblue;
			opacity: 0.4;
			cursor: move;
			display: none;
		}
		.bigimg{
			width: 450px;
			height: 450px;
			display: block;
			position: absolute;
			z-index: 10;
			overflow: hidden;
			left: 450px;
			display: none;
			border: 1px solid #888;
		}
		/* 左侧放大镜下方小图片 */
		.smimglist{
			display: flex;
			align-items: center;
			justify-content:space-around;
			margin-top: 15px;
		}
		.smimglist img{
			box-sizing: border-box;
			border: 1px solid white;
			cursor: pointer;
		}

		/* .smimgchecked{
			border: 1px solid red;
		} */
		.smimglist>ul{
			padding: 0;
			display: flex;
			justify-content: space-around;
			margin: 0;
		}
		.smimglist>ul li:not(:last-child){
			margin-right: 30px;
			box-sizing: border-box;
		}
		/* 右侧文本详情区域 */
		.text{
			margin-left: 30px;
		}
		.text>div:first-child span{
			font-size: 18px;
			font-weight: bold;
			color: #666;
		}
		.text>div:nth-child(2) span{
			font-size: 14px;
			color: red;
		}
		.textprice>div{
			background-color: #f6f6f6;
			padding: 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.textprice-l{
			font-size: 12px;
			color: #666;
		}
		.textprice-l>span:first-child{
			font-size: 22px;
			color: red;
			padding-left: 10px;
			font-weight: bold;
		}
		.textprice-l>span:last-child{
			color: hotpink;
			padding-left: 10px;
		}

		.textprice-r{
			display: flex;
			align-items: center;
		}
		.textprice-r>div:first-child{
			font-size: 30px;
			padding-right: 5px;
			color: #999;
		}
		/* 右侧文本详情内商品类型区域 */
		.textlist{
			margin-top: 15px;
		}
		.textlist>div:first-child{
			font-size: 12px;
			color: #555;
		}
		.lspan{
			font-size: 12px;
			color: #999;
			padding: 10px;
		}
		.textlist>div:nth-child(2){
			padding-top: 10px;
			display: flex;
			justify-content: start;
			
		}
		.textlist>div:nth-child(2) ul{
			
			padding-left: 0;
		}
		.textlist>div:nth-child(2) ul li{
			border: 1px solid #999;
			padding: 5px;
			cursor: pointer;
		}
		.textlist>div:last-child{
			font-size: 12px;
			color: #555;
		}
		/* 右侧按钮区域 */
		.iptcar>div{
			display: flex;
			justify-content: left;
			margin-top: 20px;
		}
		.iptcar>div button{
			outline: none;
			border: 1px solid #999;
			background-color: #f5f5f5;
			box-sizing: border-box;
			width: 30px;
			font-size: 20px;
			font-weight: bold;
		}
		.iptcar>div input{
			width: 30px;
			text-align: center;
		}
		.iptcar>button{
			margin-top: 20px;
			border: none;	
			outline: none;
			padding: 10px;
			background-color: hotpink;
			color: white;
			transition: 0.1s linear all;
		}
		.iptcar>button:active{
			background-color: greenyellow;
			border-radius: 10%;
		}
    </style>
