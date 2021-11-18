const httpStatus = require('http-status');
const multer = require('multer');
const mongoose = require('mongoose');
const Model = require('../models/Model.model');
var ObjectID = require('mongodb').ObjectID;
mongoose.Promise = global.Promise;

const FindbyId = async function (req, res) {
    const query = { _id: !!req.params._id ? req.params._id : 0 };
    Model.find(query, function (err, result) {
        if (err) {
            return res.status(400).send({ returnCode: -1, data: err });
        } else {
            return res.json({ returnCode: 1, data: result });
        }
    });
}

const FindByModelCategory = async function (req, res) {
    const query = { ModelCategory: !!req.params.code ? req.params.code : 0 };
    Model.find(query, function (err, result) {
        if (err) {
            return res.status(400).send({ returnCode: -1, data: err });
        } else {
            return res.json({ returnCode: 1, data: result });
        }
    });
}

const Create = async function (req, res) {
    const model = new Model(req.body);
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
        ModelName: req.body.ModelName,
        ModelCategory: req.body.ModelCategory,
        ModelDescription: req.body.ModelDescription,
        ModelObj: req.body.ModelObj,
        ModelMtl: req.body.ModelMtl,
        ModelMaterial: req.body.ModelMaterial
    };
    const newValues = { $set: queryUpdate };
    Model.findOneAndUpdate(query, newValues, function (err, result) {
          if (err) {
            return res.status(400).send({ returnCode: -1, data: err });
          } else {
            return res.json({ returnCode: 1, data: result });
          }
    });
}

const Delete = async function (req, res) {
    const query = { _id: !!req.params.code ? req.params.code : 0 };
    Model.findByIdAndDelete(query, function (err, result) {
        if (err) {
            return res.status(400).send({ returnCode: -1, data: err });
        } else {
            return res.json({ returnCode: 1, data: result });
        }
    });
}

module.exports = {
    FindbyId,
    FindByModelCategory,
    Create,
    Update,
    Delete,
}