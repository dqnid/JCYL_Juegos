(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var map = L.map('map').setView([41.96025655115759,-2.392389852116968], 8);
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

const json = require("./zona_rec.json");
for (let key in json){
    console.log(json[key].nombre);
    L.marker([json[key].lat,json[key].lng]).addTo(map);
}
},{"./zona_rec.json":2}],2:[function(require,module,exports){
module.exports={
    "72319": {
        "lat": "41.96025655115759",
        "lng": "-2.392389852116968",
        "id": "72319",
        "nombre": "\u00c1rea Recreativa de La Fuentona",
        "superficie": "0",
        "web": "",
        "acceso": "A las afueras de Torrearevalo, en la pista al Acebal"
    },
    "72416": {
        "lat": "41.485067013683924",
        "lng": "-6.094559365946493",
        "id": "72416",
        "nombre": "Presa de Valcuevo",
        "superficie": "8425",
        "web": "",
        "acceso": "Se accede por un camino que parte desde la ctra. ZA 324"
    },
    "72417": {
        "lat": "41.402061298634734",
        "lng": "-6.205952171710027",
        "id": "72417",
        "nombre": "El Piconico, Tudera",
        "superficie": "756",
        "web": "",
        "acceso": "Se accede por un camino que parte desde la ctra. ZA-v-2210"
    },
    "72418": {
        "lat": "41.36365934929385",
        "lng": "-6.328574361900015",
        "id": "72418",
        "nombre": "Parque Infantil las Llagonicas",
        "superficie": "457",
        "web": "",
        "acceso": ""
    },
    "72419": {
        "lat": "41.438121897117405",
        "lng": "-6.28729686832892",
        "id": "72419",
        "nombre": "Ermita Nuestra Se\u00f1ora del Castillo",
        "superficie": "5681",
        "web": "",
        "acceso": "Ctra ZA-L-2218"
    },
    "72420": {
        "lat": "41.59473777850536",
        "lng": "-6.195327241909775",
        "id": "72420",
        "nombre": "Presa de la Ribera (Castro de Alca\u00f1ices)",
        "superficie": "1954",
        "web": "",
        "acceso": ""
    },
    "72421": {
        "lat": "41.40007801982897",
        "lng": "-6.228205553573712",
        "id": "72421",
        "nombre": "Valle los Pozos",
        "superficie": "3078",
        "web": "",
        "acceso": "Crta ZA 304"
    },
    "72422": {
        "lat": "41.464973858016826",
        "lng": "-6.176028283745432",
        "id": "72422",
        "nombre": "Vallelcampo",
        "superficie": "500",
        "web": "",
        "acceso": "Crta ZA-p-2224, junto a casco urbano"
    },
    "72423": {
        "lat": "41.43905528493807",
        "lng": "-6.211730358499801",
        "id": "72423",
        "nombre": "Las Escuelas - Arga\u00f1\u00edn",
        "superficie": "433",
        "web": "",
        "acceso": "Crta ZA-p-2224, junto a casco urbano"
    },
    "72424": {
        "lat": "41.45121819632301",
        "lng": "-6.256379606602613",
        "id": "72424",
        "nombre": "Area Molino Pach\u00f3n",
        "superficie": "0",
        "web": "",
        "acceso": "Crta ZA-p-2222, junto a casco urbano"
    },
    "72425": {
        "lat": "41.37642605468519",
        "lng": "-6.2790443671552145",
        "id": "72425",
        "nombre": "Ermita Santa Catalina",
        "superficie": "1702",
        "web": "",
        "acceso": "Crta ZA-L-2217, junto a casco urbano Palazuelo."
    },
    "72426": {
        "lat": "41.37275427985558",
        "lng": "-6.380374760314627",
        "id": "72426",
        "nombre": "Las Escuelas Pinilla de Fermoselle",
        "superficie": "3166",
        "web": "",
        "acceso": "Crta ZA-L-2215, junto a casco urbano Pinilla de Fermoselle."
    },
    "72427": {
        "lat": "41.50243089897368",
        "lng": "-6.233736521785367",
        "id": "72427",
        "nombre": "Camino de Chiviteros (Torregamones)",
        "superficie": "226",
        "web": "",
        "acceso": "Camino agr\u00edcola"
    },
    "72428": {
        "lat": "41.55266253881581",
        "lng": "-6.156208249458604",
        "id": "72428",
        "nombre": "Fuente de la Santa Villadepera",
        "superficie": "375",
        "web": "",
        "acceso": ""
    },
    "72429": {
        "lat": "41.344526921524825",
        "lng": "-6.292279363986687",
        "id": "72429",
        "nombre": "Pradera de La Noria (Formariz)",
        "superficie": "8567",
        "web": "",
        "acceso": "Crta ZA-L-2217, junto a casco urbano de Formariz."
    },
    "72430": {
        "lat": "41.48917467608273",
        "lng": "-6.134744731895765",
        "id": "72430",
        "nombre": "Corral de Concejo (Moralina)",
        "superficie": "159",
        "web": "",
        "acceso": "En el casco urbano de Moralina."
    },
    "72431": {
        "lat": "40.96906068330551",
        "lng": "-6.6769776470384326",
        "id": "72431",
        "nombre": "Merendero de Lumbrales El Colmenar",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "72432": {
        "lat": "41.15977024241268",
        "lng": "-6.626419653017891",
        "id": "72432",
        "nombre": "\u00c1rea Recreativa de Vallito Redondo",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "72433": {
        "lat": "41.2447679303279",
        "lng": "-6.596948657595678",
        "id": "72433",
        "nombre": "Playa del Rostro",
        "superficie": "0",
        "web": "",
        "acceso": "Pista asfaltada"
    },
    "72434": {
        "lat": "41.02021815596426",
        "lng": "-6.649753991889769",
        "id": "72434",
        "nombre": "Merendero Los Molinos",
        "superficie": "0",
        "web": "",
        "acceso": "Pista"
    },
    "72435": {
        "lat": "41.10693146031274",
        "lng": "-6.752324372391675",
        "id": "72435",
        "nombre": "\u00c1rea recreativa de La Barca",
        "superficie": "0",
        "web": "",
        "acceso": "Pista asfaltada"
    },
    "72436": {
        "lat": "41.177616255094385",
        "lng": "-6.512276698620933",
        "id": "72436",
        "nombre": "\u00c1rea recreativa La Pe\u00f1a",
        "superficie": "0",
        "web": "",
        "acceso": "Pista"
    },
    "72437": {
        "lat": "40.937701371815315",
        "lng": "-6.791699582943422",
        "id": "72437",
        "nombre": "Merendero Molino de La Vega",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "72438": {
        "lat": "41.02117849349914",
        "lng": "-6.638576435659432",
        "id": "72438",
        "nombre": "\u00c1rea Recreativa El Valle de Saldeana",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "72439": {
        "lat": "41.023756384881416",
        "lng": "-6.92795431463823",
        "id": "72439",
        "nombre": "Vega Terr\u00f3n",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "72440": {
        "lat": "40.81409414708386",
        "lng": "-6.81109920795055",
        "id": "72440",
        "nombre": "Merendero La Bouza",
        "superficie": "0",
        "web": "",
        "acceso": "Pista"
    },
    "72441": {
        "lat": "41.16347736940043",
        "lng": "-6.5526902556002184",
        "id": "72441",
        "nombre": "\u00c1rea recreativa de Fuentes de Masueco",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "72442": {
        "lat": "41.26297877110228",
        "lng": "-6.527622684467872",
        "id": "72442",
        "nombre": "Ermita Pere\u00f1a",
        "superficie": "0",
        "web": "",
        "acceso": "Pista asfaltada"
    },
    "72443": {
        "lat": "41.22345513199817",
        "lng": "-6.553209743184439",
        "id": "72443",
        "nombre": "\u00c1rea recreativa del Pozo de los Humos",
        "superficie": "0",
        "web": "",
        "acceso": "Pista"
    },
    "72444": {
        "lat": "41.27851132194142",
        "lng": "-6.439331397493698",
        "id": "72444",
        "nombre": "Teso de San Cristobal",
        "superficie": "0",
        "web": "",
        "acceso": "Pista asfaltada"
    },
    "72445": {
        "lat": "41.210016418948975",
        "lng": "-6.6774990468622155",
        "id": "72445",
        "nombre": "Llano de la Bodega",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "72446": {
        "lat": "41.18984340308492",
        "lng": "-6.564310763210543",
        "id": "72446",
        "nombre": "Merendero de las Uces de Masueco",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "72447": {
        "lat": "40.99789942108179",
        "lng": "-6.667072329430218",
        "id": "72447",
        "nombre": "Parque infantil Ermita del Cristo",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "72448": {
        "lat": "41.04429248489993",
        "lng": "-6.794051187080309",
        "id": "72448",
        "nombre": "El Llano",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "72449": {
        "lat": "40.96270658074863",
        "lng": "-6.785186153257951",
        "id": "72449",
        "nombre": "Merendero La Laguna",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "72450": {
        "lat": "41.10498955804015",
        "lng": "-6.72818189935655",
        "id": "72450",
        "nombre": "\u00c1rea recreativa de Vilvestre",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "72451": {
        "lat": "41.21687585670078",
        "lng": "-6.575557654481583",
        "id": "72451",
        "nombre": "\u00c1rea recreativa del Pozo de los Humos",
        "superficie": "0",
        "web": "",
        "acceso": "Pista"
    },
    "72452": {
        "lat": "40.98505289846512",
        "lng": "-6.8633873458945125",
        "id": "72452",
        "nombre": "Pozo de La Fregeneda",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "72453": {
        "lat": "41.07721248466387",
        "lng": "-6.671386608999821",
        "id": "72453",
        "nombre": "Chopera de Barruecopardo",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "72454": {
        "lat": "41.158191696405346",
        "lng": "-6.651336347693253",
        "id": "72454",
        "nombre": "\u00c1rea natural de Los Navazos",
        "superficie": "0",
        "web": "",
        "acceso": "Pista"
    },
    "72455": {
        "lat": "41.17338317270795",
        "lng": "-6.698903493184349",
        "id": "72455",
        "nombre": "Colag\u00f3n del T\u00edo Paco",
        "superficie": "0",
        "web": "",
        "acceso": "Pista"
    },
    "72456": {
        "lat": "41.0526271150667",
        "lng": "-6.753662970850786",
        "id": "72456",
        "nombre": "Merendero de Saucelle",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "72457": {
        "lat": "41.03357731996003",
        "lng": "-6.75875970218454",
        "id": "72457",
        "nombre": "Merendero de Las Janas",
        "superficie": "0",
        "web": "",
        "acceso": "Pista"
    },
    "72458": {
        "lat": "41.12959010400005",
        "lng": "-6.653310167421246",
        "id": "72458",
        "nombre": "Parque municipal de Cerezal de Pe\u00f1ahorcada",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "72459": {
        "lat": "41.12002070068547",
        "lng": "-6.663739450265395",
        "id": "72459",
        "nombre": "Teso de Cerezal de Pe\u00f1ahorcada",
        "superficie": "0",
        "web": "",
        "acceso": "Pista"
    },
    "72460": {
        "lat": "41.17414443182476",
        "lng": "-6.521264812286028",
        "id": "72460",
        "nombre": "Entorno de la ermita de La Pe\u00f1a",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "76238": {
        "lat": "40.49973545319637",
        "lng": "-6.274533541724302",
        "id": "76238",
        "nombre": "El Charco de los Mozos",
        "superficie": "1500",
        "web": "",
        "acceso": "Este \u00e1rea recreativa se encuentra junto al r\u00edo Agad\u00f3n a unos 900 m. de la poblaci\u00f3n de Monsagro y a la que se accede bajando por una pista asfaltada que sale del mismo pueblo hacia el r\u00edo."
    },
    "76239": {
        "lat": "40.470718560017204",
        "lng": "-6.071085116080891",
        "id": "76239",
        "nombre": "El Hortigal",
        "superficie": "4190",
        "web": "",
        "acceso": "Este \u00e1rea recreativa est\u00e1 situada en la segunda carretera que va a Monforte de la Sierra y a la que se accede desde la carretera que va de La Alberca a Sotoserrano."
    },
    "76240": {
        "lat": "40.53910255620244",
        "lng": "-6.240652575415616",
        "id": "76240",
        "nombre": "El Pinalejo",
        "superficie": "3760",
        "web": "",
        "acceso": "Este \u00e1rea recreativa se encuentra situada en la carretera que va desde de El Ma\u00edllo a Monsagro y Serradilla del Arroyo. A unos 6,5 km de la poblaci\u00f3n de El Ma\u00edllo."
    },
    "76241": {
        "lat": "40.4922689227969",
        "lng": "-6.310771158126171",
        "id": "76241",
        "nombre": "El Vao",
        "superficie": "8680",
        "web": "",
        "acceso": "Este \u00e1rea recreativa est\u00e1 a unos 5,5 km del pueblo de Monsagro por una pista que sale por la parte oeste del pueblo."
    },
    "76242": {
        "lat": "40.46534588991752",
        "lng": "-6.066126287595869",
        "id": "76242",
        "nombre": "Fuente de Madro\u00f1al",
        "superficie": "700",
        "web": "",
        "acceso": "Este merendero est\u00e1 situado en la carretera que va de La Alberca a Sotoserrano, a unos 7,5 km de la poblaci\u00f3n de La Alberca."
    },
    "76243": {
        "lat": "40.5213442562852",
        "lng": "-6.137815356247988",
        "id": "76243",
        "nombre": "Fuente del C\u00e1ntaro",
        "superficie": "3880",
        "web": "",
        "acceso": "Este \u00e1rea recreativa est\u00e1 ubicado a la salida de la poblaci\u00f3n de El Casarito (Nava de Francia), en la carretera SA- 201 (El Cabaco-La Alberca) ."
    },
    "76244": {
        "lat": "40.461862372825614",
        "lng": "-6.1178661580536",
        "id": "76244",
        "nombre": "Fuente del T\u00edo Chelo",
        "superficie": "40",
        "web": "",
        "acceso": "Este merendero est\u00e1 situado en la carretera que baja desde la poblaci\u00f3n de La Alberca al Valle de Las Batuecas."
    },
    "76245": {
        "lat": "40.51034936642673",
        "lng": "-6.258885894511306",
        "id": "76245",
        "nombre": "Fuente La Fr\u00eda",
        "superficie": "100",
        "web": "",
        "acceso": "Este merendero est\u00e1 situado en la carretera que desde Monsagro a la Pe\u00f1a de Francia, a 1,5 km de la poblaci\u00f3n de Monsagro."
    },
    "76246": {
        "lat": "40.48910884149254",
        "lng": "-6.0968830706585555",
        "id": "76246",
        "nombre": "Fuente Casta\u00f1o",
        "superficie": "19000",
        "web": "",
        "acceso": "Este \u00e1rea recreativa est\u00e1 situada a un 1,3 km del casco urbano de La Alberca en la carretera que va desde La Alberca a Mogarraz y Sotoserrano."
    },
    "76247": {
        "lat": "40.567574978488565",
        "lng": "-6.1337354124890275",
        "id": "76247",
        "nombre": "La Dehesa",
        "superficie": "11000",
        "web": "",
        "acceso": "Este \u00e1rea recreativa se encuentra a unos 500 m del pueblo de El Cabaco por la carretera SA-220 (a Ciudad Rodrigo)."
    },
    "76248": {
        "lat": "40.412027143330455",
        "lng": "-6.048050872254573",
        "id": "76248",
        "nombre": "La Ferrer\u00eda",
        "superficie": "11900",
        "web": "",
        "acceso": "Este merendero est\u00e1 situado en la carretera SA-225 (Sotoserrano-R\u00edomalo de Abajo (C\u00e1ceres)) a unos 4,4 km de la poblaci\u00f3n de Sotoserrano."
    },
    "76249": {
        "lat": "40.561510673993325",
        "lng": "-6.177113612273902",
        "id": "76249",
        "nombre": "La Hoya",
        "superficie": "8600",
        "web": "",
        "acceso": "Este \u00e1rea recreativa est\u00e1 situada a las afueras del pueblo de El Ma\u00edllo (a unos 500 m) en la carretera que va desde El Ma\u00edllo a La Alberca y Pe\u00f1a de Francia."
    },
    "76250": {
        "lat": "40.52240515325182",
        "lng": "-6.097219296958259",
        "id": "76250",
        "nombre": "La Legoriza",
        "superficie": "1180",
        "web": "",
        "acceso": "Este \u00e1rea recreativa est\u00e1 situada a unos 3 km de San Mart\u00edn del Casta\u00f1ar. En la carretera que va desde la poblaci\u00f3n de El Casarito (Nava de Francia) hasta la poblaci\u00f3n de San Mart\u00edn del Casta\u00f1ar."
    },
    "76251": {
        "lat": "40.53364492148804",
        "lng": "-6.114267520302417",
        "id": "76251",
        "nombre": "La Mata",
        "superficie": "13820",
        "web": "",
        "acceso": "Este \u00e1rea recreativa est\u00e1 situada dentro del casco urbano de la poblaci\u00f3n de Nava de Francia"
    },
    "76252": {
        "lat": "40.47582642158054",
        "lng": "-6.054870610827289",
        "id": "76252",
        "nombre": "La Pradera",
        "superficie": "620",
        "web": "",
        "acceso": "A este \u00e1rea recreativa se accede por una pista que sale del mirador de Madro\u00f1al (mirador que est\u00e1 situado en la carretera que va de La Alberca a Sotoserrano), una vez en esta pista a unos 350 m. coger la primera pista que sale a la izquierda, al final de"
    },
    "76253": {
        "lat": "40.48585049270089",
        "lng": "-6.01129294520007",
        "id": "76253",
        "nombre": "La Regajera",
        "superficie": "7170",
        "web": "",
        "acceso": "Este \u00e1rea recreativa est\u00e1 situada en la carretera que va desde la poblaci\u00f3n de Mogarraz a la poblaci\u00f3n de Miranda del Casta\u00f1ar, a unos 2 km de Miranda del Casta\u00f1ar."
    },
    "76254": {
        "lat": "40.526531496905235",
        "lng": "-6.13917110801804",
        "id": "76254",
        "nombre": "Las Eras",
        "superficie": "3825",
        "web": "",
        "acceso": "Este \u00e1rea recreativa est\u00e1 ubicada en la poblaci\u00f3n de El Casarito (Nava de Francia), en el cruce de la carretera que sube a la Pe\u00f1a de Francia desde esta poblaci\u00f3n ."
    },
    "76255": {
        "lat": "40.469469032365296",
        "lng": "-6.036698030024708",
        "id": "76255",
        "nombre": "Los Llanos",
        "superficie": "2170",
        "web": "",
        "acceso": "Este \u00e1rea recreativa est\u00e1 dentro del casco urbano de la poblaci\u00f3n de Cepeda"
    },
    "76256": {
        "lat": "40.49241576831295",
        "lng": "-6.039495352176606",
        "id": "76256",
        "nombre": "Pe\u00f1a La Cabra",
        "superficie": "1200",
        "web": "",
        "acceso": "Este merendero est\u00e1 a 1 km del pueblo de Mogarraz por la carretera que va desde esta poblaci\u00f3n a la poblaci\u00f3n de Miranda del Casta\u00f1ar."
    },
    "76257": {
        "lat": "40.50497831328503",
        "lng": "-6.046173564775957",
        "id": "76257",
        "nombre": "Pe\u00f1alvo",
        "superficie": "590",
        "web": "",
        "acceso": "Este \u00e1rea recreativa est\u00e1 ubicada en la carretera que va desde Mogarraz a la poblaci\u00f3n de Las Casas del Conde, a unos 3,8 km de la poblaci\u00f3n de Mogarraz."
    },
    "76258": {
        "lat": "40.5403940938813",
        "lng": "-6.138574226599801",
        "id": "76258",
        "nombre": "R\u00edo Gab\u00edn",
        "superficie": "10700",
        "web": "",
        "acceso": "Este \u00e1rea recreativa se encuentra a unos 3 km de el pueblo de El Cabaco. Est\u00e1 situada en la carretera SA-203, carretera que sube a la Pe\u00f1a de Francia y a la que se accede por la carretera SA-201 (El Cabaco-La Alberca)."
    },
    "76259": {
        "lat": "40.43037214391892",
        "lng": "-6.009664547773916",
        "id": "76259",
        "nombre": "Vega de Francia",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "77559": {
        "lat": "41.7932226327388",
        "lng": "-3.1432513807279814",
        "id": "77559",
        "nombre": "Fuente del Pino",
        "superficie": "3300",
        "web": "",
        "acceso": "Pista forestal dede Santa Mar\u00eda de las Hoyas"
    },
    "77560": {
        "lat": "41.73373529346615",
        "lng": "-3.048004368593758",
        "id": "77560",
        "nombre": "Fuente Engomez",
        "superficie": "3300",
        "web": "",
        "acceso": "Pista forestal de entrada al ca\u00f1\u00f3n desde El Nacedero"
    },
    "77561": {
        "lat": "41.79419663452759",
        "lng": "-3.106905169275948",
        "id": "77561",
        "nombre": "Siete Ojos",
        "superficie": "6100",
        "web": "",
        "acceso": "Carretera S0-960 PK 5"
    },
    "77562": {
        "lat": "41.84258285155601",
        "lng": "-3.154944878091823",
        "id": "77562",
        "nombre": "Agualinos",
        "superficie": "4800",
        "web": "",
        "acceso": "Camino agr\u00edcola desde Hontoria del Pinar."
    },
    "78534": {
        "lat": "42.930128781239496",
        "lng": "-4.758588883984139",
        "id": "78534",
        "nombre": "\u00c1rea Recreativa Puente Agud\u00edn",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "78535": {
        "lat": "42.86564403452054",
        "lng": "-4.538970449507906",
        "id": "78535",
        "nombre": "\u00c1rea recreativa de Ruesga",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "79049": {
        "lat": "41.72719127782904",
        "lng": "-2.8576811431198585",
        "id": "79049",
        "nombre": "Ermita de la Virgen del Valle",
        "superficie": "400",
        "web": "",
        "acceso": "Pista forestal de La Fuentona"
    },
    "79210": {
        "lat": "42.75179183655188",
        "lng": "-3.8013706352841234",
        "id": "79210",
        "nombre": "San Felices del Rudr\u00f3n",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "79211": {
        "lat": "42.75322971885703",
        "lng": "-3.802422302871855",
        "id": "79211",
        "nombre": "San Felices del Rudr\u00f3n",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "79212": {
        "lat": "42.81035000228086",
        "lng": "-3.776993343995694",
        "id": "79212",
        "nombre": "Escalada",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "79213": {
        "lat": "42.72379636276659",
        "lng": "-3.8426338553745985",
        "id": "79213",
        "nombre": "Tablado del Rudr\u00f3n",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "79214": {
        "lat": "42.690431360745166",
        "lng": "-3.8575420499041435",
        "id": "79214",
        "nombre": "Ba\u00f1uelos del Rudr\u00f3n",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "79215": {
        "lat": "42.80397637579269",
        "lng": "-3.7183445159548465",
        "id": "79215",
        "nombre": "Pesquera de Ebro",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "79216": {
        "lat": "42.74759289592476",
        "lng": "-3.8669682908058163",
        "id": "79216",
        "nombre": "Ayoluengo",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "79217": {
        "lat": "42.71780091157994",
        "lng": "-3.963796740571645",
        "id": "79217",
        "nombre": "Barrio Panizares",
        "superficie": "500",
        "web": "",
        "acceso": "A la entrada de Barrio"
    },
    "79218": {
        "lat": "42.71636184030259",
        "lng": "-3.961441903053402",
        "id": "79218",
        "nombre": "Barrio Panizares",
        "superficie": "5000",
        "web": "",
        "acceso": "En Barrio Panizares"
    },
    "79219": {
        "lat": "42.68855054207553",
        "lng": "-3.8893336686267466",
        "id": "79219",
        "nombre": "Moradillo del Castillo",
        "superficie": "500",
        "web": "",
        "acceso": "En Moradillo del Castillo"
    },
    "79220": {
        "lat": "42.687300479977644",
        "lng": "-3.877438707126434",
        "id": "79220",
        "nombre": "Santa Coloma",
        "superficie": "100",
        "web": "",
        "acceso": "En Santa Coloma"
    },
    "79221": {
        "lat": "42.655797796673454",
        "lng": "-3.8355137770410526",
        "id": "79221",
        "nombre": "Santa Coloma",
        "superficie": "300",
        "web": "",
        "acceso": "En el Camino de Santa Coloma a Terradillos"
    },
    "79222": {
        "lat": "42.74768826855824",
        "lng": "-3.8670733699404227",
        "id": "79222",
        "nombre": "Ayoluengo",
        "superficie": "300",
        "web": "",
        "acceso": "En Ayoluengo"
    },
    "79223": {
        "lat": "42.74824696291305",
        "lng": "-3.865834853351396",
        "id": "79223",
        "nombre": "Ayoluengo",
        "superficie": "400",
        "web": "",
        "acceso": "En Ayoluengo"
    },
    "79224": {
        "lat": "42.768931368749925",
        "lng": "-3.8718675969318204",
        "id": "79224",
        "nombre": "Sargentes de la Lora",
        "superficie": "100",
        "web": "",
        "acceso": "En Sargentes de la Lora"
    },
    "79225": {
        "lat": "42.76682839678432",
        "lng": "-3.8736714496319955",
        "id": "79225",
        "nombre": "Sargentes de la Lora",
        "superficie": "0",
        "web": "",
        "acceso": "En Sargentes de la Lora Track-3-junio-10"
    },
    "79226": {
        "lat": "42.72188430652486",
        "lng": "-3.801441323474838",
        "id": "79226",
        "nombre": "N-623",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "79227": {
        "lat": "42.71596563005768",
        "lng": "-3.8004614374773373",
        "id": "79227",
        "nombre": "N-623",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "79228": {
        "lat": "42.69384359437871",
        "lng": "-3.8024357383105913",
        "id": "79228",
        "nombre": "N-623",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "79229": {
        "lat": "42.684176590801655",
        "lng": "-3.7965866363549665",
        "id": "79229",
        "nombre": "N-623",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "79230": {
        "lat": "42.70520170627791",
        "lng": "-3.80210581777249",
        "id": "79230",
        "nombre": "N-623",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "79231": {
        "lat": "42.74590446326036",
        "lng": "-3.8035956472003054",
        "id": "79231",
        "nombre": "N-623",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "79232": {
        "lat": "42.75212887560865",
        "lng": "-3.8020630954242383",
        "id": "79232",
        "nombre": "San Felices del Rudr\u00f3n",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "79233": {
        "lat": "42.75281492874364",
        "lng": "-3.8018275509057773",
        "id": "79233",
        "nombre": "San Felices del Rudr\u00f3n",
        "superficie": "0",
        "web": "",
        "acceso": "Puente"
    },
    "79234": {
        "lat": "42.773985357148874",
        "lng": "-3.773167017686317",
        "id": "79234",
        "nombre": "Valdelateja",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "79235": {
        "lat": "42.78910568525268",
        "lng": "-3.7663981851454755",
        "id": "79235",
        "nombre": "Quintanilla Escalada",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "79236": {
        "lat": "42.73548047326621",
        "lng": "-3.801714120431672",
        "id": "79236",
        "nombre": "Covanera",
        "superficie": "0",
        "web": "",
        "acceso": "Calle"
    },
    "79237": {
        "lat": "42.72378591142167",
        "lng": "-3.8426387803751365",
        "id": "79237",
        "nombre": "Tablada del Rudr\u00f3n",
        "superficie": "0",
        "web": "",
        "acceso": "Pasarela"
    },
    "79238": {
        "lat": "42.72556577230397",
        "lng": "-3.8406230959298577",
        "id": "79238",
        "nombre": "Ermita Tablada",
        "superficie": "0",
        "web": "",
        "acceso": "A pie"
    },
    "79239": {
        "lat": "42.76828200557475",
        "lng": "-3.617990705569254",
        "id": "79239",
        "nombre": "Pesadas",
        "superficie": "0",
        "web": "",
        "acceso": "Calle"
    },
    "79240": {
        "lat": "42.807932004796655",
        "lng": "-3.63287837980879",
        "id": "79240",
        "nombre": "Plaza Fuente Cadalso",
        "superficie": "0",
        "web": "",
        "acceso": "Calle"
    },
    "79241": {
        "lat": "42.774970447041625",
        "lng": "-3.7686319653625784",
        "id": "79241",
        "nombre": "Valdelateja",
        "superficie": "0",
        "web": "",
        "acceso": "Calle"
    },
    "79242": {
        "lat": "42.788935908456274",
        "lng": "-3.766200463346335",
        "id": "79242",
        "nombre": "Quintanilla Escalada",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera"
    },
    "79243": {
        "lat": "42.810717698275994",
        "lng": "-3.7771713958589612",
        "id": "79243",
        "nombre": "La Isla",
        "superficie": "0",
        "web": "",
        "acceso": "Calle"
    },
    "80296": {
        "lat": "41.36704318212315",
        "lng": "-3.8961776760393536",
        "id": "80296",
        "nombre": "Carrascal Pueblo",
        "superficie": "1000",
        "web": "",
        "acceso": ""
    },
    "80297": {
        "lat": "41.366056064033465",
        "lng": "-3.9023779262730036",
        "id": "80297",
        "nombre": "Carrascal R\u00edo",
        "superficie": "2000",
        "web": "",
        "acceso": ""
    },
    "80298": {
        "lat": "41.27100608824792",
        "lng": "-3.889915916114369",
        "id": "80298",
        "nombre": "\u00c1rea recreativa de Seb\u00falcor",
        "superficie": "1000",
        "web": "",
        "acceso": ""
    },
    "80299": {
        "lat": "41.29870695583222",
        "lng": "-3.7192062968532253",
        "id": "80299",
        "nombre": "Fuente de la Salud",
        "superficie": "300",
        "web": "",
        "acceso": ""
    },
    "80300": {
        "lat": "41.29962411980102",
        "lng": "-3.7371561043262655",
        "id": "80300",
        "nombre": "El Plant\u00edo",
        "superficie": "300",
        "web": "",
        "acceso": ""
    },
    "80301": {
        "lat": "41.30102764456393",
        "lng": "-3.7327482442048217",
        "id": "80301",
        "nombre": "Los Lavaderos",
        "superficie": "200",
        "web": "",
        "acceso": ""
    },
    "80587": {
        "lat": "41.54776676971782",
        "lng": "-3.664012781498985",
        "id": "80587",
        "nombre": "La Pisadera",
        "superficie": "5000",
        "web": "",
        "acceso": "Partiendo de Montejo de la Vega, cruzamos el puente de acceso a la localidad desde la carretera de Fuentelcesped y continuamos por el camino que encontramos a la izquierda, al lado del margen del r\u00edo Riaza, durante aproximadamente un kil\u00f3metro doscientos metros."
    },
    "80588": {
        "lat": "41.491151839616336",
        "lng": "-3.5157685006061463",
        "id": "80588",
        "nombre": "La Rivilla",
        "superficie": "4000",
        "web": "",
        "acceso": "Partiendo de Maderuelo, en direcci\u00f3n al camino de los huertos, continuamos por el marquen izquierdo del embalse de Linares del Arroyo durante aproximadamente un kil\u00f3metro doscientos metros."
    },
    "80589": {
        "lat": "41.48491026032973",
        "lng": "-3.518441875928742",
        "id": "80589",
        "nombre": "Vera Cruz",
        "superficie": "7000",
        "web": "",
        "acceso": "La entrada a esta \u00e1rea recreativa est\u00e1 situada en la intersecci\u00f3n entre la carretera C-114 y el puente de acceso a Maderuelo sobre el embalse de Linares del Arroyo."
    },
    "81552": {
        "lat": "42.08092945671793",
        "lng": "-2.9809649514201078",
        "id": "81552",
        "nombre": "La Cerrrada",
        "superficie": "0",
        "web": "",
        "acceso": "Desde Neila direcci\u00f3n Vilavelallo (La Rioja)"
    },
    "81553": {
        "lat": "42.05969404857885",
        "lng": "-2.997212826974197",
        "id": "81553",
        "nombre": "La Cueva",
        "superficie": "300",
        "web": "",
        "acceso": "En casco urbano de Neila junto a la plaza municipal"
    },
    "81666": {
        "lat": "41.94616051642557",
        "lng": "-2.8386166859221373",
        "id": "81666",
        "nombre": "Bocalprado",
        "superficie": "0",
        "web": "",
        "acceso": "Por la pista forestal asfaltada que parte a mano izquierda a la entrada de Covaleda llegando desde Duruelo de la Sierra, a 10,4 km mano izquierda junto a la pista."
    },
    "81667": {
        "lat": "41.98765015363618",
        "lng": "-2.920965422295243",
        "id": "81667",
        "nombre": "Castroviejo",
        "superficie": "10000",
        "web": "",
        "acceso": "Por la carretera SO-850 de Covaleda a Duruelo de la Sierra, a la entrada de Duruelo parte una pista asfaltada se\u00f1alizada a mano derecha que tras finalizar continua por un camino a mano izquierda que tras 0,8 km conduce al me"
    },
    "81668": {
        "lat": "41.95570655427567",
        "lng": "-2.882248193034265",
        "id": "81668",
        "nombre": "Fuente de la Guarza",
        "superficie": "0",
        "web": "",
        "acceso": "Por la pista forestal asfaltada que parte a mano izquierda a la entrada de Covaleda llegando desde Duruelo de la Sierra, a 4 km a mano derecha junto a la pista."
    },
    "81669": {
        "lat": "41.99827802103364",
        "lng": "-2.9211213126581734",
        "id": "81669",
        "nombre": "Fuente el Berro",
        "superficie": "0",
        "web": "",
        "acceso": "Por la carretera SO-850 que va de Covaleda a Duruelo de la Sierra, a la entrada de Duruelo parte una pista forestal asfaltada a mano derecha que se\u00a4aliza Castroviejo, y cuando finaliza esta se coge el camino de tierra que pa"
    },
    "82498": {
        "lat": "42.11584335695093",
        "lng": "-6.7210589693956075",
        "id": "82498",
        "nombre": "La Viquiella",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "82499": {
        "lat": "42.113573042261756",
        "lng": "-6.72328118540825",
        "id": "82499",
        "nombre": "Custa Llago",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "82500": {
        "lat": "42.10760315507279",
        "lng": "-6.667306344375308",
        "id": "82500",
        "nombre": "La Riviella",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "82501": {
        "lat": "42.1287250194837",
        "lng": "-6.701385420452536",
        "id": "82501",
        "nombre": "El Folgoso",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "82502": {
        "lat": "42.132058135540575",
        "lng": "-6.691573839967623",
        "id": "82502",
        "nombre": "Vigo de Sanabria",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "82503": {
        "lat": "42.08758699049347",
        "lng": "-6.723497773823638",
        "id": "82503",
        "nombre": "R\u00edo Truchas",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "82504": {
        "lat": "42.10170397654513",
        "lng": "-6.643494290880882",
        "id": "82504",
        "nombre": "Corneira",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "82505": {
        "lat": "42.16600905047383",
        "lng": "-6.899069067123485",
        "id": "82505",
        "nombre": "Porto",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "82506": {
        "lat": "42.117899130650315",
        "lng": "-6.672844855939937",
        "id": "82506",
        "nombre": "\u00c1rea recreativa de Ballagona",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "83553": {
        "lat": "41.902447118340945",
        "lng": "-5.481210443736613",
        "id": "83553",
        "nombre": "Area recreativa Cerecinos",
        "superficie": "400",
        "web": "",
        "acceso": ""
    },
    "83554": {
        "lat": "41.86689739569577",
        "lng": "-5.499401882002693",
        "id": "83554",
        "nombre": "Tapioles",
        "superficie": "2000",
        "web": "",
        "acceso": ""
    },
    "83555": {
        "lat": "41.86180977578568",
        "lng": "-5.492687765289008",
        "id": "83555",
        "nombre": "Bancos camino de A.R. Tapioles",
        "superficie": "500",
        "web": "",
        "acceso": ""
    },
    "83556": {
        "lat": "41.77130479819626",
        "lng": "-5.499663517438747",
        "id": "83556",
        "nombre": "Area recreativa Ca\u00f1izo",
        "superficie": "600",
        "web": "",
        "acceso": ""
    },
    "83557": {
        "lat": "41.889852648613555",
        "lng": "-5.579816009381005",
        "id": "83557",
        "nombre": "Revellinos",
        "superficie": "400",
        "web": "",
        "acceso": ""
    },
    "83558": {
        "lat": "41.88198029917661",
        "lng": "-5.601254513201792",
        "id": "83558",
        "nombre": "San Agust\u00edn",
        "superficie": "30",
        "web": "",
        "acceso": ""
    },
    "83559": {
        "lat": "41.85083532823279",
        "lng": "-5.617377383752761",
        "id": "83559",
        "nombre": "Fuente El Relator Villaf\u00e1fila",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "83560": {
        "lat": "41.84186680600167",
        "lng": "-5.621217153523655",
        "id": "83560",
        "nombre": "Fuente las Pozas Villaf\u00e1fila",
        "superficie": "40",
        "web": "",
        "acceso": ""
    },
    "83561": {
        "lat": "41.808284319714446",
        "lng": "-5.642610733103253",
        "id": "83561",
        "nombre": "\u00c1rea tem\u00e1tica de las Zonas H\u00famedas",
        "superficie": "3000",
        "web": "",
        "acceso": ""
    },
    "83562": {
        "lat": "41.747499974536325",
        "lng": "-5.713584394951825",
        "id": "83562",
        "nombre": "Laguna Grande de Manganeses",
        "superficie": "1000",
        "web": "",
        "acceso": ""
    },
    "83563": {
        "lat": "41.73924851595727",
        "lng": "-5.685441467359518",
        "id": "83563",
        "nombre": "Junciel",
        "superficie": "3000",
        "web": "",
        "acceso": ""
    },
    "83564": {
        "lat": "41.8572655488456",
        "lng": "-5.551709483932538",
        "id": "83564",
        "nombre": "Fuente Salinas Revellinos",
        "superficie": "500",
        "web": "",
        "acceso": ""
    },
    "83565": {
        "lat": "41.85298732866155",
        "lng": "-5.59338149860173",
        "id": "83565",
        "nombre": "\u00c1rea de descanso",
        "superficie": "400",
        "web": "",
        "acceso": ""
    },
    "83566": {
        "lat": "41.819098447780526",
        "lng": "-5.467560060085359",
        "id": "83566",
        "nombre": "\u00c1rea Tem\u00e1tica de la Estepa Cerealista",
        "superficie": "5000",
        "web": "",
        "acceso": ""
    },
    "83567": {
        "lat": "41.802025894399705",
        "lng": "-5.648851684344396",
        "id": "83567",
        "nombre": "Villarr\u00edn de Campos",
        "superficie": "200",
        "web": "",
        "acceso": ""
    },
    "83568": {
        "lat": "41.815499213654235",
        "lng": "-5.470106850014743",
        "id": "83568",
        "nombre": "San Mart\u00edn de Valderaduey",
        "superficie": "400",
        "web": "",
        "acceso": ""
    },
    "83690": {
        "lat": "42.48976937794785",
        "lng": "-6.774359292307646",
        "id": "83690",
        "nombre": "\u00c1rea recreativa del lago de Carucedo",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "83691": {
        "lat": "42.44842690435403",
        "lng": "-6.750811038893268",
        "id": "83691",
        "nombre": "\u00c1rea recreativa de Campo de Bra\u00f1a",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "83692": {
        "lat": "42.484258462809215",
        "lng": "-6.8098518691589645",
        "id": "83692",
        "nombre": "\u00c1rea recreativa de los Zufreiros del Frade",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "84182": {
        "lat": "42.866760066222284",
        "lng": "-3.12506929805215",
        "id": "84182",
        "nombre": "Valpuesta",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "84183": {
        "lat": "42.768848597873095",
        "lng": "-3.2935492789245555",
        "id": "84183",
        "nombre": "\u00c1rea recreativa de Fr\u00edas",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "84184": {
        "lat": "42.639185487960575",
        "lng": "-3.1071303033137223",
        "id": "84184",
        "nombre": "\u00c1rea recreativa de Pancorbo",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "84185": {
        "lat": "42.77262525255137",
        "lng": "-3.1765031363536385",
        "id": "84185",
        "nombre": "\u00c1rea recreativa Fuente de los Siete Ca\u00f1os",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "84186": {
        "lat": "42.82498189987984",
        "lng": "-3.22553397123605",
        "id": "84186",
        "nombre": "Herr\u00e1n",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "84187": {
        "lat": "42.67375913813154",
        "lng": "-3.1168238591681408",
        "id": "84187",
        "nombre": "Enc\u00edo",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "84188": {
        "lat": "42.83404778965729",
        "lng": "-3.1957722173677405",
        "id": "84188",
        "nombre": "Villafr\u00eda de San Zadornil",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "84189": {
        "lat": "42.780237386450686",
        "lng": "-3.150271164281849",
        "id": "84189",
        "nombre": "El Corral de los Bueyes",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "84190": {
        "lat": "42.732896170559584",
        "lng": "-3.4126660293626743",
        "id": "84190",
        "nombre": "Paseo de la R\u00eda",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "84191": {
        "lat": "42.708488077856394",
        "lng": "-3.4179660289181943",
        "id": "84191",
        "nombre": "Ocejo",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "84192": {
        "lat": "42.76126321294758",
        "lng": "-3.3996466461159054",
        "id": "84192",
        "nombre": "Pociles",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "84193": {
        "lat": "42.793068840778304",
        "lng": "-3.386015724606749",
        "id": "84193",
        "nombre": "\u00c1rea recreativa Encinillas",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "84194": {
        "lat": "42.6466903176415",
        "lng": "-3.092195786863574",
        "id": "84194",
        "nombre": "\u00c1rea recreativa El Desfiladero",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "84195": {
        "lat": "42.74160261639123",
        "lng": "-3.4098443632165414",
        "id": "84195",
        "nombre": "\u00c1rea recreativa de Soscastillo",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "84196": {
        "lat": "42.79408807715741",
        "lng": "-3.395805782299747",
        "id": "84196",
        "nombre": "\u00c1rea recreativa del R\u00edo",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "84486": {
        "lat": "42.941961077751685",
        "lng": "-3.0012989158739414",
        "id": "84486",
        "nombre": "Fuente Santiago",
        "superficie": "20000",
        "web": "",
        "acceso": "Pista forestal y senderos. Junto a MSTAP00001."
    },
    "84487": {
        "lat": "42.93615056608667",
        "lng": "-3.077936503390977",
        "id": "84487",
        "nombre": "Merendero Villalba",
        "superficie": "900",
        "web": "",
        "acceso": "Pista parcelaria"
    },
    "84488": {
        "lat": "42.939044987612405",
        "lng": "-3.034304601050325",
        "id": "84488",
        "nombre": "Aparcamiento de entrada",
        "superficie": "300",
        "web": "",
        "acceso": "Aparcamiento de entrada a Monte Santiago AP00003"
    },
    "85046": {
        "lat": "42.06325325773249",
        "lng": "-4.841267898514344",
        "id": "85046",
        "nombre": "Paseo de la Alameda",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "85047": {
        "lat": "42.08887537964282",
        "lng": "-4.831549743713235",
        "id": "85047",
        "nombre": "La Fuente",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "85048": {
        "lat": "42.17035606767797",
        "lng": "-4.672972096278792",
        "id": "85048",
        "nombre": "Virgen de Carejas",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "85049": {
        "lat": "42.14513070549489",
        "lng": "-4.837058626176359",
        "id": "85049",
        "nombre": "Ermita San Miguel",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "85050": {
        "lat": "42.13151799354843",
        "lng": "-4.9095850887812436",
        "id": "85050",
        "nombre": "La Fuente",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "85051": {
        "lat": "42.02609715665964",
        "lng": "-4.718010752837959",
        "id": "85051",
        "nombre": "La Laguna",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "85052": {
        "lat": "41.94235078993141",
        "lng": "-4.91682281698188",
        "id": "85052",
        "nombre": "El Barrero",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "85053": {
        "lat": "41.942009132716855",
        "lng": "-4.988224797140269",
        "id": "85053",
        "nombre": "El Lavadero",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "85054": {
        "lat": "42.03160911259051",
        "lng": "-4.826764132615193",
        "id": "85054",
        "nombre": "\u00c1rea Recreativa Castromocho",
        "superficie": "0",
        "web": "",
        "acceso": ""
    },
    "85146": {
        "lat": "43.00857200799342",
        "lng": "-3.6373921884471287",
        "id": "85146",
        "nombre": "Alto de Retuerta",
        "superficie": "400",
        "web": "",
        "acceso": "Carratera asfaltada del Ayuntameinto"
    },
    "85147": {
        "lat": "43.03446664207853",
        "lng": "-3.664731532997257",
        "id": "85147",
        "nombre": "Los Nogales",
        "superficie": "3000",
        "web": "",
        "acceso": "Desde aparcamientos OJGAP0003 Los Nogales y OJGAP0002 Alto de la Concha"
    },
    "85148": {
        "lat": "43.04448082408542",
        "lng": "-3.6936135061615465",
        "id": "85148",
        "nombre": "Vallejo de Sotoscueva",
        "superficie": "100",
        "web": "",
        "acceso": "Carretera asfaltada BU_526"
    },
    "85149": {
        "lat": "43.046915738669306",
        "lng": "-3.6779867052245248",
        "id": "85149",
        "nombre": "Villab\u00e1scones",
        "superficie": "100",
        "web": "",
        "acceso": "Carretera asfaltada BU_526"
    },
    "85150": {
        "lat": "43.04544145989752",
        "lng": "-3.669766471611032",
        "id": "85150",
        "nombre": "San Roque",
        "superficie": "250",
        "web": "",
        "acceso": "Carretera asfaltada de la Diputaci\u00f3n"
    },
    "85151": {
        "lat": "43.042692780423764",
        "lng": "-3.7018312205548463",
        "id": "85151",
        "nombre": "La Parte de Sotoscueva",
        "superficie": "300",
        "web": "",
        "acceso": "Camino vecinal de hormig\u00f3n"
    },
    "85152": {
        "lat": "43.049141703513",
        "lng": "-3.6646186906233376",
        "id": "85152",
        "nombre": "Quisicedo",
        "superficie": "40",
        "web": "",
        "acceso": "Carretera asfaltada BU_526"
    },
    "85153": {
        "lat": "43.05721487186973",
        "lng": "-3.63363668566527",
        "id": "85153",
        "nombre": "Vivero de Quintanilla del Rebollar",
        "superficie": "21000",
        "web": "",
        "acceso": "Desde OJGA0001 de la Casa del Parque por Senda Botanica o por acera peatonal de la carretera Bu_526"
    },
    "85154": {
        "lat": "43.05628692357264",
        "lng": "-3.6277644108833087",
        "id": "85154",
        "nombre": "Casa del Parque",
        "superficie": "5000",
        "web": "",
        "acceso": "Desde aparcamiento OJGAP0001 Casa del Parque, y peatonal desde casco urbano de Quintanilla del Rebollar"
    },
    "85155": {
        "lat": "43.076133194238885",
        "lng": "-3.557935898750278",
        "id": "85155",
        "nombre": "Torre de los Velasco",
        "superficie": "4000",
        "web": "",
        "acceso": "Peatonal desde casco urbano de Espinosa de los Monteros"
    },
    "85156": {
        "lat": "43.051813381410156",
        "lng": "-3.6626704949615703",
        "id": "85156",
        "nombre": "Pe\u00f1anegra",
        "superficie": "1000",
        "web": "",
        "acceso": "Peatonal por senda de Quisicedo a Casa del Parque"
    },
    "85157": {
        "lat": "43.06645971087212",
        "lng": "-3.653375597874545",
        "id": "85157",
        "nombre": "Pico \u00c1ngel",
        "superficie": "2000",
        "web": "",
        "acceso": "Peatonal por pista de 1er orden del monte \"La Cueva\", y senda PR_C_BU_37"
    },
    "85158": {
        "lat": "43.04716641175888",
        "lng": "-3.6767125661911995",
        "id": "85158",
        "nombre": "Museo etnogr\u00e1fico de las Siete Juntas del Valle",
        "superficie": "11000",
        "web": "",
        "acceso": "Peatonal por senda desde la Casa del Parque a Quisicedo. En el futuro contar\u00e1 con acceso desde Villab\u00e1scones por pasarela sobre el FEVE"
    },
    "85806": {
        "lat": "43.04129149881088",
        "lng": "-5.117767686211644",
        "id": "85806",
        "nombre": "Acebedo",
        "superficie": "32924",
        "web": "",
        "acceso": "Propio pueblo Acebedo"
    },
    "85807": {
        "lat": "43.049195350753806",
        "lng": "-5.18366991369917",
        "id": "85807",
        "nombre": "Albergue de Mara\u00f1a",
        "superficie": "2445",
        "web": "",
        "acceso": "Propio pueblo GR-1"
    },
    "85808": {
        "lat": "43.03672940204895",
        "lng": "-5.1229666724516365",
        "id": "85808",
        "nombre": "Arroyo Cea",
        "superficie": "1156",
        "web": "",
        "acceso": "Pista forestal GR-1"
    },
    "85809": {
        "lat": "42.897116358554335",
        "lng": "-4.889567625191307",
        "id": "85809",
        "nombre": "Besande",
        "superficie": "576",
        "web": "",
        "acceso": "Pista forestal"
    },
    "85810": {
        "lat": "42.96758345546345",
        "lng": "-4.923725395029917",
        "id": "85810",
        "nombre": "Boca de Hu\u00e9rgano",
        "superficie": "1507",
        "web": "",
        "acceso": "Carretera LE-215"
    },
    "85811": {
        "lat": "43.060137299791144",
        "lng": "-4.945711887597609",
        "id": "85811",
        "nombre": "Casasuertes",
        "superficie": "592",
        "web": "",
        "acceso": "Pista forestal"
    },
    "85812": {
        "lat": "43.03513684774472",
        "lng": "-5.271006541736806",
        "id": "85812",
        "nombre": "Cofi\u00f1al",
        "superficie": "3460",
        "web": "",
        "acceso": "Salida pueblo Cofi\u00f1al"
    },
    "85813": {
        "lat": "43.12545281013945",
        "lng": "-4.981932894833227",
        "id": "85813",
        "nombre": "Collado de Panderruedas",
        "superficie": "12610",
        "web": "",
        "acceso": "Carretera local"
    },
    "85814": {
        "lat": "43.10529021518537",
        "lng": "-4.876044765305691",
        "id": "85814",
        "nombre": "Collado de Pandetrave",
        "superficie": "4528",
        "web": "",
        "acceso": "Carretera LE-243"
    },
    "85815": {
        "lat": "42.92977013456626",
        "lng": "-4.9281796261571005",
        "id": "85815",
        "nombre": "El Hito",
        "superficie": "0",
        "web": "",
        "acceso": "Carretera LE-241 / LE-234"
    },
    "85816": {
        "lat": "43.06212590101884",
        "lng": "-5.351290712373599",
        "id": "85816",
        "nombre": "El Praico",
        "superficie": "3238",
        "web": "",
        "acceso": "Carretera LE-332"
    },
    "85817": {
        "lat": "42.91626620683628",
        "lng": "-4.963361053758095",
        "id": "85817",
        "nombre": "Ermita del Pando",
        "superficie": "5566",
        "web": "",
        "acceso": "Pista forestal desde LE-234"
    },
    "85818": {
        "lat": "42.90814597792963",
        "lng": "-5.159447014711424",
        "id": "85818",
        "nombre": "Ermita de San Juan",
        "superficie": "2244",
        "web": "",
        "acceso": "Carretera"
    },
    "85819": {
        "lat": "43.097107010545045",
        "lng": "-5.016315354258703",
        "id": "85819",
        "nombre": "Ermita del Pont\u00f3n",
        "superficie": "4061",
        "web": "",
        "acceso": "Carretera N-625"
    },
    "85820": {
        "lat": "42.957924053057475",
        "lng": "-5.00938813553624",
        "id": "85820",
        "nombre": "Ermita Virgen de Quintanilla",
        "superficie": "21453",
        "web": "",
        "acceso": "Carretera N-620"
    },
    "85821": {
        "lat": "43.00409621991579",
        "lng": "-5.267755246962622",
        "id": "85821",
        "nombre": "Ermita Virgen de las Nieves",
        "superficie": "3911",
        "web": "",
        "acceso": "Entrada pueblo Puebla de Lillo"
    },
    "85822": {
        "lat": "42.934503559961314",
        "lng": "-5.127731563089824",
        "id": "85822",
        "nombre": "Ermita Virgen del Roblo",
        "superficie": "1967",
        "web": "",
        "acceso": "Carretera local GR-1"
    },
    "85823": {
        "lat": "42.97009834724749",
        "lng": "-4.972819886695372",
        "id": "85823",
        "nombre": "Ermita de Pedrosa del Rey",
        "superficie": "5181",
        "web": "",
        "acceso": "Carretera N-621"
    },
    "85824": {
        "lat": "43.00983330328162",
        "lng": "-5.311517658489766",
        "id": "85824",
        "nombre": "Ermita de Pegar\u00faas",
        "superficie": "4590",
        "web": "",
        "acceso": "Pista forestal PR-LE.28"
    },
    "85825": {
        "lat": "42.90790811790208",
        "lng": "-5.131670000782476",
        "id": "85825",
        "nombre": "Ermita de Pereda",
        "superficie": "1721",
        "web": "",
        "acceso": "Carretera local PR-LE.36"
    },
    "85826": {
        "lat": "42.900889339329126",
        "lng": "-5.000387522675271",
        "id": "85826",
        "nombre": "Ermita de Retejerina",
        "superficie": "552",
        "web": "",
        "acceso": "Pista forestal"
    },
    "85827": {
        "lat": "43.074433734893184",
        "lng": "-5.216137863390954",
        "id": "85827",
        "nombre": "Ermita de Riosol",
        "superficie": "3907",
        "web": "",
        "acceso": "Pista asfaltada desde C-635"
    },
    "85828": {
        "lat": "42.971491890896246",
        "lng": "-5.2569903563108555",
        "id": "85828",
        "nombre": "Fuente las Rogueras",
        "superficie": "104",
        "web": "",
        "acceso": "Carretera LE-331"
    },
    "85829": {
        "lat": "42.94081479269156",
        "lng": "-5.046909832833837",
        "id": "85829",
        "nombre": "Horcadas",
        "superficie": "3733",
        "web": "",
        "acceso": "Entrada pueblo Horcadas"
    },
    "85830": {
        "lat": "43.06498639219393",
        "lng": "-5.135948575423074",
        "id": "85830",
        "nombre": "La U\u00f1a",
        "superficie": "5928",
        "web": "",
        "acceso": "Propio pueblo La U\u00f1a"
    },
    "85831": {
        "lat": "43.04064500757498",
        "lng": "-5.092015536541501",
        "id": "85831",
        "nombre": "Lario",
        "superficie": "9898",
        "web": "",
        "acceso": "Propio pueblo Lario"
    },
    "85832": {
        "lat": "42.96960503613107",
        "lng": "-5.030224275877707",
        "id": "85832",
        "nombre": "Las Biescas",
        "superficie": "10027",
        "web": "",
        "acceso": "Pista forestal desde N-621"
    },
    "85833": {
        "lat": "42.93401905724298",
        "lng": "-5.105008443136689",
        "id": "85833",
        "nombre": "Las Salas",
        "superficie": "0",
        "web": "",
        "acceso": "Pista forestal desde pueblo de Las Salas"
    },
    "85834": {
        "lat": "43.02647724251401",
        "lng": "-5.0761886361964415",
        "id": "85834",
        "nombre": "Liegos",
        "superficie": "875",
        "web": "",
        "acceso": "Entrada pueblo Liegos"
    },
    "85835": {
        "lat": "42.94356917566578",
        "lng": "-5.2533864438935804",
        "id": "85835",
        "nombre": "Lodares",
        "superficie": "5739",
        "web": "",
        "acceso": "Carretera LE-331"
    },
    "85836": {
        "lat": "42.98196791865915",
        "lng": "-5.145314053563428",
        "id": "85836",
        "nombre": "Lois",
        "superficie": "3048",
        "web": "",
        "acceso": "Salida pueblo PR-LE.51"
    },
    "85837": {
        "lat": "42.91158503278385",
        "lng": "-4.970150632747449",
        "id": "85837",
        "nombre": "Los Adiles",
        "superficie": "687",
        "web": "",
        "acceso": "Pista forestal PR-LE.35"
    },
    "85838": {
        "lat": "43.073045760335354",
        "lng": "-5.156072285521037",
        "id": "85838",
        "nombre": "Los Carbellares",
        "superficie": "1124",
        "web": "",
        "acceso": "Carretera C-635"
    },
    "85839": {
        "lat": "42.996690531807694",
        "lng": "-4.97335768883941",
        "id": "85839",
        "nombre": "Los Casares",
        "superficie": "0",
        "web": "",
        "acceso": "pista forestal Hormas"
    },
    "85840": {
        "lat": "43.00999179808003",
        "lng": "-5.225429568478197",
        "id": "85840",
        "nombre": "Los Torcedos",
        "superficie": "656",
        "web": "",
        "acceso": "Pista forestal PR-LE.29"
    },
    "85841": {
        "lat": "43.04874625025617",
        "lng": "-5.177384246723591",
        "id": "85841",
        "nombre": "Mara\u00f1a Polideportivo",
        "superficie": "1528",
        "web": "",
        "acceso": "Propio pueblo Mara\u00f1a"
    },
    "85842": {
        "lat": "42.940490952992576",
        "lng": "-5.057410589162002",
        "id": "85842",
        "nombre": "Mirador de Huelde",
        "superficie": "2349",
        "web": "",
        "acceso": "Carretera N-621"
    },
    "85843": {
        "lat": "43.042075172970975",
        "lng": "-4.85045814987224",
        "id": "85843",
        "nombre": "Mirador de Portilla",
        "superficie": "2334",
        "web": "",
        "acceso": "Pista forestal desde Portilla de la Reina"
    },
    "85844": {
        "lat": "43.027540255128294",
        "lng": "-5.060033329866367",
        "id": "85844",
        "nombre": "Mirva",
        "superficie": "4410",
        "web": "",
        "acceso": "Pista forestal desde C-635"
    },
    "85845": {
        "lat": "42.91924991060509",
        "lng": "-5.288071953901296",
        "id": "85845",
        "nombre": "Pardomino",
        "superficie": "9416",
        "web": "",
        "acceso": "Pista forestal desde LE-331"
    },
    "85846": {
        "lat": "43.05381601164975",
        "lng": "-5.095988783107161",
        "id": "85846",
        "nombre": "Polvoredo",
        "superficie": "55",
        "web": "",
        "acceso": "Entrada pueblo Polvoredo"
    },
    "85847": {
        "lat": "43.04100460637371",
        "lng": "-4.847535190138411",
        "id": "85847",
        "nombre": "Portilla de la Reina",
        "superficie": "3253",
        "web": "",
        "acceso": "Pista forestal desde N-621"
    },
    "85848": {
        "lat": "42.91877984709476",
        "lng": "-4.866912985549231",
        "id": "85848",
        "nombre": "Puerto de Picones",
        "superficie": "2390",
        "web": "",
        "acceso": "Pista forestal desde C-635"
    },
    "85849": {
        "lat": "42.92839395316118",
        "lng": "-4.949146233130806",
        "id": "85849",
        "nombre": "Puerto del Pando",
        "superficie": "2952",
        "web": "",
        "acceso": "Carretera LE-234"
    },
    "85850": {
        "lat": "43.00387651573019",
        "lng": "-5.258745727698631",
        "id": "85850",
        "nombre": "Redipollos",
        "superficie": "1643",
        "web": "",
        "acceso": "Propio pueblo Redipollos"
    },
    "85851": {
        "lat": "42.94983412524063",
        "lng": "-5.205175286356735",
        "id": "85851",
        "nombre": "Reyero",
        "superficie": "1752",
        "web": "",
        "acceso": "Carretera local Reyero"
    },
    "85852": {
        "lat": "43.0559079753212",
        "lng": "-4.972377043044852",
        "id": "85852",
        "nombre": "Rio Orza",
        "superficie": "11481",
        "web": "",
        "acceso": "Carretera local"
    },
    "85853": {
        "lat": "43.06679650902021",
        "lng": "-4.7660629275349775",
        "id": "85853",
        "nombre": "San Glorio",
        "superficie": "606",
        "web": "",
        "acceso": "Carretera N-621"
    },
    "85854": {
        "lat": "42.93645315364662",
        "lng": "-4.8964991037977335",
        "id": "85854",
        "nombre": "S\u00edero",
        "superficie": "174",
        "web": "",
        "acceso": "Propio pueblo S\u00edero de la Reina"
    },
    "85855": {
        "lat": "43.01177349295499",
        "lng": "-4.881884573391374",
        "id": "85855",
        "nombre": "Suelta Grande",
        "superficie": "9179",
        "web": "",
        "acceso": "Carretera N-621"
    },
    "85856": {
        "lat": "43.03551601536884",
        "lng": "-5.011234679721117",
        "id": "85856",
        "nombre": "Sutiello",
        "superficie": "1116",
        "web": "",
        "acceso": "Propio pueblo Vegacerneja"
    },
    "85857": {
        "lat": "42.918787785724085",
        "lng": "-5.301969442891002",
        "id": "85857",
        "nombre": "Valcabrero",
        "superficie": "4775",
        "web": "",
        "acceso": "Pista forestal desde LE-331"
    },
    "88833": {
        "lat": "41.42592089798862",
        "lng": "-5.1343103286472935",
        "id": "88833",
        "nombre": "Valdecabra",
        "superficie": "300",
        "web": "",
        "acceso": ""
    },
    "88834": {
        "lat": "41.40221627063859",
        "lng": "-5.251809572175145",
        "id": "88834",
        "nombre": "Escenario Deportivo Social de Pesca de Castronu\u00f1o",
        "superficie": "400",
        "web": "",
        "acceso": ""
    },
    "88955": {
        "lat": "41.77098242447608",
        "lng": "-2.8495629436108287",
        "id": "88955",
        "nombre": "Molino Ranero",
        "superficie": "900",
        "web": "",
        "acceso": ""
    },
    "89079": {
        "lat": "40.18569326184996",
        "lng": "-5.146695083576391",
        "id": "89079",
        "nombre": "Arbillas",
        "superficie": "2800",
        "web": "",
        "acceso": "Carretera de Arenas a Candeleda Km 16, desv\u00edo indicado a la derecha y 3,4 km de pista asfaltada."
    },
    "89080": {
        "lat": "40.19388699632858",
        "lng": "-5.135675048569874",
        "id": "89080",
        "nombre": "Fuente Arrontejo",
        "superficie": "250",
        "web": "",
        "acceso": "Desde la C-501 de Arenas a Candeleda, Km 7,8  siguiendo los indicadores a 1,5 km por la carretera forestal de Arbillas, en coche"
    },
    "89081": {
        "lat": "40.185771346049755",
        "lng": "-5.146825272525183",
        "id": "89081",
        "nombre": "Merendero de la casa",
        "superficie": "300",
        "web": "",
        "acceso": "Desde la C-501 de Arenas a Candeleda, Km 7,8  siguiendo los indicadores a 0,5 km por la carretera forestal de Arbillas, en coche"
    },
    "89082": {
        "lat": "40.21667256711103",
        "lng": "-5.095822213241258",
        "id": "89082",
        "nombre": "Piscina natural Arenas de San Pedro",
        "superficie": "8000",
        "web": "",
        "acceso": "Carretera de Arenas de San Pedro a El Hornillo. A 1,2 Km de Arenas de san Pedro."
    },
    "89083": {
        "lat": "40.182600878520375",
        "lng": "-5.146444779392346",
        "id": "89083",
        "nombre": "Rio Abillas",
        "superficie": "1000",
        "web": "",
        "acceso": "Carretera de Arenas a Candeleda Km 6, a ambos lados de la carretera y antes del puente"
    },
    "89084": {
        "lat": "40.201802042903275",
        "lng": "-5.11339610273213",
        "id": "89084",
        "nombre": "R\u00edo Pelayo",
        "superficie": "8000",
        "web": "",
        "acceso": "Por la carretera C-501 de Arenas de San Pedro en direcci\u00f3n a Poyales del Hoyo, en el pk 3,4 junto a la carretera y r\u00edo Pelayos"
    },
    "89085": {
        "lat": "40.16418245287315",
        "lng": "-5.2436719993387975",
        "id": "89085",
        "nombre": "Charco Carreras",
        "superficie": "12000",
        "web": "",
        "acceso": "Casco urbano de Candeleda por arriba del puente sobre la garganta de Santa Mar\u00eda, se\u00f1alizado."
    },
    "89086": {
        "lat": "40.15985201880687",
        "lng": "-5.309758760662652",
        "id": "89086",
        "nombre": "Los Riveros",
        "superficie": "8000",
        "web": "",
        "acceso": "Carretera del Raso, despues de la garganta de Chilla, a 2,5 kil\u00f3metros del cruce con la C-501.Por la carretera C.501 de Candeleda hacia Madrigal de la Vera, en el pk 24,9 se toma a la derecha un desv\u00edo que se\u00f1aliza el \u00e1rea y se dirige a El Raso y tras 2,4 km."
    },
    "89087": {
        "lat": "40.289672632582224",
        "lng": "-5.00821240086994",
        "id": "89087",
        "nombre": "El Plant\u00edo",
        "superficie": "12000",
        "web": "",
        "acceso": "Se llega desde el pueblo de Cuevas por una cuesta inclinada indicada en la carretera nacional."
    },
    "89088": {
        "lat": "40.254531590484284",
        "lng": "-5.060935211615861",
        "id": "89088",
        "nombre": "Fuente de Las Majadas",
        "superficie": "1200",
        "web": "",
        "acceso": "En la carretera de Mombeltran a El Arenal."
    },
    "89089": {
        "lat": "40.28793252410167",
        "lng": "-5.077212359917542",
        "id": "89089",
        "nombre": "Pino Gordo",
        "superficie": "500",
        "web": "",
        "acceso": "Carretera desde El Arenal al Puerto del Pico. A 3,5 km. del pueblo"
    },
    "89090": {
        "lat": "40.2584399675362",
        "lng": "-5.130429540523036",
        "id": "89090",
        "nombre": "La Francisca",
        "superficie": "5000",
        "web": "",
        "acceso": "Por la pista forestal asfaltada y se\u00f1alizada \" Charco Verde\" que parte a 0,4 km de El Hornillo, a la izquierda, a la altura del puente la Francisca sobre el r\u00edo de Los Cantos."
    },
    "89091": {
        "lat": "40.26621249342205",
        "lng": "-5.123412308067189",
        "id": "89091",
        "nombre": "La Lancha del Rey o La Cebedilla",
        "superficie": "5000",
        "web": "",
        "acceso": "Por la pista forestal asfaltada \" Charco Verde\" que parte a 0,4 km de El Hornillo. Pr\u00f3xima al refugio de La Lancha del Rey."
    },
    "89092": {
        "lat": "40.24879518064104",
        "lng": "-5.110502001014489",
        "id": "89092",
        "nombre": "Las Escarilluelas",
        "superficie": "200",
        "web": "",
        "acceso": "Por la pista forestal asfaltada y se\u00f1alizada  \"Charco Verde\" que parte a 0,4 km de El Hornillo."
    },
    "89093": {
        "lat": "40.261929450749186",
        "lng": "-5.134545275803042",
        "id": "89093",
        "nombre": "Los Chorlitos",
        "superficie": "2000",
        "web": "",
        "acceso": "Por la pista forestal asfaltada y se\u00f1alizada \"Charco Verde\" que parte a 0,4 km de El Hornillo; a 4,9 km se toma un desv\u00edo a la izquierda y tras 0,7 km se toma a la izquierda un desv\u00edo en direcci\u00f3n al refugio de Domingo Fernando y a 200 antes de la plataforma del mismo nombre."
    },
    "89094": {
        "lat": "40.22130382456243",
        "lng": "-5.142867989654323",
        "id": "89094",
        "nombre": "El Risquillo",
        "superficie": "8000",
        "web": "",
        "acceso": "En el pueblo de Guisando. Desde Guisando, cruzado el puente sobre el r\u00edo Pelayos y el primer desvio a la derecha"
    },
    "89095": {
        "lat": "40.209203771380004",
        "lng": "-5.1428414381585075",
        "id": "89095",
        "nombre": "Fuente del Poyal",
        "superficie": "600",
        "web": "",
        "acceso": "Por la pista forestal asfaltada \"Portezuelo\" que une Guisando con la carretera C-501 y que parte a la altura del camping Los Galayos, a la izquierda."
    },
    "89096": {
        "lat": "40.21378875012233",
        "lng": "-5.142889213189893",
        "id": "89096",
        "nombre": "Fuente del Valle",
        "superficie": "500",
        "web": "",
        "acceso": "Desde Guisando por la carretera a la torre de la Sillita"
    },
    "89097": {
        "lat": "40.23419493498842",
        "lng": "-5.162591629578532",
        "id": "89097",
        "nombre": "Nogal del Barranco",
        "superficie": "14000",
        "web": "",
        "acceso": "Pista forestal asfaltada del Nogal de Barranco, en Guisando. A 4,7 Km. del pueblo de Guisando."
    },
    "89098": {
        "lat": "40.33876796509398",
        "lng": "-5.1742366397479005",
        "id": "89098",
        "nombre": "Puente del Duque",
        "superficie": "20000",
        "web": "",
        "acceso": "Por la carretera a la Plataforma de Gredos, a 1,6 km a la altura del puente del Duque sobre el r\u00edo Tormes."
    },
    "89099": {
        "lat": "40.341800810201676",
        "lng": "-5.547137802627393",
        "id": "89099",
        "nombre": "La Carrera",
        "superficie": "1800",
        "web": "",
        "acceso": "Por la carretera N-110 y en la entrada a el pueblo de La Carrera, por una pista con direccion al rio. Despues de 0,6 km se llega al puente."
    },
    "89100": {
        "lat": "40.255339692992074",
        "lng": "-5.049636352984261",
        "id": "89100",
        "nombre": "Chinas Blancas",
        "superficie": "1300",
        "web": "",
        "acceso": "Por la carretera de Mombeltr\u00e1n hacia El Arenal, a la izquierda junto a la carretera."
    },
    "89101": {
        "lat": "40.220217478510406",
        "lng": "-5.0341137453380815",
        "id": "89101",
        "nombre": "Playas Blancas",
        "superficie": "7500",
        "web": "",
        "acceso": "Carretera de Mombeltr\u00e1n a Ramacasta\u00f1as. Desviarse por la pista forestal hacia el campamento de Playas Blancas"
    },
    "89102": {
        "lat": "40.21680265792581",
        "lng": "-5.035142272633857",
        "id": "89102",
        "nombre": "Pozos de Felipe",
        "superficie": "2500",
        "web": "",
        "acceso": "Carretera de Mombeltr\u00e1n a Ramacasta\u00f1as. Entre la garganta de los Pozos y R\u00edo Puerto."
    },
    "89103": {
        "lat": "40.268290657037426",
        "lng": "-5.515738884094244",
        "id": "89103",
        "nombre": "El Berrocal",
        "superficie": "15000",
        "web": "",
        "acceso": "Por la carretera de Navalonguilla hacia Navalguijo, a la altura del puente sobre La Garganta de los Caballeros."
    },
    "89104": {
        "lat": "40.347865791945694",
        "lng": "-5.289979437300264",
        "id": "89104",
        "nombre": "Prado del Toro",
        "superficie": "6000",
        "web": "",
        "acceso": "Por la pista forestal asfaltada de Navalperal de Tormes al r\u00edo Tormes. Cruzado el puente sobre el r\u00edo Tormes o siguiendo el GR-10, a la altura del puente sobre el r\u00edo Tormes en Navalperal."
    },
    "89105": {
        "lat": "40.33806548370016",
        "lng": "-5.130174277233303",
        "id": "89105",
        "nombre": "Tamborrios",
        "superficie": "4500",
        "web": "",
        "acceso": "Desde Navarredonda de Gredos con direcci\u00f3n a Valdeascas o el rio Tormes pasado el camping y el primer puentecillo sobre el Tormes"
    },
    "89106": {
        "lat": "40.26646793867266",
        "lng": "-4.984807968598901",
        "id": "89106",
        "nombre": "Ermita de San Andr\u00e9s",
        "superficie": "4500",
        "web": "",
        "acceso": "En la carretera de San Esteban a Santa Cruz. Zona pr\u00f3xima al pueblo."
    },
    "89107": {
        "lat": "40.307062666597865",
        "lng": "-4.9531324308323335",
        "id": "89107",
        "nombre": "Fuente de los Morenos.",
        "superficie": "100",
        "web": "",
        "acceso": "En un ensanche de la carretera AV-913 en la subida al puerto de Serranillos."
    },
    "89108": {
        "lat": "40.265912706917035",
        "lng": "-4.961912393088692",
        "id": "89108",
        "nombre": "La Chinita",
        "superficie": "200",
        "web": "",
        "acceso": "Al pie de la carretera pasado el cruce del puerto de Serranillos con el de Pedro Bernardo."
    },
    "89109": {
        "lat": "40.34567798812793",
        "lng": "-5.249897942064096",
        "id": "89109",
        "nombre": "Pozo de las Paredes",
        "superficie": "4000",
        "web": "",
        "acceso": "Desde Navacepeda de Tormes, cruzado el r\u00edo Tormes y por la carretera de Barbellido. Desde el camino de la Plataforma, en el Km 7 antes del puente de Las juntas, camino de Barbellido."
    },
    "89110": {
        "lat": "40.33120941685777",
        "lng": "-5.37922466224607",
        "id": "89110",
        "nombre": "La Aliseda",
        "superficie": "850",
        "web": "",
        "acceso": "Por la carretera C-500 de La Aliseda de Tormes a Navalperal de Tormes, a 1,7 km en el pk 38,6 parte una pista a la derecha que tras 0,1 km conduce al merendero."
    },
    "89111": {
        "lat": "40.33120941685777",
        "lng": "-5.37922466224607",
        "id": "89111",
        "nombre": "Las Colmenillas",
        "superficie": "0",
        "web": "",
        "acceso": "Por la carretera C-500 de La Aliseda de Tormes a Navalperal de Tormes, a 1,7 km en el pk 38,6 parte una pista a la derecha que tras 0,1 km conduce al merendero."
    },
    "89112": {
        "lat": "40.352022000181265",
        "lng": "-5.621661978821763",
        "id": "89112",
        "nombre": "Monumento al pastor",
        "superficie": "2000",
        "web": "",
        "acceso": "En casco urbano del Tremedal."
    },
    "89113": {
        "lat": "40.31713807167829",
        "lng": "-5.58227406945931",
        "id": "89113",
        "nombre": "Umbr\u00edas",
        "superficie": "20000",
        "web": "",
        "acceso": "Desde el pueblo de Umbrias por la carretera que conduce a la Vega del Escobar a unos 200 metros a la salida del pueblo en el puente sobre el rio Aravalle"
    },
    "89114": {
        "lat": "40.28599236988734",
        "lng": "-5.003199219439287",
        "id": "89114",
        "nombre": "La Cantera de Villarejo",
        "superficie": "8000",
        "web": "",
        "acceso": "Carretera de Cuevas del Valle a Villarejo, a escasos metros del pueblo."
    },
    "89115": {
        "lat": "40.29932995283051",
        "lng": "-4.99696286303507",
        "id": "89115",
        "nombre": "Los Rozos",
        "superficie": "15000",
        "web": "",
        "acceso": "Por la pista cementada que parte de Villarejo del Valle y sube hacia el monte, a 0,9 km una vez se termina, se toma a la derecha un desv\u00edo por una pista de tierra que tras 0,9 km conduce al area recreativa."
    },
    "89116": {
        "lat": "40.321891037973636",
        "lng": "-5.0133397311161065",
        "id": "89116",
        "nombre": "Puerto del Pico",
        "superficie": "1200",
        "web": "",
        "acceso": "Por la carretera N-502 a la altura del puerto el Pico."
    },
    "89117": {
        "lat": "40.342050009074235",
        "lng": "-5.3248035277708325",
        "id": "89117",
        "nombre": "La Puente",
        "superficie": "2500",
        "web": "",
        "acceso": "Por la carretera de Hoyos del Espino a Barco de Avila en la bajada al rio Tormes cerca del cruce con Zapardiel de la Rivera"
    },
    "89555": {
        "lat": "40.37092517410823",
        "lng": "-4.51395157254909",
        "id": "89555",
        "nombre": "Los Andrinos",
        "superficie": "50",
        "web": "",
        "acceso": ""
    },
    "89556": {
        "lat": "40.35550835126818",
        "lng": "-4.524716319256118",
        "id": "89556",
        "nombre": "Las Barrancas",
        "superficie": "3000",
        "web": "",
        "acceso": ""
    },
    "89557": {
        "lat": "40.35831206267138",
        "lng": "-4.512003338930334",
        "id": "89557",
        "nombre": "El Regajo",
        "superficie": "6000",
        "web": "",
        "acceso": ""
    },
    "89558": {
        "lat": "40.40749747803244",
        "lng": "-4.571915543049817",
        "id": "89558",
        "nombre": "Siempreverde",
        "superficie": "3000",
        "web": "",
        "acceso": ""
    },
    "89990": {
        "lat": "41.82651898211155",
        "lng": "-3.2068769106576385",
        "id": "89990",
        "nombre": "1",
        "superficie": "",
        "web": "",
        "acceso": ""
    },
    "89991": {
        "lat": "41.83544261693169",
        "lng": "-3.1919113800452577",
        "id": "89991",
        "nombre": "2",
        "superficie": "",
        "web": "",
        "acceso": ""
    },
    "89992": {
        "lat": "41.85202887647166",
        "lng": "-3.185929089656138",
        "id": "89992",
        "nombre": "3",
        "superficie": "",
        "web": "",
        "acceso": ""
    },
    "89993": {
        "lat": "41.8375072246771",
        "lng": "-3.1963181804737455",
        "id": "89993",
        "nombre": "4",
        "superficie": "",
        "web": "",
        "acceso": ""
    },
    "90084": {
        "lat": "42.260124289620116",
        "lng": "-6.747611283586787",
        "id": "90084",
        "nombre": "Laguna de La Ba\u00f1a",
        "superficie": "",
        "web": "",
        "acceso": ""
    },
    "90085": {
        "lat": "42.23070565625666",
        "lng": "-6.476783520029626",
        "id": "90085",
        "nombre": "La Tiembla",
        "superficie": "",
        "web": "",
        "acceso": ""
    },
    "90086": {
        "lat": "42.21695329846582",
        "lng": "-6.545560698412232",
        "id": "90086",
        "nombre": "Truchillas",
        "superficie": "",
        "web": "",
        "acceso": ""
    }
}
},{}]},{},[1]);
