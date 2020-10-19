const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

const map = L.map("mapid", options).setView(
  [lat, lng],
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

// adiciona um popup para sinalização no mapa
L.marker([lat, lng], { icon }).addTo(map);
//no caso de objetos que tem nomes de propriedades e valores iguais, não é necessário escrever 'propriedade:valor'

/* image gallery */

function selectImage(event) {
  const button = event.currentTarget;

  //remover todas as classes active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(
    removeActiveClass
  ); /* (button) => {button.classlist.remove("active")} é igual se eu fizesse uma function name(button) {} */

  function removeActiveClass(button) {
    //esse 'button' não é o mesmo da constante da linha 34
    button.classList.remove("active");
  }

  //selecionar a imagem clicada
  const image = button.children[0]; //os filhos do botão são os elementos filhos dele
  const imageContainer = document.querySelector(".orphanage-details > img");

  //atualizar o container de imagem
  imageContainer.src = image.src;

  //adicionar a classe .active para o botão clicado
  button.classList.add("active");
}
