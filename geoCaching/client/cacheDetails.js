Template.cachedetails.helpers({
    details: function () {
        var cachy = Caches.find({
            _id: this._id
        });
        return cachy;
    }
});