
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<meta charset="UTF-8">

<%
	String usernm = String.valueOf(request.getAttribute("name"));
	if(usernm.equals("null")){
	    usernm = "";
	}
%>
<style>
	#user {
		position:relative;
		top:-48px;
		right:-880px;
		font-size: 12px;
	}
	.logins {
		text-align: right;
	}
</style>
<!--최상단-->
<header>
	<div class="top_banner"></div>
</header>
<!--최상단끝-->
<!--메뉴-->
<nav>
	<div class="menus">
		<ul class="menus_ul">
			<li><img src="./logo/e_click_logo.png" onclick="eclick()" title="e-Click 온라인 부동산"></li>
			<li title="일반매물">일반매물</li>
			<li title="추천매물">추천매물</li>
			<li title="중계의뢰">중계의뢰</li>
			<li title="상담신청">상담신청</li>
			<li title="업체의뢰">업체의뢰</li>
			<li title="의뢰현황">의뢰현황</li>
			<li class="logins">
				<!--
				홍길동님 환영합니다. [로그아웃]
				-->
				<span title="로그인"><img src="./ico/login.svg" onclick="login()"></span>
				<span title="회원가입"><img src="./ico/membership.svg" onclick="join()"></span>
			</li>
		</ul>
		<span id="user" style="display:none;"><%=usernm %></span>
	</div>
</nav>
<script>
var a = "<%=usernm%>";
</script>
<script src="./js/top.js?v=${today}"></script>
<!--메뉴끝-->