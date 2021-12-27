const mongoose = require("mongoose");
const ModelCategory = require("../models/ModelCategory.model");
const Model = require("../models/Model.model");
const puppeteer = require("puppeteer");
const screenshot = require("screenshot-desktop");
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
};

const FindAllCategory = async function () {
  const query = {};
  return new Promise((resolve, reject) => {
    ModelCategory.find(query, function (err, result) {
      resolve(result);
      reject(err);
    });
  });
};

const FindByModelCategory = async function (name) {
  return new Promise((resolve, reject) => {
    const query = { ModelCategory: name };
    const options = {
      select: "_id ModelName ModelDescription ModelImage",
      limit: 100,
    };
    Model.paginate(query, options).then(function (result) {
      resolve(result.docs);
    });
  });
};
const FindAll = async function (req, res) {
  await FindAllCategory()
    .then((result) => {
      let newCategory = [];
      [...result].map(async (element, index) => {
        let newCateItem = {
          _id: element._id,
          ModelCategoryName: element.ModelCategoryName,
          Item: [],
        };
        await FindByModelCategory(element.ModelCategoryName).then((result) => {
          newCateItem.Item = !!result ? result : null;
        });
        newCategory.push(newCateItem);
        if (index === result.length - 1) {
          return res.json({ returnCode: 1, data: newCategory });
        }
      });
    })
    .catch((err) => {
      return res.status(400).send({ data: err });
    });
};

const Create = async function (req, res) {
  const model = new ModelCategory(req.body);
  model.save((err, result) => {
    if (err) {
      return res.status(400).send({ data: err });
    } else {
      return res.json({ returnCode: 1, data: result });
    }
  });
};

const Update = async function (req, res) {
  const query = { _id: req.body._id };
  const queryUpdate = {
    ModelCategoryName: req.body.ModelCategoryName,
    ModelCategoryDescription: req.body.ModelCategoryDescription,
  };
  const newValues = { $set: queryUpdate };
  ModelCategory.findOneAndUpdate(query, newValues, function (err, result) {
    if (err) {
      return res.status(400).send({ returnCode: -1, data: err });
    } else {
      return res.json({ returnCode: 1, data: result });
    }
  });
};

const Delete = async function (req, res) {
  const query = { _id: !!req.params._id ? req.params._id : 0 };
  ModelCategory.findByIdAndDelete(query, function (err, result) {
    if (err) {
      return res.status(400).send({ returnCode: -1, data: err });
    } else {
      return res.json({ returnCode: 1, data: result });
    }
  });
};

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//     cb(null, '../public')
//   },
//   filename: function (req, file, cb) {
//     console.log(file)
//     cb(null, Date.now() + '-' +file.originalname )
//   }
// })

// var upload = multer({ storage: storage }).single('file')

// const importToFile = async (req, res, next) => {
//     //console.log(req.file)
//     upload(req, res, function (err) {
//         if (err instanceof multer.MulterError) {
//             return res.status(500).json(err)
//         } else if (err) {
//             return res.status(500).json(err)
//         }
//         return res.status(200).send(req.file)
//     })

// };
const Capture = async (req, res) => {
  screenshot({ format: "png", filename: "./public/shot.png" })
    .then((img) => {
      return res.json({ returnCode: 1 });
    })
    .catch((err) => {
      return res.status(400).send({ returnCode: -1, data: err });
    });
  console.log("alo");
};

module.exports = {
  Capture,
  FindbyId,
  FindAll,
  Create,
  Update,
  Delete,
};
