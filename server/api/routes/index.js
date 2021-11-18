module.exports = function (app) {
	require('./ModelCategory.route.js')(app);
	require('./Model.route.js')(app);
};