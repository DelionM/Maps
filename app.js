const boton = document.getElementById("busca");
boton.addEventListener("click", Actualizar);

const botonPalabra = document.getElementById("busca2");
botonPalabra.addEventListener("click", convierteACoordenadas);

//ya saque la latitud  longitud Y palabra
let latitud = document.getElementById("latitud");
let longitud = document.getElementById("longitud");
let entradaPalabra = document.getElementById("palabras");

//de palabra a coordenadas y busca en Mapa
//Buscar por palabras


function convierteACoordenadas() {
  entradaPalabra = palabras.value;
  what3words.api.convertToCoordinates(entradaPalabra).then(function (response) {
    const latitudPalbara = response.coordinates.lat;
    const longitudPalbara = response.coordinates.lng;
    //pasar a los imputs los valores de las palabras
    document.getElementById('latitud').value = latitudPalbara;
    document.getElementById('longitud').value = longitudPalbara;
    Actualizar();
    // console.log('latitud' + latitudPalbara);
    // console.log('latitud' + longitudPalbara);
    function Actualizar() {
      coordenadas = {
        lat: latitudPalbara,
        lng: longitudPalbara,
      };
      iniciarMapa();
    }
  });
}

function iniciarMapa() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: coordenadas,
    zoom: 15,
  });
  marker = new google.maps.Marker({
    position: coordenadas,
    map: map,
    draggable: true,
  });

  // alert("Ubicación actualizada en el mapa");

  marker.addListener("dragend", function () {
    actualizarInput(marker.getPosition());
  });

  function actualizarInput(position) {
    latitud.value = position.lat();
    longitud.value = position.lng();
  }

  marker.addListener("dragend", function () {
    actualizarInputPalabra(marker.getPosition());
  });

  function actualizarInputPalabra(position) {
    what3words.api.convertTo3wa({ lat: parseFloat(latitud.value), lng: parseFloat(longitud.value)}, 'es')
    .then(function(response) {
      document.getElementById('palabras').value = response.words;
    });
  }
}
//fin de mi boton de API 3WORDS💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀
//Buscar por coordenadas

function Actualizar() {
  coordenadas = {
    lat: parseFloat(latitud.value),
    lng: parseFloat(longitud.value),
  };
  iniciarMapa();

  function iniciarMapa() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: coordenadas,
      zoom: 15,
    });
    marker = new google.maps.Marker({
      position: coordenadas,
      map: map,
      draggable: true,
    });

    // alert("Ubicación actualizada en el mapa primer boton");
    actualizarInputPalabra();

    marker.addListener("dragend", function () {
      actualizarInput(marker.getPosition());
    });

    function actualizarInput(position) {
      latitud.value = position.lat();
      longitud.value = position.lng();
    }

    marker.addListener("dragend", function () {
      actualizarInputPalabra(marker.getPosition());
    });

    function actualizarInputPalabra(position) {
      what3words.api.convertTo3wa({ lat: parseFloat(latitud.value), lng: parseFloat(longitud.value)}, 'es')
      .then(function(response) {
        document.getElementById('palabras').value = response.words;
      });
    }
  }
}
