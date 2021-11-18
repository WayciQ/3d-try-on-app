const multer = require('multer');
const mongoose = require('mongoose');
const ModelCategory = require('../models/ModelCategory.model');
mongoose.Promise = global.Promise;

const FindbyId = async function (req, res) {
    const query = { _id: !!req.params._id ? req.params._id : 0 };
    ModelCategory.find(query, function (err, result) {
        if (err) {
            return res.status(400).send({ returnCode: -1, data: err });
        } else {
            return res.json({ returnCode: 1, data: result });
        }
    });
}

const FindAll = async function (req, res) {
    const query = { };
    ModelCategory.find(query, function (err, result) {
        if (err) {
            return res.status(400).send({ returnCode: -1, data: err });
        } else {
            return res.json({ returnCode: 1, data: result });
        }
    });
}

const Create = async function (req, res) {
    const model = new ModelCategory(req.body);
    model.save((err, result) => {
        if (err) {
            return res.status(400).send({ data: err });
        } else {
            return res.json({returnCode: 1, data:result });
        }
    })
}

const Update = async function (req, res) {
    const query = { _id: req.body._id };
    const queryUpdate = {
        ModelCategoryName: req.body.ModelCategoryName,
        ModelCategoryDescription: req.body.ModelCategoryDescription
    };
    const newValues = { $set: queryUpdate };
    ModelCategory.findOneAndUpdate(query, newValues, function (err, result) {
          if (err) {
            return res.status(400).send({ returnCode: -1, data: err });
          } else {
            return res.json({ returnCode: 1, data: result });
          }
    });
}

const Delete = async function (req, res) {
    const query = { _id: !!req.params.code ? req.params.code : 0 };
    ModelCategory.findByIdAndDelete(query, function (err, result) {
        if (err) {
            return res.status(400).send({ returnCode: -1, data: err });
        } else {
            return res.json({ returnCode: 1, data: result });
        }
    });
}

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, '../public')
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(null, Date.now() + '-' +file.originalname )
  }
})

var upload = multer({ storage: storage }).single('file')

const importToFile = async (req, res, next) => {
    //console.log(req.file)
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })

};

module.exports = {
    importToFile,
    FindbyId,
    FindAll,
    Create,
    Update,
    Delete,
}