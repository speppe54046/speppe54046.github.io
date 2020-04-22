var mapOfTurkmenistan = L.map('mapid').setView([37.911856, 58.317189], 13)
L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png').addTo(mapOfTurkmenistan)
var ferrisWheel = L.marker([37.898640, 58.299318]).addTo(mapOfTurkmenistan)
var triangleInTurkmenistan = L.polygon([
  [37.926737, 58.349682],
  [37.928988, 58.348931],
  [37.929403, 58.350948],
  [37.927084, 58.351753]
]).addTo(mapOfTurkmenistan)

var polyline = L.polyline([
  [37.895853, 58.299790],
  [37.895868, 58.334847],
  [37.916473, 58.346167],
  [37.919172, 58.352361],
  [37.925792, 58.349147]
]).addTo(mapOfTurkmenistan);
var circle = L.circle([37.929364, 58.333520], {
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: 0.7,
    radius: 200
}).addTo(mapOfTurkmenistan);
circle.bindPopup("Yyldyz Hotel")
triangleInTurkmenistan.bindPopup("Ashgabat Stadium")
ferrisWheel.bindPopup("Alem Center")
