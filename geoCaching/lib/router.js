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
Router.route('/map', function () {
    this.render('map');
});
Router.route('/newcache', function () {
    this.render('newcache');
});
Router.route('/cachedetails', function () {
    this.render('cachedetails');
});
Router.route('/myProfile', function () {
    this.render('myProfile');
});
Router.route('/userCachesList', function () {
    this.render('userCachesList');
});