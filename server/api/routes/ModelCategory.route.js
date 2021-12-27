module.exports = function (app) {
  const ModelCategory = require("../controllers/ModelCategory.controller");
  app.route("/ModelCategory/FindbyId/:_id").get(ModelCategory.FindbyId);
  app.route("/ModelCategory/FindAll").get(ModelCategory.FindAll);
  app.route("/ModelCategory/create").post(ModelCategory.Create);
  app.route("/ModelCategory/update").post(ModelCategory.Update);
  app.route("/ModelCategory/delete/:_id").post(ModelCategory.Delete);
  app.route("/Model/capture").get(ModelCategory.Capture);
};
