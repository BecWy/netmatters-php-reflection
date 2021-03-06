function initMap() { 
    const gorlestonLocation = { lat: 52.55715259400881, lng: 1.71276513068646 };
    const wymondhamLocation = { lat: 52.5759, lng: 1.1363 };

    // The maps, centered at the offices
    const gorlestonMap = new google.maps.Map(document.getElementById("gorleston-map"), {
      zoom: 9,
      center: gorlestonLocation,
    });

    const wymondhamMap = new google.maps.Map(document.getElementById("wymondham-map"), {
        zoom: 9,
        center: wymondhamLocation,
      });


    // The markers, positioned at the offices
   new google.maps.Marker({
        position: gorlestonLocation,
        map: gorlestonMap,
    });

    new google.maps.Marker({
        position: wymondhamLocation,
        map: wymondhamMap,
    });
}















//Wymondham coordinates
//52.5759° N, 1.1363° E
// var mymap = L.map('mapid').setView([52.5759, 1.1363], 13);


// var marker = L.marker([52.6476, 1.2638]).addTo(mymap);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'pk.eyJ1IjoiYmVjd3kiLCJhIjoiY2trcjA4eWZxMDl6eTJwbnVkdGozNjc1aSJ9.aycPan2swxnRypDPUOIAhQ'
// }).addTo(mymap);