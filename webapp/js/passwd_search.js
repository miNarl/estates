// 비밀번호 찾기
var pass = {
	search:function(){
		let emailck = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
		if(f.lemail.value == "" || f.lemail.value == " "){
			alert("이메일을 입력해주세요.")
			f.lemail.focus();
		} else if(emailck.test(f.lemail.value) == false){
			alert("이메일을 다시 확인해주세요")
		} else if(f.lname.value == "" || f.lname.value == " "){
			alert("이름을 입력해주세요.")
		} else {
			f.method = "post";
			f.action = "./pwfind.do";
			f.enctype = "application/x-www-form-urlencoded";
			// action="http://localhost:8080/estates/pwfind.do"
			f.submit();
		}
	}
}

function login() {
    location.href = "./login.jsp";
}
function join() {
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