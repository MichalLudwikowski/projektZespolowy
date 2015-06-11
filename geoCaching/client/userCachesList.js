Template.userCachesList.helpers({
    caches: function () {

        var cachy = Caches.find({

            owner: Meteor.userId()
        });
        return cachy;
    },
    czyMaSkrzynie: function () {
        var cachy = Caches.find({
            owner: Meteor.userId()
        });
        if (cachy.count() == 0) {
            console.log('puste');
            return false;
        } else {
            console.log('pelne');
            return true;
        }
    }
});