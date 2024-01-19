document.addEventListener('DOMContentLoaded', function () {
    var dateInput = document.getElementsByName('lday')[0];
    var reservationButton = document.querySelector('input[type="button"]');

    
    dateInput.addEventListener('change', function () {
      validateSelectedDate();
    });

    
    reservationButton.addEventListener('click', function () {
      validateSelectedDate();
    });

    
    function validateSelectedDate() {
      var selectedDate = new Date(dateInput.value);
      var currentDate = new Date();

     
      if (selectedDate <= currentDate || selectedDate.getTime() - currentDate.getTime() < 24 * 60 * 60 * 1000) {
        alert("해당 일자에 맞는 방문날짜를 선택 하세요");
        
      } else {
       
        estates.reservation();
      }
    }
  });




document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.getElementById('ltime');
    var startTime = 9;
    var endTime = 17;

    for (var hour = startTime; hour <= endTime; hour++) {
      for (var minute = 0; minute < 60; minute += 30) {
        var formattedHour = hour.toString().padStart(2, '0');
        var formattedMinute = minute.toString().padStart(2, '0');
        var time = formattedHour + ':' + formattedMinute;

        dropdown.add(new Option(time, time));
      }
    }
  });









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