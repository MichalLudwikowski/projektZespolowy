Template.profile.helpers({
    profFunc: function () {
        return Meteor.users.findOne({
            username: this.username
        });
    }
});