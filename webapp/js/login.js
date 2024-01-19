var estates = {
			login:function(){
				let lmailck = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
				let hpck = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
				
				if(f.lemail.value == "" || f.lemail.value == " "){
					alert("이메일을 입력해주세요.")
					f.lemail.focus();
				} else if(lmailck.test(f.lemail.value) == false){
					alert("이메일을 다시 확인해주세요")
				} else if(f.lpass.value == "" || f.lpass.value == " "){
					alert("패스워드를 입력해주세요.")
				} else if(f.lpass.value.length < 10 || f.lpass.value.length > 16){
					alert("패스워드는 10~16자 입니다.")
				} else {
					f.method = "post";
					f.action = "./login.do";
					f.enctype = "application/x-www-form-urlencoded";
					f.submit();
				}
			}
			
	}


function join(){
	location.href = "./member_join.jsp";
}
function eclick(){
	location.href = "./index.jsp";
}
function email_search(){
	location.href = "./email_search.jsp";
}
function passwd_search(){
	location.href = "./passwd_search.jsp";
}