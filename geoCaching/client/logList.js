Template.logList.helpers({
    caches: function () {
        var log = Logs.find();
        return log;
    }
});