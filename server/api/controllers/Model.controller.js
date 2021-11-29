const mongoose = require('mongoose');
const Model = require('../models/Model.model');
const multer = require('multer');
const path = require('path');
const fs = require('fs')
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
    const query = { ModelCategory: !!req.params.id ? req.params.id : 0 };
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
    const query = { _id: !!req.params._id ? req.params._id : 0 };
    Model.findByIdAndDelete(query, function (err, result) {
        if (err) {
            return res.status(400).send({ returnCode: -1, data: err });
        } else {
            deleteFile(result.ModelName,'obj');
            deleteFile(result.ModelName,'mtl');
            deleteFile(result.ModelName,'jpg');
            return res.json({ returnCode: 1, data: result });
            
        }
    });
}

const deleteFile = (name,doc) => {
    var filePath =  path.join(__dirname,`../../../public/obj/${name}.${doc}`);
    fs.unlinkSync(filePath);
}
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        let dev = path.join(__dirname,'../../../public/obj')
        cb(null, dev);
    },
    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        console.log(file)
        // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        cb(null, file.fieldname);
    }
});
// const imageFilter = function(req, file, cb) {
//     // Accept images only
//     if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
//         req.fileValidationError = 'Only image files are allowed!';
//         return cb(new Error('Only image files are allowed!'), false);
//     }
//     cb(null, true);
// };

const UploadFile = async function (req,res) {
    //  let upload = multer({ storage: storage, fileFilter: imageFilter }).single('profile_pic');
    const nameFile = req.params.name;
    console.log(typeof nameFile )
    let upload = multer({ storage: storage }).single(nameFile);
    
    upload(req, res, function(err) {
        if (!req.file) {
            return res.send({returnCode:'-1', data: err});
        }
        else if (err instanceof multer.MulterError) {
            return res.send({returnCode:'-1', data: err});
        }
        else if (err) {
            return res.send({returnCode:'-1', data: err});
        }
        return res.send({returnCode:'1'});
    });

}
module.exports = {
    FindbyId,
    FindByModelCategory,
    Create,
    Update,
    Delete,
    UploadFile
}