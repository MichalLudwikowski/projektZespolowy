Template.cachedetails.helpers({
    details: function () {
        var details = Session.get("details");
        var cachy = Caches.find({
            _id: details[0]._id
        });
        return cachy;
    }
});