
	window.onload=function(){
		// 登录
	//查找触发事件的元素
	var loginbtn=document.getElementById('loginbtn');
	// 声明变量保存是否登录的状态
	var islog=false;
	//为元素绑定事件
	// loginbtn.onclick=function login(){
	// 	var lognameval=document.getElementById('loginname').value;
	// 	var logpswdval=document.getElementById('loginpswd').value;
	// 	console.log(lognameval,logpswdval);
	// 		axios.get('/login',{
	// 		params:{
	// 			uname:lognameval,
	// 			pswd:logpswdval
	// 		}
	// 	}).then(res=>{
	// 		if(res.data.code==200){
	// 			let rega=document.getElementById('rega')
	// 			alert(res.data.message);
	// 			var login=document.getElementsByClassName("login")[0];
	// 			login.style.display='none'
	// 			var logintext=document.getElementsByClassName("denglu")[0];
	// 			logintext.innerHTML=res.data.uname;
	// 			rega.innerHTML=res.data.uname;
	// 			islog=true;

	// 		}else if(res.data.code==180){
	// 			alert(res.data.message)
	// 		}
			
	// 	})
	// }
	





	//设置axios默认URL
	// axios.defaults.baseURL='http://127.0.0.1:3000'
	//验证输入框
	var intname1=document.getElementsByClassName('tsname')[0];//用户名，数组
	var intpswd1=document.getElementsByClassName('tspswd')[0];//密码，数组
	var span1=intname1.nextElementSibling;
	var span2=intpswd1.nextElementSibling;
	var intconfirm=document.getElementById('tsconfirm');//确认,对象
	var span3=intconfirm.nextElementSibling;
	//用户名框验证
	intname1.onblur=function(){
		var reg=/^\w{3,12}$/
		if(reg.test(intname1.value)){
			span1.innerHTML='√';
			span1.style.color='green';
			sessionStorage.setItem('testuname',true);
		}else{
			span1.innerHTML='×';
			span1.style.color='red';
			sessionStorage.setItem('testuname',false)
		}
	}
	//确认框验证
	intconfirm.onblur=function(){
		var reg=new RegExp(`^${intpswd1.value}$`)
		if(reg.test(intconfirm.value)&&intpswd1.value!=''){
			span3.innerHTML='√';
			span3.style.color='green'
			sessionStorage.setItem('testcon',true)
		}else{
			span3.innerHTML='×';
			span3.style.color='red';
			sessionStorage.setItem('testcon',false)

		}
	}
	//密码框验证
	intpswd1.onblur=function(){
		var reg=/^\w{6,18}$/
		if(reg.test(intpswd1.value)){
			span2.innerHTML='√';
			span2.style.color='green';
			if(intpswd1.value!=intconfirm.value){
				span3.innerHTML='×';
				span3.style.color='red';
			}
			sessionStorage.setItem('testpswd',true)
		}else{
			span2.innerHTML='×';
			span2.style.color='red';
			sessionStorage.setItem('testpswd',false)
		};
	}
	// 注册
	// function reg(){
	// 	if(intname1.onblur()&&intpswd1.onblur()&&intconfirm.onblur()){
	// 		//发送axios请求
	// 		axios.post('/reg',`uname=${intname1.value}&pswd=${intpswd1.value}`).then((res)=>{
	// 			console.log(res.data)
	// 			if(res.data.code==200){
	// 				if(window.confirm('注册成功,即将登陆')){
	// 					var reg=document.getElementsByClassName('reg')[0];

	// 					reg.style.display='none'
	// 					var lognameval=document.getElementById('loginname').value;
	// 					var logpswdval=document.getElementById('loginpswd').value;
	// 					lognameval=intname1.value;
	// 					logpswdval=intpswd1.value;
	// 					console.log(lognameval,logpswdval);
	// 					axios.get('/login',{
	// 						params:{
	// 							uname:lognameval,
	// 							pswd:logpswdval
	// 						}
	// 					}).then((res)=>{
	// 						var logintext=document.getElementsByClassName("denglu")[0];
	// 						logintext.innerHTML=res.data.uname;
	// 					})
	// 				}else{
	// 					var reg=document.getElementsByClassName("reg")[0];
	// 					reg.style.display='none'
	// 				}
	// 			}else{
	// 				alert('注册失败，用户名重复')
	// 			}
	// 		})
	// 	}
	// }
	




	//注册窗口显示

	var as=document.getElementsByClassName("rega");
	console.log(as)
	for( var a of as){
		a.onclick=function(e){
			e.preventDefault();
			var login=document.getElementsByClassName("login")[0];
			if(login.style.display!='block'&&!islog){
				var reg=document.getElementsByClassName("reg")[0];
				reg.style.display='block'
			}
		}
	}
	
	
	// 注册窗口关闭
	var none=document.getElementById('none');
	none.onclick=function(e){
		e.preventDefault();//阻止回到顶部
		var reg=document.getElementsByClassName("reg")[0];
		reg.style.display='none'
	}
	//登录窗口关闭
	var closelogin=document.getElementById('closelogin')
	var login=document.getElementsByClassName("login")[0];
	closelogin.onclick=function(e){
		e.preventDefault();
		login.style.display='none'
	};

	//登录窗口打开
	var denglu=document.getElementsByClassName("denglu")[0];
	denglu.onclick=function(e){
		e.preventDefault();
		var reg=document.getElementsByClassName("reg")[0];
		console.log(sessionStorage.getItem('islog'));
		console.log(sessionStorage.getItem('islog')!==1,reg.style.display!='block');
		if(reg.style.display!='block'&&!islog){
			login.style.display='block'
		}
	}
	}
