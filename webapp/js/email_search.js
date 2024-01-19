var em = {
		search:function(){
			let hpck = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
			if(f.lname.value == "" || f.lname.value == " "){
				alert("이름을 입력해주세요.")
			} else if(f.lhp.value == "" || f.lhp.value == " "){
				alert("전화번호를 입력해주세요.")
			} else if(hpck.test(f.lhp.value) == false){
				alert("전화번호를 확인해주세요.")
			} else {
				f.method = "post";
				f.action = "./emailsearch.do";
				f.enctype = "application/x-www-form-urlencoded";
				// action="http://localhost:8080/estates/emailsearch.do"
				f.submit();
			}
		}
	}
	
	function login() {
        
        console.log("로그인 함수 호출");
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