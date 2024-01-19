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
<title>모델 하우스 사전 방문예약</title>
<link rel="stylesheet" type="text/css" href="./css/index.css?v=${today}">
<link rel="stylesheet" type="text/css" href="./css/reservation.css?v=${today}">
</head>
<body onload="ajax()">
<header><%@ include file="./top.jsp" %></header>
<nav></nav>
<main>
	<form id="f">
		<div class="weektails">
		<p>분양정보</p>
		<div id="weektails"></div>
        <div id="weekDetail"></div>
		</div>
		<p>모델 하우스 사전 방문예약</p>
		<div><input type="date" name="lday"></div>
		<div><select name="ltime" id="ltime"></select></div>
		<div><input type="text" name="lname" placeholder="방문자 이름을 입력하세요"></div>
		<div><input type="text" name="lhp" placeholder="연락처를 입력하세요"></div>
		<div class="people"><input type="radio" name="lpeople">1명</div>
		<div class="people"><input type="radio" name="lpeople">2명</div>
		<span>* 방문인원은 2명까지로 제한 됩니다</span>
		
		<div><input type="button" value="방문 예약등록" onclick="estates.reservation()"></div>
		<div>

		</div>
	</form>
</main>
<footer><%@ include file="./copyright.jsp" %></footer>
</body>
<script src="./js/reservation.js?v=${today}"></script>
</html>