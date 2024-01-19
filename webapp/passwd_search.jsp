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
<title>비밀번호 찾기</title>
<link rel="stylesheet" type="text/css" href="./css/index.css?v=${today}">
<link rel="stylesheet" type="text/css" href="./css/passwd_search.css?v=${today}">
</head>
<body>
<header><%@ include file="./top.jsp" %></header>
<nav></nav>
<main>
<form id="f">
<div>
<ul>
<li><a href="./email_search.jsp">이메일 찾기</a></li>
<li><a href="./passwd_search.jsp">비밀번호 찾기</a></li>
</ul>
</div>
<div class="text1">
<div>
	<input type="text" name="lemail" placeholder="이메일">
</div>
<div>
	<input type="text" name="lname" placeholder="이름">
</div>
</div>
<div><input type="button" onclick="pass.search()" value="비밀번호 찾기"></div>
</form>
</main>
<footer><%@ include file="./copyright.jsp" %></footer>
</body>
<script src="./js/passwd_search.js?v=${today}"></script>
</html>