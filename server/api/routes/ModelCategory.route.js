module.exports = function (app) {
	const ModelCategory = require('../controllers/ModelCategory.controller');
	app.route('/ModelCategory/FindbyId')
		.get(ModelCategory.FindbyId);
	app.route('/ModelCategory/FindAll')
		.get(ModelCategory.FindAll);
	app.route('/ModelCategory/create')
		.post(ModelCategory.Create);
	app.route('/ModelCategory/update')
		.post(ModelCategory.Update);
	app.route('/ModelCategory/delete')
		.post(ModelCategory.Delete);
}