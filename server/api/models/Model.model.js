const mongoose = require('mongoose'),
Schema = mongoose.Schema,
autoIncrement = require('mongoose-auto-increment'),
mongoosePaginate = require('mongoose-paginate');

mongoose.Promise = global.Promise;
autoIncrement.Promise = global.Promise;

const ModelSchema = new Schema({
    ModelCode: {
        type: String,
        trim: true
    },
    ModelName: {
        type: String,
        trim: true
    },
    ModelCategory: {
        type: String,
        trim: true
    },
    ModelObj:{
        type: Object
    },
    ModelMtl: {
        type: Object
    },
    ModelMaterial: {
        type: Object
    },
    ModelStatus: {
        type: Number,
        trim: true
    }
});

ModelSchema.virtual('ModelCategory', {
    ref:'ModelCategory',
    localField:'ModelCategory',
    foreignField:'ModelCategoryCode',
    justOne:true
});

ModelSchema.plugin(autoIncrement.plugin, 'Model');
ModelSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Model', ModelSchema, 'Model');