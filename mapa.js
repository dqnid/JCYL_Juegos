var map = L.map('map').setView([41.7544, -4.7819], 8);
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

var info = L.control();

info.onAdd = function(map){
    this._div = L.DomUtil.create('div','info');
    this.update();
    return this._div;
};

info.update = function(props){
    this._div.innerHTML = '<h4>Población total:</h4>'+ (props ? '<b>' + props.POB_TOTAL : 'Pasa el puntero por una provincia');
};

info.addTo(map);

function getColor(d){
    return  d > 500 ? '#2510a3':
            d > 400 ? '#0000ff':
            d > 300 ? '#673dff':
            d > 200 ? '#926Sff':
            d > 150 ? '#b38bff':
            d > 100 ? '#e8d8ff':
            d > 0 ? '#ff0000':
                    '#ffffff';
}

function style(feature){
    return{
        fillColor: getColor(feature.properties.POB_TOTAL),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}



function highlightFeature(e){
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    info.update(layer.feature.properties);
}

var cylprovinciasJS;

function resetHighlight(e){
    cylprovinciasJS.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e){
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature,layer){
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

cylprovinciasJS = L.geoJson(cyl_provincias_con_poblacion,{
    onEachFeature: onEachFeature,
    
    style: style   
}).addTo(map);

map.attributionControl.addAttribution('Datos abiertos JCYL &copy; <a href="https://datosabiertos.jcyl.es/">JCYL</a>');


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


////////AGREGAR BOTONES
var botonesControl = L.control({position: 'topright'}); // creación del contenedor de botones
botonesControl.onAdd = function() {                     // creación de los botones
    var botones = L.DomUtil.create('div', 'class-css-botones');
    botones.innerHTML = `<button id="arboles"  class="btn btn-primary"><img src="https://cdn-icons-png.flaticon.com/512/740/740934.png" height ="30" width="30" /></button>`;
    
    return botones;
};
botonesControl.addTo(map);   // adición del contenedor dentro del mapa

document.getElementById('arboles').addEventListener('click', function() {
    
    if(!arboles){
        arbolesJS.addTo(map);
        arboles=true;
    }else{
        arbolesJS.remove(map);
        arboles=false;
    }
        
});

