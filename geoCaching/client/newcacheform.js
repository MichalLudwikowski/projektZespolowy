Template.newcache.events({
    "click #submitbutton": function (event) {
        // This function is called when the new task form is submitted
        event.preventDefault();
        var name = $("#name").val(),
            desc = $("#desc").val(),
            coord_x = $("#coord_x").val(),
            coord_y = $("#coord_y").val(),
            halpPlox = $("#help").val(),
            size = $('#options :selected').text();
        owner = Meteor.userId();

        Caches.insert({
            owner: owner,
            name: name,
            size: size,
            desc: desc,
            coord_x: coord_x,
            coord_y: coord_y,
            help: halpPlox
        });
        Router.go('main');


        // Prevent default form submit
        return false;
    }
});