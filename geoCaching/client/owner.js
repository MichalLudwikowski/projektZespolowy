Template.owner.helpers({
    ownerDetails: function () {
        var cachy = Meteor.users.findOne({
            _id: this.owner
        });
        return cachy;
    }
});