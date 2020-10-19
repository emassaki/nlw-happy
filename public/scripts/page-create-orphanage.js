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
});

let marker;

// creat and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photo field
function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector('#images');

  // pegar o container para duplicar .new-upload
  //clona todos os containers com classe .new-image. Faz com o All pq o querySelector só seleciona o primeiro
  const fieldsContainer = document.querySelectorAll('.new-upload');

  // realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //verificar se o campo está vazio, se sim não adicionar novo campo
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  //limpar o campo antes de adicionar o container de imagens
  input.value = "";

  //adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer);
}

// delete field
function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll('.new-upload');

  if (fieldsContainer.length <= 1) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o campo inteiro
  span.parentNode.remove();
}

// selecionar o sim e o não
function toggleSelect(event) {
  //retirar a classe .active dos dois botões
  document.querySelectorAll('.button-select button').forEach(function(button) {
    button.classList.remove('active');
  });

  //colocar a classe .active no botão clicado
  const button = event.currentTarget;
  button.classList.add('active');

  //atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');

  //verificar se sim ou não
  input.value = button.dataset.value;
}

//criar uma validação 
// function validate(event) {
//   //validar se lat e lng estão preenchidos
//   //pegar o campo de lat e lng com um document.querySelector, adicionar uma condição se o seu valor for zero  (linha 50 deste código) e então executar esse event.preventDefault()
//   const needLatLng = document.querySelector('.map-container input')
//   if (needLatLng) {
//   event.preventDefault()
//   alert('Selecione um ponto no mapa')
//   }
// }
