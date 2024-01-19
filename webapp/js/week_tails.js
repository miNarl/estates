var http3 = new XMLHttpRequest();
http3.onreadystatechange = function(){
	if(http3.readyState == XMLHttpRequest.DONE && http3.status == 200){
		var data = JSON.parse(this.response);
		htmlcode.detail(data);
	}
}
http3.open("GET","./json/type_info.json?v=1",true);
http3.send();

var index = window.location.search;
var no = index.split("?index=");

var htmlcode = {
    detail: function(data) {
        var weektails = document.getElementById("weektails");
        var html = "";

        for (var w in data["type_db"]) {

            var bunyang = data["type_db"][w];

			if(no[1] == bunyang["bunyang_index"]){            
            
            html += "<p>" + bunyang["bunyang_title"] + "</p>";
            html += "<ul>";
            html += "<li>종류</li>";
            html += "<li>" + bunyang["bunyang_part"] + " | " + bunyang["bunyang_info"] + "</li>";

            html += "<li>주소</li><li>" + bunyang["bunyang_addr"] + "</li>";
            html += "<li>규모</li><li>" + bunyang["bunyang_scale"] + "</li>";
            html += "<li>시기</li><li>" + bunyang["bunyang_date"] + " | " + bunyang["bunyang_in"] + "</li>";
            html += "<li>난방구조</li><li>" + bunyang["bunyang_str"] + "</li>";
            html += "<li>건설사</li><li>" + bunyang["bunyang_company"] + "</li>";
            html += "<li>사진정보</li><li><img src='" + bunyang["bunyang_img"] + "'></li></ul>";
			}
        }

        weektails.innerHTML = html;
    }
};


function login(){
	location.href = "./login.jsp";
}
function join(){
	location.href = "./member_join.jsp";
}
function eclick(){
	location.href = "./index.jsp";
}
function reservation(){
	location.href = "./reservation.jsp";
}