var userSpan = document.getElementById("user");

if (a !== "") {
    var lis = document.querySelectorAll(".menus_ul li");
    for (var i = 1; i <= 5; i++) {
        lis[i].style.display = "block";
    }

    userSpan.innerHTML = a + "님 환영합니다.<a href='./logout.do'> [로그아웃]</a>";
    userSpan.style.display = "block";
    // 로그인 성공 시 로그인 버튼 숨김
    document.querySelector(".logins").style.display = "none";
} else {
    userSpan.style.display = "none";
}