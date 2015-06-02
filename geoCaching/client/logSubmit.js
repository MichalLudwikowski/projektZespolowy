Template.logSubmit.events({
    'submit form': function (e, template) {
        e.preventDefault();

        var $body = $(e.target).find('[name=body]');
        var comment = {
            body: $body.val(),
            cacheId: template.data._id
        };
        Logs.insert({
            body: comment.body,
            cacheId: comment.cacheId
        });
        $('body').val("");
    }
});