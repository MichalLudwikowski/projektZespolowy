Template.navbar.helpers({
    isLoggedIn: function () {
        if (Meteor.userId() != null)
            return true;
        else
            return false;
    }
});
Template.navbar.events({
    'click #logout': function () {
        Router.go("main");
        Meteor.logout();
    },

    'click #myProfile': function () {
        Router.go("myProfile");
    }
});