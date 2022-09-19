var map = L.map('map').setView([41.7544, -4.7819], 8);
//var markers = [];

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

//function showMarkers(){
    //let markers_size = markers.lenght;
    //for (let i=markers;i<markers_size;i++)
    //{
      //  L.marker([markers[i].lat,markers[i].lng]).addTo(map); 
    //}
//}

//for (let key in marcadores){
//L.marker([marcadores[key].lat,marcadores[key].lng]).addTo(map); 
//}


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
    this._div.innerHTML = '<h4>Población total (2019):</h4>'+ (props ? '<b>' + props.POB_TOTAL : '') + '<b>' +'<h4>Juego tradicional predominante:</h4>'+ 
    (props ? '<b>' + props.JUEGO_TRAD : 'Pasa el puntero por una provincia');
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

cylprovinciasJS = L.geoJson(cyl_juegos,{
    onEachFeature: onEachFeature,
    
    style: style   
}).addTo(map);

map.attributionControl.addAttribution('Datos abiertos JCYL &copy; <a href="https://datosabiertos.jcyl.es/">JCYL</a>');


////////////////////////////CAPA ARBOLES
function popup_arboles(feature,layer){
    const p = feature.properties
    p.title = p.paraje|| p.equip_b_no || p.nombre || p.equip_b_nombre //create new property 'title'
    if(feature.properties && feature.properties.especie){
       layer.bindPopup("<strong>Nombre de la especie: </strong>"+ feature.properties.especie);
    }
}

var myIcon = L.icon({
    iconUrl: './Datos/arbol.png',
    iconSize: [20, 30],
    iconAnchor: [10, 30],
    popupAnchor: [0, -30],
    shadowUrl: './Datos/arbol.png',
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
/////////////////AGREGAR MIRADORES

function popup_miradores(feature,layer){
    const p = feature.properties
    p.title = p.paraje|| p.equip_b_no || p.nombre || p.equip_b_nombre //create new property 'title'
    if(feature.properties && feature.properties.equip_b_no){
       layer.bindPopup("<strong>Nombre: </strong>"+ feature.properties.equip_b_no);
    }
}

var myIcon_miradores = L.icon({
    iconUrl: './Datos/prismaticos.png',
    iconSize: [30, 30],
    iconAnchor: [30, 30],
    popupAnchor: [-15, -25],
    shadowUrl: './Datos/prismaticos.png',
    shadowSize: [30, 30],
    shadowAnchor: [30, 30]
});

const marker_miradores = {
    icon: myIcon_miradores
};
    


var miradoresJS = L.geoJSON(miradores, {
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, marker_miradores);
    },
    onEachFeature: popup_miradores
}).addTo(map);

var botonesControl_miradores = L.control({position: 'topright'}); // creación del contenedor de botones
botonesControl_miradores.onAdd = function() {                     // creación de los botones
    var botones_miradores = L.DomUtil.create('div', 'class-css-botones');
    botones_miradores.innerHTML = `<button id="miradores"  class="btn btn-primary"><img src="./Datos/prismaticos.png" height ="30" width="30" /></button>`;
    
    return botones_miradores;
};
botonesControl_miradores.addTo(map);   // adición del contenedor dentro del mapa

document.getElementById('miradores').addEventListener('click', function() {
    
    if(!miradores){
        miradoresJS.addTo(map);
        miradores=true;
    }else{
        miradoresJS.remove(map);
        miradores=false;
    }
        
});





///////////AGREGAR MARCADOR DRAGGED que muestra coordenadas geograficas


var myIcon_coords = L.icon({
    iconUrl: './Datos/coordenadas.png',
    iconSize: [24, 24],
    iconAnchor: [24, 24],
    popupAnchor: [-12, -22],
    //shadowUrl: './Datos/coordinates-g7ce5759db_1280.svg',
    shadowSize: [25, 25],
    shadowAnchor: [25, 25]
});

var marcador_juego = L.marker([42.508552, -7.805786],{
    icon: myIcon_coords,
    draggable: true
}).addTo(map);

function addToTextBox(lt,ln){
    document.getElementById('lat').innerHTML = lt;
    document.getElementById('lng').innerHTML = ln;
}

// adds listener for drag end event
marcador_juego.on('dragend', function(event){
    let marcador_juego = event.target;
    let location = marcador_juego.getLatLng();
    let lat = location.lat;
    let lon = location.lng;
    addToTextBox(lat,lon);
    marcador_juego.bindPopup("<b>"+marcador_juego.getLatLng()+"</b>").openPopup();
});
/////////////////AGREGAR ZONAS RECREATIVAS

function popup_zona_recreativa(feature,layer){
    const p = feature.properties
    p.title = p.paraje|| p.equip_b_no || p.nombre || p.equip_b_nombre //create new property 'title'
    if(feature.properties && feature.properties.equip_b_nombre){
       layer.bindPopup("<strong>Nombre: </strong>"+ feature.properties.equip_b_nombre);
    }
}

var myIcon_zona_recreativa = L.icon({
    iconUrl: './Datos/parque2.png',
    iconSize: [20, 20],
    iconAnchor: [20, 20],
    popupAnchor: [-10, -25],
    shadowUrl: './Datos/parque2.png',
    shadowSize: [20, 20],
    shadowAnchor: [20, 20]
});

const marker_zona_recreativa = {
    icon: myIcon_zona_recreativa
};
    


var zonaRecreativaJS = L.geoJSON(markers2, {
    pointToLayer: function(feature, latlng) {
        return L.marker(latlng, marker_zona_recreativa);
    },
    onEachFeature: popup_zona_recreativa
}).addTo(map);

var botonesControl_zona_recreativa = L.control({position: 'topright'}); // creación del contenedor de botones
botonesControl_zona_recreativa.onAdd = function() {                     // creación de los botones
    var botones_zona_recreativa = L.DomUtil.create('div', 'class-css-botones');
    botones_zona_recreativa.innerHTML = `<button id="zona_recreativa"  class="btn btn-primary"><img src="./Datos/parque2.png" height ="30" width="30" /></button>`;
    
    return botones_zona_recreativa;
};
botonesControl_zona_recreativa.addTo(map);   // adición del contenedor dentro del mapa

document.getElementById('zona_recreativa').addEventListener('click', function() {
    
    if(!markers2){
        zonaRecreativaJS.addTo(map);
        markers2=true;
    }else{
        zonaRecreativaJS.remove(map);
        markers2=false;
    }
        
});
/////////////////AGREGAR LEYENDA
const legend = L.control.Legend({
    position: "bottomright",
    collapsed: false,
    symbolWidth: 24,
    opacity: 1,
    column: 1,
    legends: [{
        label: "Árboles singulares",
        type: "image",
        url: "./Datos/arbol.png"
    },{
        label: "Miradores en espacios naturales",
        type: "image",
        url: "./Datos/prismaticos.png"
    },{
        label: "Zonas recreativas en espacios naturales",
        type: "image",
        url: "./Datos/parque2.png"

    },{
        label: "Localizador de coordenadas geográficas",
        type: "image",
        url: "./Datos/coordenadas.png"
    }]
}).addTo(map);



/////////////////////AGREGAR BUSCADOR


var searchControl_arboles = new L.Control.Search({
    layer: L.layerGroup([arbolesJS,miradoresJS,zonaRecreativaJS]),
    circleLocation: true
});

searchControl_arboles.on('search_locationfound', function(e) {
    e.layer.setStyle({fillColor: '#4016ff', color: '#32d1ff'});
})

map.addControl(searchControl_arboles);

//var searchLayer = L.layerGroup([arbolesJS]).addTo(map);
//... adding data in searchLayer ...
//map.addControl( new L.Control.Search({layer: searchLayer}) );
//searchLayer is a L.LayerGroup contains searched markers


