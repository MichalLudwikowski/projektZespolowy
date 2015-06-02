var lat, lng;
Meteor.startup(function () {
    GoogleMaps.load();
});
Template.searchCache.rendered = function () {
    navigator.geolocation.getCurrentPosition(handleSync);
};
Template.searchCache.helpers({
    exampleMapOptions2: function () {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            var mark = Caches.findOne(this._id);
            console.log(mark);
            return {
                center: new google.maps.LatLng(mark.coord_x, mark.coord_y),
                zoom: 8
            };
        }
    }
});
var handleSync = function (position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
};
Template.searchCache.onCreated(function () {

    GoogleMaps.ready('exampleMap2', function (map) {

        // Add a marker to the map once it's rea

        var marker = new google.maps.Marker({
            position: map.options.center,
            animation: google.maps.Animation.DROP,
            map: map.instance
        });
        setTimeout(function () {
            if (lat != undefined) {

                var playerMarker = new google.maps.Marker({
                    position: new google.maps.LatLng(lat, lng),
                    animation: google.maps.Animation.DROP,
                    map: map.instance
                });
            }
        }, 5000);

    });
});