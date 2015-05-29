Template.userCachesListItem.events({
    'click #take': function () {
        var id = this._id;
        var data = Caches.find({
            _id: id
        }).fetch();
        Session.set("mark", data);
    },
    'click #remove': function () {
        var id = this._id;
        var data = Caches.remove({
            _id: id
        });
    }

});