Meteor.startup(function () {
    GoogleMaps.load();
});
Template.map.helpers({
    exampleMapOptions: function () {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            var mark = Caches.findOne(this._id);
            return {
                center: new google.maps.LatLng(mark.coord_x, mark.coord_y),
                zoom: 8
            };
        }
    }
});
Template.map.onCreated(function () {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('exampleMap', function (map) {
        // Add a marker to the map once it's ready
        var marker = new google.maps.Marker({
            position: map.options.center,
            animation: google.maps.Animation.DROP,
            map: map.instance
        });
    });
});