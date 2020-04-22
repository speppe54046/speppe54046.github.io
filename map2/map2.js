var mapOfPA = L.map('mapid2').setView([40.915608, -77.591773],7.4);
L.tileLayer('https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png').addTo(mapOfPA)
L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
  layers: 'nexrad-n0r-900913',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA, Iowa State University'
}).addTo(mapOfPA)
L.esri.dynamicMapLayer({
  url: 'https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer'
}).addTo(mapOfPA)

L.tileLayer.wms('https://mesonet.agron.iastate.edu/cgi-bin/wms/us/wwa.cgi', {
  layers: 'warnings_c',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA, Iowa State University'
}).addTo(mapOfPA)
