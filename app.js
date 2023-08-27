// let map;
// let coordenadas = {lat: 19.8646067 , lng: -98.9717818};

// //19.8646067,-98.9717818

// function iniciarMap() {
//     map = new google.maps.Map(document.getElementById('map'),{
//         center: coordenadas,
//         zoom: 16
//     });

//     marker = new google.maps.Marker({
//         position : coordenadas,
//         map: map
//     })

// }

const boton = document.querySelector("#busca");
boton.addEventListener("click", Actualizar);
//ya saque la latitud y longitud
let latitud = document.getElementById("latitud");
let longitud = document.getElementById("longitud");

let map;
let coordenadas = { lat: 19.8646067, lng: 98.9717818 };

function Actualizar() {
  coordenadas = {
    lat: parseFloat(latitud.value),
    lng: parseFloat(longitud.value),
  };
  console.log(coordenadas);
  iniciarMapa();
}

function iniciarMapa() {

    latitud = document.getElementById("latitud");
    longitud = document.getElementById("longitud");

  map = new google.maps.Map(document.getElementById("map"), {
    center: coordenadas,
    zoom: 16,
  });
  marker = new google.maps.Marker({
    position: coordenadas,
    map: map,
    draggable: true,
  });

  alert("se supone que ya busco la ubicación");


  marker.addListener('dragend', function () {
    actualizarInput(marker.getPosition());
  });
  // AGREGUE LO DE ARRIBA Y NO SE VE AFECTODO AHORA FALTA MANDARLO A LLAMAR
}

function actualizarInput(position) {
    latitud.value = position.lat();
    longitud.value = position.lng();
  }
//para buscar las palabra pro medio de las coordenadas 
  what3words.api.convertTo3wa({lat:19.8646067, lng:-98.9717818}, 'es')
  .then(function(response) {
      console.log("[convertTo3wa]", response.words);
  });

  //para coordenadas
  what3words.api.convertToCoordinates(" .rigor.ante")
  .then(function(response) {
      console.log("[convertToCoordinates]", response.coordinates);
  });