function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: 53.989515,
            lng: -7.363234,
        },
        mapTypeId: 'satellite',
        disableDefaultUI: true,
        scaleControl: true,
        fullscreenControl: true,
        gestureHandling: "greedy",
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 53.973862, lng: -7.354906 },
        { lat: 53.972474, lng: -7.355442 },
        { lat: 53.962148, lng: -7.358337 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}