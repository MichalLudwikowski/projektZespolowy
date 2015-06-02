Template.cachedetails.helpers({
    details: function () {
        var cachy = Caches.find({
            _id: this._id
        });
        return cachy;
    },

    comments: function () {
        return Comments.find({
            cacheId: this._id
        });
    }
});