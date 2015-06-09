Template.owner.helpers({
    ownerDetails: function () {
        var cachy = Meteor.users.find({
            _id: this.owner
        });
        return cachy;
    }
});