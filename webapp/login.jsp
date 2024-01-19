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
<title>로그인 페이지</title>
<link rel="stylesheet" type="text/css" href="./css/index.css?v=${today}">
<link rel="stylesheet" type="text/css" href="./css/login.css?v=${today}">
</head>
<body>
<header><%@ include file="./top.jsp" %></header>
<nav></nav>
<main>
	<form id="f">
		<p>이메일로 시작하기</p>
		<div><input type="text" name="lemail" placeholder="이메일 주소"></div>
		<div><input type="password" name="lpass" placeholder="비밀번호" maxlength="16"></div>
		<div><input type="button" value="로그인" onclick="estates.login()"></div>
		<div>
			<span onclick="email_search()">이메일 찾기</span>
			<span onclick="passwd_search()">비밀번호 찾기</span>
		</div>
	</form>
</main>
<footer><%@ include file="./copyright.jsp" %></footer>
</body>
<script src="./js/login.js?v=${today}"></script>
</html>