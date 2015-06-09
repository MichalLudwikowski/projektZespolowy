Template.cachedetails.helpers({
    details: function () {
        var cachy = Caches.find({
            _id: this._id
        });
        return cachy;
    },

    logs: function () {
        var log = Logs.find({
            cacheId: this._id
        });
        return log;
    }
});