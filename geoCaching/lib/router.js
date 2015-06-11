Router.route('/', function () {
    this.render('home');
});
Router.route('/main', function () {
    this.render('main');
});
Router.route('/login', function () {
    this.render('login');
});
Router.route('/register', function () {
    this.render('register');
});
Router.route('map', {
    path: '/map/:_id',
    data: function () {
        return Caches.findOne(this.params._id);
    }
});
Router.route('/newcache', function () {
    this.render('newcache');
});
Router.route('cachedetails', {
    path: '/cachedetails/:_id',
    data: function () {
        return Caches.findOne(this.params._id);
    }
});
Router.route('help', {
    path: '/help/:_id',
    data: function () {
        return Caches.findOne({
            _id: this.params._id
        });
    }
});
Router.route('profile', {
    path: '/profile/:name',
    data: function () {
        console.log(this.params.name);
        return Meteor.users.findOne({
            username: this.params.name
        });
    }
});
/*
Router.route('help', {
    path: '/help'
});*/
Router.route('/myProfile', function () {
    this.render('myProfile');
});

Router.route('cacheEdit', {
    path: '/cacheEdit/:_id',
    data: function () {
        return Caches.findOne(this.params._id);
    }
});

Router.route('searchCache', {
    path: '/searchCache/:_id',
    data: function () {
        return Caches.findOne(this.params._id);
    }
});
Router.route('/userCachesList', function () {
    this.render('userCachesList');
});
Router.route('/cacheListAll', function () {
    this.render('cacheListAll');
});