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
Template.cachedetails.events({
    "click #target": function () {
        Meteor.users.update({
            _id: Meteor.userId()
        }, {
            $set: {
                "profile.cache": this._id
            }
        });
    }
});