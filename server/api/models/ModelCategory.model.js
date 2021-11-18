const mongoose = require('mongoose'),
Schema = mongoose.Schema,
autoIncrement = require('mongoose-auto-increment'),
mongoosePaginate = require('mongoose-paginate');

mongoose.Promise = global.Promise;
autoIncrement.Promise = global.Promise;

const ModelCategorySchema = new Schema({
    ModelCategoryName: {
        type: String,
        trim: true
    },
    ModelCategoryDescription: {
        type: String,
        trim: true
    }
});

ModelCategorySchema.plugin(autoIncrement.plugin, 'ModelCategory');
ModelCategorySchema.plugin(mongoosePaginate);
module.exports = mongoose.model('ModelCategory', ModelCategorySchema, 'ModelCategory');