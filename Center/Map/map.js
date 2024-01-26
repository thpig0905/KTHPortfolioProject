var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
// 각각 버튼에 이벤트 추가
btn1.addEventListener("click", changeMap1);
btn2.addEventListener("click", changeMap2);
btn3.addEventListener("click", changeMap3);


var map;
// 지도 출력
function initMap(){
    // 위치데이터 경도, 위도로 구성된 jso 파일은 항상 이런식으로 구성되어있다.
    var ll = {lat: 37.500624, lng: 127.036268};
    map = new google.maps.Map(
        document.getElementById("map"),
        {zoom: 17, center: ll}
    );
    new google.maps.Marker(
        {position: ll,
            map: map,
            label: "현재 위치"}
    );
}
initMap(); // 맵 생성

// 지도의 중심을 변경하는 작업
function changeMap1(){
    var ll = {lat:35.661625, lng: 125.239803};
    map.panTo(ll);
    map.setZoom(16);
}
// 새로운 지도를 여는 작업 -> 마커 지워짐
function changeMap2(){
    var ll = {lat:-40.339098, lng: 175.609729};
    map = new google.maps.Map(
        document.getElementById("map"),
        {zoom:17, center: ll}
    );
}
// 거리뷰를 새창으로 보여주는 작업
function changeMap3(){
    window.open('pano.html','',width=300,height=300);
}