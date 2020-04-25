var mapOfBR = L.map('mapid3').setView([30.473631, -91.143306],10);
var neighborhood ='https://opendata.arcgis.com/datasets/7c5e82ef83834de2ad2478efc86744ae_0.geojson'
jQuery.getJSON(neighborhood, function (data) {
var neighborhoodStyle = function(feature) {
var populationCount = feature.properties.POPULATION
var popColorFill = '#999c08'
if (populationCount < 7600) {popColorFill = '#f2f542'}
  return{
  color:'#7842f5',
  fillColor: popColorFill,
  weight: 4,
  fillOpacity: 0.6
}

}

var styledNeighborhoods= {
  style:neighborhoodStyle,
onEachFeature: popUpInfo
}

L.geoJSON(data, styledNeighborhoods).addTo(mapOfBR)
})

var popUpInfo = function(feature, layer){
  var name = feature.properties.NEIGHBORHOOD
  var popCount = feature.properties.POPULATION
     layer.bindPopup('This neighborhood is called ' + name +
    '<br>its population is: ' + popCount + '<br> Average neighborhood population is: 7600')
populationMapBR.addLayer(layer)

}
var dataList = {
'Population of East Baton Rouge Parish': populationMapBR
}
var lightBasemap= L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png').addTo(mapOfBR)
var darkBasemap= L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(mapOfBR)

var baseMapList= {
  'Light Map': lightBasemap,
  'Dark Map': darkBasemap

}

var populationMapBR= L.layerGroup().addTo(mapOfBR)

L.control.layers(baseMapList, dataList).addTo(mapOfBR)
