var http = new XMLHttpRequest();
http.onreadystatechange = function() {
    if (http.readyState == XMLHttpRequest.DONE && http.status == 200) {
        var data = JSON.parse(this.response);
        htmlcode.lists(data);
    }
};
http.open("GET", "./json/week_data.json?v=1", true);
http.send();

var http2 = new XMLHttpRequest();
http2.onreadystatechange = function() {
    if (http2.readyState == XMLHttpRequest.DONE && http2.status == 200) {
        var data = JSON.parse(this.response);
        htmlcode.mdchoice(data);
    }
};
http2.open("GET", "./json/md_choice.json?v=1", true);
http2.send();

// 가운데 금주분양 매물정보
var htmlcode = {
    lists: function(data) {
        var week = document.getElementById("weekdays");
        week.innerHTML = "";
        for (var w in data.week_db) {
            var properties = ["bunyang_index", "bunyang_tag", "bunyang_title", "bunyang_addr", "bunyang_part", "bunyang_info"];
            var html = properties.map(function(ww) {
                if (ww === "bunyang_index") return `<span data-index="${data.week_db[w]["bunyang_index"]}">${data.week_db[w]["bunyang_tag"]}</span>`;
                else if (ww === "bunyang_tag") return `<div>${data.week_db[w]["bunyang_title"]}</div>`;
                else if (ww === "bunyang_title") return `<aside>${data.week_db[w]["bunyang_addr"]}</aside>`;
                else if (ww === "bunyang_addr") return `<span>${data.week_db[w]["bunyang_part"]} | ${data.week_db[w]["bunyang_info"]}</span>`;
                else if (ww === "bunyang_part") return `<label>${data.week_db[w]["bunyang_date"]} | ${data.week_db[w]["bunyang_in"]}</label>`;
                else if (ww === "bunyang_info") return `<div><img src="${data.week_db[w]["bunyang_img"]}"></div>`;
            }).join("");
            week.innerHTML += `<li onclick='htmlcode.goweek(${data.week_db[w]["bunyang_index"]})'>${html}</li>`;
        }
    },
    

 // 추천분양정보
    mdchoice: function(data) {
    var md = document.getElementById("md");
    var html = data.md_db.map(function(item) {
        return `<li onclick="md_choice('${item[3]}')">
                    <div><img src="${item[0]}"></div>
                    <span>${item[1]}</span>
                    <div>${item[2]}</div>
                </li>`;
    }).join("");
    md.innerHTML = html;
},
    goweek: function(index) {
        location.href = "./week_tails.jsp?index=" + index;
    }
};
function md_choice(url) {
    location.href = url;
}
var data = {
    "md_db": [
        ["./md_room/md_1.jpg", "도심속에코 라이프입지<br>‘군산 레이크시티 아이파크’", "레이크 라이프 누릴 수 있는 프리미엄 조경에<br>입주민 라이프스타일 맞춤형 평면 설계까지", "https://www.r114.com/?_c=lots&_m=lotsnews&_a=newsdetail&bno=70&kind=0&search_keyword=&search_writer=&search_addr1=&search_addr2=&search_addr3=&sort=1&sort2=down&page=1&num=14428"],
        ["./md_room/md_2.jpg", "청주 가경 아이파크 6단지 <br> 합리적인 분양가!", "브랜드 시티의 중심 <br> 중대형 중심의 공간 특화!", "https://www.r114.com/?_c=lots&_m=lotsnews&_a=newsdetail&bno=70&kind=0&search_keyword=&search_writer=&search_addr1=&search_addr2=&search_addr3=&sort=1&sort2=down&page=1&num=14430"],
        ["./md_room/md_3.jpg", "풍부한 중심생활 인프라<br> '보문 센트럴 아이파크'", "보문역 초역세권<br>성북천의 쾌적한 힐링 라이프", "https://www.r114.com/?_c=lots&_m=lotsnews&_a=newsdetail&bno=70&kind=0&search_keyword=&search_writer=&search_addr1=&search_addr2=&search_addr3=&sort=1&sort2=down&page=1&num=14426"],
        ["./md_room/md_4.jpg", "서산 첫 아이파크<br>‘서산 센트럴 아이파크’", "도보로 누리는 안심 통학권<br>최고 29층, 서산의 랜드마크", "https://www.r114.com/?_c=lots&_m=lotsnews&_a=newsdetail&bno=70&kind=0&search_keyword=&search_writer=&search_addr1=&search_addr2=&search_addr3=&sort=1&sort2=down&page=1&num=14429"]
    ]
};




	


function login() {
    location.href = "./login.jsp";
}

function join() {
    location.href = "./member_join.jsp";
}

function eclick(){
	location.href = "./index.jsp";
}