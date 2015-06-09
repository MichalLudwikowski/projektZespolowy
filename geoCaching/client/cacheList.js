var lat, lng;
Template.cacheList.rendered = function () {
    navigator.geolocation.getCurrentPosition(handleSync);
};
var handleSync = function (position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
};
Template.cacheList.helpers({
    caches: function () {

        var cachy = Caches.find();

        return cachy;
    }

});