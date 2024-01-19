<%@page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
	Date today = new Date();
	request.setAttribute("today", today);
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입 페이지</title>
<link rel="stylesheet" type="text/css" href="./css/index.css?v=${today}">
<link rel="stylesheet" type="text/css" href="./css/member_join.css?v=${today}">
</head>
<body onload="ajax()">
<header><%@ include file="./top.jsp" %></header>

<nav></nav>
<main>
	<form id="f">
		<p>이메일로 회원가입</p>
		<div>
			<a>이메일</a> <input type="text" name="lemail" placeholder=" 이메일 주소를 입력해주세요." autocomplete="none">
		</div>
		<div>
			<a>비밀번호</a> <input type="password" name="lpass" placeholder=" 10~16자(영문,숫자,특수 문자 조합)로 입력해주세요." autocomplete="none">
		</div>
		<div>
			<a>비밀번호 확인</a> <input type="password" placeholder=" 비밀번호를 다시 한 번 입력해주세요." autocomplete="none">
		</div>
		<div>
		    <a>이름</a> <input type="text" name="lname" placeholder=" 이름을 입력해주세요." autocomplete="none">
		</div>
		<div>
		    <a>휴대폰번호</a> <input type="text" name="lhp" placeholder=" -없이 숫자만 입력해주세요." maxlength="11" autocomplete="none">
		</div>
		<div>
   			<input type="checkbox" id="all" name="lpart1" value="Y" onclick="toggleCheckboxes()"> <span>전체 동의</span>
		</div>
		
		<div class="line"></div>
		
	<div class="bottom">	
		<div class="box1"><input type="checkbox" name="lpart2" value="Y" onclick="updateCheckAll()"> <a class="a1">(필수) <span>만 14세 이상입니다.</span></a></div>
		<div class="box2"><input type="checkbox" name="lpart3" value="Y" onclick="updateCheckAll()"> <a class="a2">(필수) <span><u>이용약관</u>에 동의</span></a></div>
		<div class="box3"><input type="checkbox" name="lpart4" value="Y" onclick="updateCheckAll()"> <a class="a3">(필수) <span><u>개인정보 수집 및 이용</u>에 동의</span></a></div>
		<section class="text1">   </section>
		<div class="box4"><input type="checkbox" name="lpart5" value="Y" onclick="updateCheckAll()"> <span>(선택) 마케팅 수신에 동의</span></div>
		<section class="text2">   </section>
	</div>
		<div><input type="button" value="가입 하기" onclick="members.person()"></div>
	</form>
</main>
<footer><%@ include file="./copyright.jsp" %></footer>
</body>
<script src="./js/join.js?v=${today}"></script>
</html>