Template.cache.events({
    'click #take': function () {
        var name = $('#take').val();
        var data = Caches.find({
            name: name
        }).fetch();
        console.log(data);
        Session.set("mark", data);
    }
});