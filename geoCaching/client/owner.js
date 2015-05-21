Template.owner.helpers({
    ownerDetails: function () {
        var details = Session.get("details");
        var cachy = Meteor.users.find({
            _id: details[0].owner
        });
        return cachy;
    }
});