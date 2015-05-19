Template.cache.events({
    'click #take': function () {
        var name = $('#take').val();
        var data = Caches.find({
            name: name
        }).fetch();
        Session.set("mark", data);
    }
});