Template.help.helpers({
    getIt: function () {
        var id = Session.get("help");
        return Caches.find({
            _id: id
        });
    }
});