module.exports = function (app) {
	const Model = require('../controllers/Model.controller');
	app.route('/Model/FindbyId')
		.get(Model.FindbyId);
	app.route('/Model/FindByModelCategory')
		.get(Model.FindByModelCategory);
	app.route('/Model/create')
		.post(Model.Create);
	app.route('/Model/update')
		.post(Model.Update);
	app.route('/Model/delete')
		.post(Model.Delete);
}