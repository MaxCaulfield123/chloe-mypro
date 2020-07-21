<template>
    <div>
    <keep-alive>
    
    
    <!-- 购物车 -->
    <div class="cartall">
        <div class="carthead mpbox">
            <span>
                <input v-model="everytrue" type="checkbox" class="chooseall">
                        <span v-if="!everytrue">全选</span>
                        <span v-else >全不选</span>
            </span>
            <span>商品信息</span>
            <span>单价</span>
            <span>数量</span>
            <span>小计</span>
            <span>操作</span>
        </div>
        <div class="itemall mpbox">
            
            <div class="item">
                <div class="itemhead">
                    <span>
                        <input v-model="everytrue" type="checkbox" class="chooseall">
                        国美网店
                    </span>
                    <span>在线客服</span>
                </div>
                <div class="initem" v-for="(item, index) in cartdata" :key="index" >
                    <div>
                        <input type="checkbox" v-model="item.ischk" class="itembox">
                        <img id="cartimg" :src="'img/详情/xq/'+item.showimg" alt="">
                        <span>
                            <router-link :to="'/detail/'+item.id" >
                                {{item.title}}
                            </router-link>
                        </span>
                    </div>
                    <div id="price">${{item.price}}.00</div>
                    <div id="number">
                        <button @click="minus(index)" >-</button>
                        <input type="text" ref="iptnum" @input="testnum(item)" v-model="item.num">
                        <button @click="add(index)" >+</button>
                    </div>
                    <div id="itemcount">${{item.price*parseInt(item.num)}}.00</div>
                    <div id="operate">
                        <span @click="del(index)" >删除</span>
                    </div>
                </div>
            </div>
        </div>
        <div style="background-color: #f3f3f3;">
            <div class="buy mpbox">
                <div>
                    <span>
                        <input v-model="everytrue" type="checkbox" class="chooseall">
                        <span v-if="!everytrue">全选</span>
                        <span v-else >全不选</span>
                    </span>
                    <span>
                        删除
                    </span>
                </div>
                <div>
                    <span>总计(不含运费) :</span>
                    <span ref="total" id="total">$4599.00</span>
                    <span>去结算></span>
                </div>
            </div>
        </div>
    </div>
    </keep-alive>
</div>
</template>





<script>
export default {
    data(){
        return {
            cartdata:[],
            everytrue:false
        }
    },
    methods:{
        testnum(item){
            let zz=new RegExp('^\\d{1,2}$','ig');
            if(!zz.test(item.num)){
                item.num=1
            }
        },
        minus(i){
            if(this.cartdata[i].num>1) this.cartdata[i].num=this.cartdata[i].num-1;
            sessionStorage.setItem('cartdata',JSON.stringify(this.cartdata))

        },
        add(i){
            if(this.cartdata[i].num<99){this.cartdata[i].num=parseInt(this.cartdata[i].num)+1;}
            sessionStorage.setItem('cartdata',JSON.stringify(this.cartdata))

        },
        del(i){
            this.cartdata.splice(i,1);
            sessionStorage.setItem('cartdata',JSON.stringify(this.cartdata))
        }
    },
    // 数据监测,通常写成函数形式,参数为数据本身
    // 如果数组中包含对象,则检测数据写成对象的格式,对象可以设置deep是否深度监听
    watch:{
        cartdata:{
            handler(val){
                for(let i of val){
                    if(i.num<1)i.num=1
                }
                let c=0;
                let everyt=[]
                for(let i of this.cartdata){
                    if(i.ischk){
                        c+=i.num*i.price;
                    }
                    everyt.push(i.ischk)
                }
                if(everyt.every((i)=>{return i})){
                    this.everytrue=true;
                }else{
                    console.log('检测到数据改变')
                    this.everytrue=false
                }
                this.$refs.total.innerHTML=`$${c}.00`;
                sessionStorage.setItem('cartdata',JSON.stringify(this.cartdata))

            },
            deep:true
        },
        everytrue(val){
            if(val){
                console.log(val)
                for(let i of this.cartdata){
                    i.ischk=true
                }
            }
            if(!val){
                console.log(!val)
                for(let i of this.cartdata){
                    i.ischk=false
                }
            }
        }
    },
    mounted(){
        console.log(this.$refs.iptnum)
        this.cartdata=JSON.parse(sessionStorage.getItem('cartdata'));
        console.log(this.cartdata)
        let c=0;
        for(let i of this.cartdata){
            c+=i.num*i.price;
        }
        this.$refs.total.innerHTML=`$${c}.00`
        // // 获取元素
        //     //全选
        //     let chooseall=document.querySelectorAll('.chooseall');
        //     console.log(chooseall);
        //     //单项
        //     let item=document.getElementsByClassName('itembox')[0];
        //     var itembox=document.getElementsByClassName('itembox');
        //     // 加减数量
        //     let minus=document.getElementById('number').children[0];
        //     let count=document.getElementById('number').children[1];
        //     let add=document.getElementById('number').children[2];
        //     console.log(item,minus,count,add);
        //     //删除
        //     let del=document.getElementById('operate');
        //     // 价格
        //     let soloprice=document.getElementById('price');
        //     let countprice=document.getElementById('itemcount');
        //     let totalprice=document.getElementById('total')

        //     for(var n of chooseall){
        //         n.onclick=function(){
        //             if(n.checked){
        //                 for(var m of itembox){
        //                     m.checked=false;
        //                 }
        //                 for(var b of chooseall){
        //                 b.checked=false
        //                 }
        //             }else{
        //             for(var m of itembox){
        //                 m.checked=true;
        //             }
        //             for(var b of chooseall){
        //                 b.checked=true
        //             }
        //             }
        //         }
        //     }

        //     minus.onclick=function(){
        //         var val=count.value;
        //         if(val>1){
        //             val--;
        //             count.value=val;
        //         }
               
        //         countprice.innerHTML= '$'+Number(soloprice.innerHTML.substr(1,4)*val).toFixed(2);
        //         // 操作总计,可能会改
        //         totalprice.innerHTML=countprice.innerHTML;
        //     }
        //     add.onclick=function(){
        //         var val=count.value;
        //         val++;
        //         count.value=val;
        //         countprice.innerHTML= '$'+Number(soloprice.innerHTML.substr(1,4)*val).toFixed(2);
        //         totalprice.innerHTML=countprice.innerHTML;
        //     }
        //     del.onclick=function(){
        //         var item=document.getElementsByClassName('item')[0]
        //         item.innerHTML='';
        //         item.style.border='none'
        //     }
    }
}
</script>






<style>
        .cartall input{
            outline: none;
            text-align: center;
        }
        #cartimg{
            height: 100%;
        }
        /* 头部灰色区域 */
        .carthead{
            height: 50px;
            background-color: #eeeeee;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 10px;
        }
        .carthead>span{
            margin: 0px 20px;
        }
        /* 购物车内容区域 */
        .itemall{
            display: flex;
            flex-flow: column;
            align-items:flex-start;
        }
        .itemhead{
            padding: 20px!important;
        }
        .itemhead span:last-child{
            font-size: 14px;
            color: #999;

        }
        .item{
            border: 1px solid gray;
            border-radius: 10px;
            width: 100%;
        }
        .item>div:first-child{
            border-bottom: 1px solid grey;
            padding: 0px 20px;
        }
        .initem{
            display: flex;
            border-top: 1px solid #000;
            align-items: center;
            padding: 10px 20px;
            height: 100px;
            background-color: #fffaf4;
            width: 100%;
        }
        .initem a{
            color: brown;
            text-decoration:none
        }
        .initem a:hover{
            color: lightskyblue;
        }
        .initem:nth-child(2){
            border-top: none;
        }
        .initem>div:first-child{
            height: 100%;
        }
        .initem>div:first-child a{
            display: inline-block;
            width: 300px;
            overflow: hidden;
            text-overflow: ellipsis;
            line-clamp: 2;
            white-space:nowrap;
        }
        /* 内容文字 */
        #number input{
            width: 30px;
            height: 30px;
        }
        #number button{
            background-color: hotpink;
            border: none;
            outline: none;
            width: 30px;
            height: 30px;
        }
        #price{
            margin-left: 40px;
        }
        #number{
            margin-left: 100px;
            display: flex;
            flex-flow: row;
            align-items: center;
        }
        #itemcount{
            margin-left: 120px;
        }
        
        #operate{
            color: red;
            margin-left: 130px;
        }
        #operate:hover{
            color: brown;
            cursor: pointer;
        }
        /* 结算区域 */
        .buy{
            height: 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
        }
        .buy div{
            display: flex;
            align-items: center;
            flex-flow: row;
            justify-content: space-between;
        }
        .buy span{
            display: flex;
            align-items: center;
            flex-flow: row;
            justify-content: space-between;
        }
        .buy>div:last-child{
            margin-right: -780px;
        }
        .buy>div:last-child>span:nth-child(2){
            font-size: 22px;
            color: red;
            font-weight: bolder;
        }
        .buy>div:last-child>span:last-child{
            padding: 30px;
            color: white;
            background-color: red;
        }
    </style>