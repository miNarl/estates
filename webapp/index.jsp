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
<title>e-Click 온라인 부동산 팀프로젝트</title>
<link rel="stylesheet" type="text/css" href="./css/index.css?v=${today}">
</head>
<body>
<header><%@ include file="./top.jsp" %></header>
<nav></nav>
<main>
<section><%@ include file="./banner.jsp" %></section>
<section><%@ include file="./quickmenu.jsp" %></section>
<section><%@ include file="./weekinfo.jsp" %></section>
<section><%@ include file="./mdchoice.jsp" %></section>
</main>
<footer><%@ include file="./copyright.jsp" %></footer>
</body>
<script src="./js/index.js?v=${today}"></script>
</html>