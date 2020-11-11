var map = L.map('mapid').setView([-23.7594344, -53.3092236], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const icon = L.icon({
    iconUrl: "../../Public/assets/user-icon.png",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [0,-55],
    
})

function addMarker({AgroMazing}) {
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        maxWidth: 240,
    }).setContent(AgroMazing)
}


L.marker([-23.7594344, -53.3092236], {icon}).addTo(map)
    .bindPopup(`Conheça a AgroMazing <a href="service.html"> <img src = "../../Public/assets/seta-fina.svg"></a>`)
    .openPopup();


