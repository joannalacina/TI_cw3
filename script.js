var lat=41.52;
var lng=-81.48;
var map = L.map('map').setView([lat, lng], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom:20
}).addTo(map);

var markers=L.layerGroup();
var popup=L.popup();
var popups=L.layerGroup();
var znaczniki=[];


var pkt1 = 0;
var pkt2 = 0;
var odl = 0;


//function marker(e){
  //markers.clearLayers()};
    
//function popup(e){
  // popups.clearLayers()};
    
  $("#dodajZn").click(function(){
      znaczniki=[];
      znaczniki=0});
  $("#usunZn").click(function(){
      markers.clearLayers()});
  $("#dodajNot").click(function(){
      znaczniki=[];
      znaczniki=1});
  $('#bufor').click(function() {
      znaczniki=[];
      znaczniki=2});
   $('#odl').click(function() {
      znaczniki=[];
      znaczniki=3});

function onClick(e){
if (znaczniki==0) {
    L.marker(e.latlng).addTo(markers);
    markers.addTo(map)}

 if (znaczniki==1) {
    var notka = prompt("Wpisz treść notatki: ");
    L.popup().setLatLng(e.latlng).setContent(notka).addTo(map);}
 
 if (znaczniki==2) {
    //map.removeLayer(mapLayer);
    var promien = prompt("Wpisz promień strefy buforowej: ");
    if (promien != null) {
    var circle = L.circle([e.latlng.lat, e.latlng.lng], promien, {
        color: 'blue',
        fillColor: '#C72',
        fillOpacity: 0.2
    }).addTo(map);}}
    
  if (znaczniki==3) {

    pkt2 = e.latlng;
    odl = pkt1.distanceTo(kon);
    L.popup.setLatLng(e.latlng)
    L.popup.setContent("Zmierzona odległość to: " + odl + " m").openOn(map); 
     
  }
     
};

map.on('click',onClick);

var map2 = L.map('map2').setView([41.87, -87.72], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom:20
}).addTo(map2);


$("#map2").hide();

$("#dodajWMS").click(function(){
    $("#map2").show();
    $("#map").hide();
  });
  
$("#zasieg").click(function(){
    $("#map").show();
    $("#map2").hide();
  });


//$("#odl").hide();



