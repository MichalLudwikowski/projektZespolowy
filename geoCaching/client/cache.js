Template.cache.events({
    'click #more': function () {
        var id = this._id;
        var data = Caches.find({
            _id: id
        }).fetch();
        Session.set("details", data);
    }

});