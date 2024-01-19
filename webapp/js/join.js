function ajax(){
	var http = new XMLHttpRequest;
	http.open("GET","./agree1.txt?v=1",false);
	http.send();
	console.log(http.response);
	document.querySelector(".text1").innerHTML = http.response;
	
	var http1 = new XMLHttpRequest;
	http1.open("GET","./agree2.txt?v=1",false);
	http1.send();
	console.log(http1.response);
	document.querySelector(".text2").innerHTML = http1.response;
}

// 전체 선택 체크박스 클릭 시 개별 체크박스 모두 선택 또는 해제
function toggleCheckboxes() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var checkAllCheckbox = checkboxes[0];
  for (var i = 1; i < checkboxes.length; i++) {
    checkboxes[i].checked = checkAllCheckbox.checked;
  }
}

// 개별 체크박스 클릭 시 전체 선택 체크박스 상태 변경
function updateCheckAll() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var checkAllCheckbox = checkboxes[0];
  var checkedCount = 0;
  for (var i = 1; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedCount++;
    }
  }
  checkAllCheckbox.checked = (checkedCount === checkboxes.length - 1);
}

// 전체 선택 체크박스 클릭 시 개별 체크박스 상태 변경 이벤트 등록
var checkAllCheckbox = document.querySelector('input[type="checkbox"]');
checkAllCheckbox.addEventListener('click', toggleCheckboxes);

// 개별 체크박스 클릭 시 전체 선택 체크박스 상태 변경 이벤트 등록
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
for (var i = 1; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', updateCheckAll);
}

// 회원가입
var members = {
    person: function () {
        var f = document.getElementById("f");

        if (f.lemail.value == "" || f.lemail.value.length < 6) {
            alert("이메일은 최소 6자 이상 입력하세요.")
            f.lemail.focus();
        } else if (!isValidPassword(f.lpass.value)) {
            alert("패스워드는 10~16자의 영문, 숫자, 특수 문자 조합이어야 합니다.");
            f.lpass.focus();
        } else if (f.lname.value == "") {
            alert("이름을 입력하세요.")
            f.lname.focus();
        } else if (f.lhp.value == "" || f.lhp.value.length < 10) {
            alert("정상적인 전화번호 및 휴대전화번호를 입력하세요.")
            f.lhp.focus();
        } else {
            if (!(f.lpart2.checked || f.lpart3.checked || f.lpart4.checked)) {
                alert("필수 항목 중 적어도 하나에 동의해야 회원가입이 가능합니다.");
            } else {
                
                const idck = /[a-zA-Z]/;
                let emailck = /[0-9a-zA-Z]+\@[0-9a-zA-Z]+\.[0-9a-zA-Z]+/gi;

                if (idck.test(f.lemail.value) == true) {
                    if (idck.test(f.lhp.value) == false) {
                        f.method = "post";
                        f.action = "./join.do";
                        f.enctype = "application/x-www-form-urlencoded";
                        f.submit();
                    } else {
                        alert("올바른 이메일 주소를 입력해 주세요.")
                        f.lemail.focus();
                    }
                } else {
                    alert("전화번호는 숫자만 입력해 주세요.")
                    f.lhp.focus();
                }
            }
        }
    }
}

function isValidPassword(password) {
    // 비밀번호는 10~16자의 영문, 숫자, 특수 문자 조합이어야 함
    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{10,16}$/;
    return passwordRegex.test(password);
}

function login(){
	location.href = "./login.jsp";
}
function join(){
	location.href = "./member_join.jsp";
}
function eclick(){
	location.href = "./index.jsp";
}

