var map = L.map('map').setView([41.7544, -4.7819], 8);
//var markers = [];

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    minZoom: 7,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
const basemaps = {
    StreetView: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, minZoom: 7, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
    Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?',   {maxZoom: 19, minZoom: 7, layers: 'TOPO-WMS'}),
    Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {maxZoom: 19, minZoom: 7, layers: 'OSM-Overlay-WMS'})
};
L.control.layers(basemaps).addTo(map);

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

info.update = function (props) {
    this._div.innerHTML = '<h4>Provincia: </h4>' + (props ? '<b>' + props.NAMEUNIT : '') + '<h4>Población total (01/01/2021):</h4>' + (props ? '<b>' + props.POB_TOTAL : '') + '<b>' + '<h4>Juego tradicional predominante:</h4>' +
    (props ? '<b>' + props.JUEGO_TRAD : 'Pasa el puntero por una provincia');
};

info.addTo(map);

function getColor(d){
    return  d > 500 ? '#D80032':
            d > 400 ? '#EF233C':
            d > 300 ? '#8D99AE':
            d > 200 ? '#EDF2F4':
            d > 150 ? '#2B2D42':
            d > 100 ? '#ffd676':
            d > 0 ? '#ff84ad':
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

map.attributionControl.addAttribution('Datos abiertos JCYL &copy; <a href="https://datosabiertos.jcyl.es/" target="_blank">JCYL&nbsp;&nbsp;</a>');

var botonesControl_cyl_provincias = L.control({position: 'topright'}); // creación del contenedor de botones
botonesControl_cyl_provincias.onAdd = function() {                     // creación de los botones
    var botones_cyl_provincias = L.DomUtil.create('div', 'class-css-botones');
    botones_cyl_provincias.innerHTML = `<button id="cyl_provincias"  class="btn btn-primary"><img src="./Datos/cyl_recintos.png" title="Límites provinciales: recintos" alt = "Límites provinciales: recintos" height ="30" width="30" /></button>`;
    
    return botones_cyl_provincias;
};
botonesControl_cyl_provincias.addTo(map);   // adición del contenedor dentro del mapa

document.getElementById('cyl_provincias').addEventListener('click', function() {
    
    if(!cyl_juegos){
        cylprovinciasJS.addTo(map);
        cyl_juegos=true;
    }else{
        cylprovinciasJS.remove(map);
        cyl_juegos=false;
    }
        
});
////////////////////////////CAPA ARBOLES
function popup_arboles(feature, layer) {
    const p = feature.properties
    p.title = p.paraje || p.equip_b_no || p.nombre || p.equip_b_nombre || p.t_municipa || p.NAMEUNIT || p.POB_TOTAL || p.equip_b_ac || p.equip_b_acceso_modo || p.provincia//create new property 'title'
    if(feature.properties && feature.properties.especie){
        let gmapsRef = "https://www.google.com/maps/@" + feature.geometry.coordinates[0].reverse() + ",15z";
        layer.bindPopup((feature.properties.nombre ? "<strong>Nombre: </strong>" + feature.properties.nombre + "<br>" : '') +
            (feature.properties.especie ? "<strong>Especie: </strong>" + feature.properties.especie + "<br>" : '') +
            (feature.properties.paraje ? "<strong>Paraje: </strong>" + feature.properties.paraje + "<br>" : '') +
            (feature.properties.provincia ? "<strong>Provincia: </strong>" + feature.properties.provincia + "<br>" : '') +
            (feature.properties.t_municipa ? "<strong>Término municipal: </strong>" + feature.properties.t_municipa + "<br>" : '') +
            (feature.properties.alt ? "<strong>Altura: </strong>" + feature.properties.alt + " metros"+ "<br>" : '') +
            (feature.properties.dn ? "<strong>Densidad: </strong>" + feature.properties.dn + " kg/m<sup>3</sup>"+ "<br>" : '') +

            "<a href='" + gmapsRef + "' target='_blank'>Abrir en Google Maps</a>");
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
var botonesControl = L.control({ position: 'topright' }); // creación del contenedor de botones
botonesControl.onAdd = function () {                     // creación de los botones
    var botones = L.DomUtil.create('div', 'class-css-botones');
    botones.innerHTML = `<button id="arboles"  class="btn btn-primary"><img src="./Datos/arbol.png" title="Árboles singulares" alt = "Árboles singulares" height ="30" width="30" /></button>`;
    
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

function popup_miradores(feature, layer) {
    const p = feature.properties;
    p.title = p.paraje || p.equip_b_no || p.nombre || p.equip_b_nombre || p.t_municipa || p.NAMEUNIT || p.POB_TOTAL || p.equip_b_ac || p.equip_b_acceso_modo || p.provincia//create new property 'title';
    if (feature.properties) {
        let gmapsRef = "https://www.google.com/maps/@" + feature.geometry.coordinates[1] + "," + feature.geometry.coordinates[0] + ",15z";
        layer.bindPopup((feature.properties.equip_b_no ? "<strong>Nombre: </strong>" + feature.properties.equip_b_no + "<br>" : '') +
            (feature.properties.equip_b_ac ? "<strong>Acceso: </strong>" + feature.properties.equip_b_ac + "<br>" : '') +
            (feature.properties.mirador_en ? "<strong>Mirador en: </strong>" + feature.properties.mirador_en + "<br>" : '') +
            (feature.properties.equip_a_ob ? "<strong>Característica: </strong>" + feature.properties.equip_a_ob + "<br>" : '') +

            "<a href='" + gmapsRef + "' target='_blank'>Abrir en Google Maps</a>");
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

var botonesControl_miradores = L.control({ position: 'topright' }); // creación del contenedor de botones
botonesControl_miradores.onAdd = function () {                     // creación de los botones
    var botones_miradores = L.DomUtil.create('div', 'class-css-botones');
    botones_miradores.innerHTML = `<button id="miradores"  class="btn btn-primary"><img src="./Datos/prismaticos.png" title="Miradores en espacios naturales" alt="Miradores en espacios naturales" height ="30" width="30" /></button>`;
    
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
    shadowUrl: "./Datos/coordenadas.png",
    shadowSize: [25, 25],
    shadowAnchor: [25, 25]
});

var marcador_coord = L.marker([41.10836, -3.191558],{
    icon: myIcon_coords,
    draggable: true,
    autoPan: true
}).addTo(map);

function addToTextBox(lt,ln){
    document.getElementById('lat').innerHTML = lt;
    document.getElementById('lng').innerHTML = ln;
}

// adds listener for drag end event
marcador_coord.on('drag', function(event){
    let marcador_coord = event.target;
    let location = marcador_coord.getLatLng();
    let lat = location.lat;
    let lon = location.lng;
    let gmapsRef = "https://www.google.com/maps/@" + lat + "," + lon + ",15z";
    addToTextBox(lat,lon);
    marcador_coord.bindPopup("<a href='"+gmapsRef+"' target='_blank'>Abrir en maps</a><b>"+ "  ( " + lat.toFixed(5)+ ", " + lon.toFixed(5) + ")" +"</b>").openPopup();
});
/////////////////AGREGAR ZONAS RECREATIVAS

function popup_zona_recreativa(feature, layer) {
    const p = feature.properties
    p.title = p.paraje || p.equip_b_no || p.nombre || p.equip_b_nombre || p.t_municipa || p.NAMEUNIT || p.POB_TOTAL || p.equip_b_ac || p.equip_b_acceso_modo || p.provincia//create new property 'title'
    if (feature.properties && feature.properties.equip_b_nombre) {
        let gmapsRef = "https://www.google.com/maps/@" + feature.geometry.coordinates[1] + "," + feature.geometry.coordinates[0] + ",15z";

        layer.bindPopup((feature.properties.equip_b_nombre ? "<strong>Nombre </strong>" + feature.properties.equip_b_nombre + "<br>" : '') +
            (feature.properties.equip_b_acceso_modo ? "<strong>Acceso: </strong>" + feature.properties.equip_b_acceso_modo + "<br>" : '') +

            "<a href='" + gmapsRef + "' target='_blank'>Abrir en Google Maps</a>");
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

var botonesControl_zona_recreativa = L.control({ position: 'topright' }); // creación del contenedor de botones
botonesControl_zona_recreativa.onAdd = function () {                     // creación de los botones
    var botones_zona_recreativa = L.DomUtil.create('div', 'class-css-botones');
    botones_zona_recreativa.innerHTML = `<button id="zona_recreativa"  class="btn btn-primary"><img src="./Datos/parque2.png" title="Zonas recreativas en espacios naturales" alt="Zonas recreativas en espacios naturales" height ="30" width="30" /></button>`;
    
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
    title: "Leyenda",
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

/*
 * Funciones interactivas
 */
function delTrees(){
    map.removeLayer(arbolesJS);
//arbolesJS.addTo(map);
}

function upDateMapConfig(){
    var trees = document.getElementById("trees").checked;
    var places = document.getElementById("places").checked;
    var regions = document.getElementById("regions").checked;

    if (trees === true){
        arbolesJS.addTo(map);
    }else{
        map.removeLayer(arbolesJS);    
    }

    if (regions === true){
        cylprovinciasJS.addTo(map);
    }else{
        map.removeLayer(cylprovinciasJS);    
    }
}

function centerMap(){
    map.setView([41.66585549600211, -4.460670126660962], 8);    
}

////////AGREGAR BOTON CENTRAR
var botonesControl = L.control({ position: 'bottomleft' }); // creación del contenedor de botones
botonesControl.onAdd = function () {                     // creación de los botones
    var botones = L.DomUtil.create('div', 'class-css-botones');
    botones.innerHTML = `<button id="centrar"  class="btn btn-primary"><img src="./Img/RANA/centrar.png" title="Centrar" alt = "Centrar" height ="30" width="30" /></button>`;
    
    return botones;
};
botonesControl.addTo(map);   // adición del contenedor dentro del mapa

document.getElementById('centrar').addEventListener('click', function centerMap() {
    
    map.setView([41.7544, -4.7819], 8);    
        
});
