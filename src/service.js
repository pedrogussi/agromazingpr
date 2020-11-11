




const options = {
    dragging: false,
    doubleClickZoom:false,
    touchZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}
var map = L.map('mapid',options).setView([-23.7594344, -53.3092236], 16);


L.tileLayer
    ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);


const icon = L.icon({
    iconUrl: "../../Public/assets/user-icon.png",
    iconSize: [48,58],
    iconAnchor: [29, 68],
    popupAnchor: [0,-65],
})

L.marker([-23.7594344, -53.3092236],{icon}).addTo(map)
    .bindPopup('Serviços AgroMazing')
    .openPopup();

function selectImage(event){
    const button = event.currentTarget

    const buttons = document.querySelectorAll(".images button")

    buttons.forEach((button)=>{
        button.classList.remove("active")
    })
    const image = button.children[0]
    const imageContainer = document.querySelector(".service-details > img")

    imageContainer.src = image.src
    button.classList.add('active')
}