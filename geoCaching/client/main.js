Template.main.helpers({
    getCache: function () {
        if (Meteor.userId() != null) {
            if (Meteor.user().profile.cache != "")
                return true;
            return false;
        }
        return false;
    }
});