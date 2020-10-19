const map = L.map("mapid").setView(
  [-23.309793, -51.1701292],
  15
); /* O 'L' é um objeto criado pelo script do mapa (link lá no head do orphanages.html) */

// pega um layer (do link) e adiciona ao mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({ id, name, lat, lng }) {
  /* coloca dentro do argumento um objeto (desestruturação) para que não precise toda hora digitar 'variável.propriedade' */

  //create poput overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`
  ); /* uma string que tem código dentro tem que ser entre crases */

  // adiciona um popup para sinalização no mapa
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
  //no caso de objetos que tem nomes de propriedades e valores iguais, não é necessário escrever 'propriedade:valor'
}

const orphanagesSpan = document.querySelectorAll('.orphanages span');

orphanagesSpan.forEach( span => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng
  }

  addMarker(orphanage)
});