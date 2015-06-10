var lat, lng, mark, distance;
Meteor.startup(function () {
    GoogleMaps.load();
});
Template.searchCache.helpers({
    exampleMapOptions2: function () {
        navigator.geolocation.getCurrentPosition(handleSync);
        // Make sure the maps API has loaded
        Session.set("help", this._id);
        mark = Caches.findOne(this._id);
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(mark.coord_x, mark.coord_y),
                zoom: 12
            };

        }
    }
});
var handleSync = function (position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
};
Template.searchCache.onCreated(function () {
    navigator.geolocation.getCurrentPosition(handleSync);
    GoogleMaps.ready('exampleMap2', function (map) {
        // Add a marker to the map once it's rea
        var marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance
        });
        setTimeout(function () {
            var playerMarker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                map: map.instance
            });
        }, 5000);
    });
    Meteor.setInterval(function () {
        navigator.geolocation.getCurrentPosition(handleSync);
        GoogleMaps.ready('exampleMap2', function (map) {
            var playerMarker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                map: map.instance
            });
            distance = getDistance(mark.coord_x, mark.coord_y, lat, lng);
            if (distance < 60) {


                console.log(Session.get("help"));
                Router.go('help');
            }
            console.log(distance);
        });
    }, 5000);
});
var rad = function (x) {
    return x * Math.PI / 180;
};
var getDistance = function (p1, p2, p3, p4) {
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(p3 - p1);
    var dLong = rad(p4 - p2);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1)) * Math.cos(rad(p3)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
};