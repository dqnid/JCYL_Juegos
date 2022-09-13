var map = L.map('map').setView([41.96025655115759,-2.392389852116968], 8);
var markers = [];

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
const basemaps = {
    StreetView: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
    Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?',   {layers: 'TOPO-WMS'}),
    Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {layers: 'OSM-Overlay-WMS'})
};
L.control.layers(basemaps).addTo(map);

function showMarkers(){
    let markers_size = markers.lenght;
    for (let i=markers;i<markers_size;i++)
    {
        L.marker([markers[i].lat,markers[i].lng]).addTo(map); 
    }
}

for (let key in marcadores){
L.marker([marcadores[key].lat,marcadores[key].lng]).addTo(map); 
}