module.exports = function (app) {
	const Model = require('../controllers/Model.controller');
	app.route('/Model/FindbyId/:_id')
		.get(Model.FindbyId);
	app.route('/Model/FindByModelCategory/:id')
		.get(Model.FindByModelCategory);
	app.route('/Model/create')
		.post(Model.Create);
	app.route('/Model/update')
		.post(Model.Update);
	app.route('/Model/delete/:_id')
		.post(Model.Delete);
	app.route('/Model/uploadFile/:name')
		.post(Model.UploadFile)
}