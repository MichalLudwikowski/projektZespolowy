var lat, lng;
Template.cacheList.rendered = function () {
    navigator.geolocation.getCurrentPosition(handleSync);
};
var handleSync = function (position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
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
    return d; // returns the distance in meter
};
var rad = function (x) {
    return x * Math.PI / 180;
};
Template.cacheList.helpers({
    caches: function () {
        var j = 0;
        var i;
        var cachy = Caches.find().fetch();
        var tmp = [];
        var distance = 0;
        var rozmiar = Caches.find().count();
        for (i = 0; i < rozmiar; i++) {
            distance = getDistance(cachy[i].coord_x, cachy[i].coord_y, lat, lng);
            if (distance < 50000) {
                if (j <= 5) {
                    tmp[j++] = cachy[i];
                }
            }
        }
        return tmp;
    }
});