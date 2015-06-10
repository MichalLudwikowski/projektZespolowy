Template.help.helpers({
    getIt: function () {
        var id = this._id;
        return Caches.find({
            _id: id
        });
    }
});