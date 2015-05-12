Template.login.events({
    'click #login-button': function (e, t) {
        e.preventDefault();
        var username = $("#login-username").val(),
            password = $("#login-password").val();
        Meteor.loginWithPassword(username, password, function (err) {
            if (err)
                alert("Błąd");
            else {
                alert("Zalogowano pomyślnie");
                Router.go("main");
            }
        });
        return false;
    }
});