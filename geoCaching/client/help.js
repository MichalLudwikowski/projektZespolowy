Template.help.helpers({
    getIt: function () {
        var id = this._id;
        return Caches.find({
            _id: id
        });
    }
});

Template.help.events({
    "click #found": function () {
        Meteor.users.update({
            _id: Meteor.userId()
        }, {
            $set: {
                "profile.cache": ""
            }
        });
    }
});