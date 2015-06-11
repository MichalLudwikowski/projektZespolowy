Template.register.events({
    'click #register-button': function (e, t) {
        e.preventDefault();
        var username = $("#register-username").val(),
            password = $("#register-password").val();
        if (isValidPassword(password)) {
            Accounts.createUser({
                username: username,
                password: password,
                profile: {
                    cache: "",
                    points: 0
                }
            }, function (err) {
                if (err) {
                    alert("Podany login już istnieje w bazie");
                } else {
                    alert("Pomyślnie utworzono konto i zalogowano. Przenoszę na stronę główną");
                    Router.go("/main");
                }

            });
        } else {
            alert("Hało musi mieć co najmiej 8 znaków");
        }

        return false;


    }
});
var isValidPassword = function (val) {
    if (val.length > 7)
        return true;
    else
        return false;
};