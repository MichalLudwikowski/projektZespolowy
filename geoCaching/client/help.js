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
        var user = Meteor.users.findOne({
            _id: Meteor.userId()
        });
        var points = user.profile.points + 10;
        Meteor.users.update({
            _id: Meteor.userId()
        }, {
            $set: {
                "profile.cache": "",
                "profile.points": points
            }
        });
    }
});