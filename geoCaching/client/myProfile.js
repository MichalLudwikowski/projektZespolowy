Template.myProfile.helpers({
    userName: function () {
        var nazawa = Meteor.user();
        return nazawa.username;
    },

    name: function () {
        var imie = Meteor.user();
        return imie.profile.name;
    },

    surname: function () {
        var imie = Meteor.user();
        return imie.profile.surname;
    },

    age: function () {
        var imie = Meteor.user();
        return imie.profile.age;
    }
});

Template.myProfile.events({
    'click #submitbutton': function () {
        var id = Meteor.userId();
        var imie = document.getElementById('name').value;
        var nazwisko = document.getElementById('surname').value;
        var wiek = document.getElementById('age').value;
        Meteor.users.update({
            _id: Meteor.userId()
        }, {
            $set: {
                "profile.name": imie,
                "profile.surname": nazwisko,
                "profile.age": wiek
            }
        });
    }
});