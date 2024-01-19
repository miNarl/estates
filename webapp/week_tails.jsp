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
    <title>분양정보</title>
    <link rel="stylesheet" type="text/css" href="./css/index.css?v=${today}">
    <link rel="stylesheet" type="text/css" href="./css/week_tails.css?v=${today}">
</head>
<body>
    <header><%@ include file="./top.jsp" %></header>
    <nav></nav>
    <main>
        <div class="weektails">
            <p>분양정보</p>
            <div id="weektails"></div>
            <div id="weekDetail"></div>
            <input type="button" value="방문예약" onclick="reservation()">
        </div>
    </main>
    <footer><%@ include file="./copyright.jsp" %></footer>
    <script src="./js/week_tails.js?v=${today}"></script>
</body>
</html>