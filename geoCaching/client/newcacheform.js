// Inside the if (Meteor.isClient) block, right after Template.body.helpers:
Template.newcache.events({
    "click #submitbutton": function (event) {
        // This function is called when the new task form is submitted
        event.preventDefault();
        var name = $("#name").val(),
            desc = $("#desc").val(),
            coord_x = $("#coord_x").val(),
            coord_y = $("#coord_y").val();

        caches.insert({
            name: name,
            desc: desc,
            coord_x: coord_x,
            coord_y: coord_y
        });



        // Prevent default form submit
        return false;
    }
});