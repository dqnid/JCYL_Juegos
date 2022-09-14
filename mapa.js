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
//////////////////////////CAPA LIMITES PROVINCIAS
//configurar popup  
function popup(feature,layer){
    if(feature.properties && feature.properties.NAMEUNIT){
       layer.bindPopup("<strong>Provincia: </strong>"+ feature.properties.NAMEUNIT);
    }
}
//agregar capa en formato geojson

L.geoJson(cylprovincias).addTo(map);

var cylprovinciasJS = L.geoJson(cylprovincias,{
    onEachFeature: popup
}).addTo(map);


////////////////////////////CAPA ARBOLES
function popup_arboles(feature,layer){
    if(feature.properties && feature.properties.especie){
       layer.bindPopup("<strong>Nombre de la especie: </strong>"+ feature.properties.especie);
    }
}

var myIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/740/740934.png',
    iconSize: [20, 30],
    iconAnchor: [10, 30],
    popupAnchor: [-3, -30],
    shadowUrl: 'https://cdn-icons-png.flaticon.com/512/740/740934.png',
    shadowSize: [20, 30],
    shadowAnchor: [10, 30]
});

const marker_arbol = {
    icon: myIcon
};

const geojsonMarkerOptions = {
    // Stroke
    color: 'black',
    weight: 2,
    opacity: 1,
    // Fill
    fillColor: 'red',
    fillOpacity: 1,
    // Radius
    radius: 30,
};


var arbolesJS = L.geoJSON(arboles, {
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, marker_arbol);
    },
    onEachFeature: popup_arboles
}).addTo(map);




