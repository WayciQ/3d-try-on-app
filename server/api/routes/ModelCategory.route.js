module.exports = function (app) {
	const ImportFile = require('../controllers/ModelManager.controller');
	app.route('/importToHell')
		.post(ImportFile.importToFile);
}