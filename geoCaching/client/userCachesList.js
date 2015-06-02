Template.userCachesList.helpers({
    caches: function () {
        var cachy = Caches.find({
            owner : Meteor.userId()
        });
        return cachy;
    }
});