Template.logSubmit.events({
    'submit form': function (e, template) {
        e.preventDefault();


        var data = new Date();
        var $body = $(e.target).find('[name=body]');
        var comment = {
            body: $body.val(),
            cacheId: template.data._id
        };
        Logs.insert({
            body: comment.body,
            cacheId: comment.cacheId,
            ovner: Meteor.user().username,
            addedAt: data.toLocaleDateString()
        });
        $('#body').val("");
    }
});