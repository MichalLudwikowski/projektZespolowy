Template.cacheListAll.helpers({
    cachesAll: function () {
        var cachy = Caches.find().fetch();
        return cachy;
    }
});