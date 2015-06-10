Template.main.helpers({
    getCache: function () {
        if (Meteor.user().profile.cache != "")
            return true;
        return false;
    }
});