const express = require('express')
const validate = require('../../../middlewares/validate')
const { addressController } = require('../../controllers')
const { addressValidation } = require('../../validations')

const router = express.Router()

router.get('/provinces', addressController.getProvinces)
router.get(
    '/provinces/:provinceID/districts',
    validate(addressValidation.getDistrictByProvinceSchema),
    addressController.getDistrictsByProvince
)
router.get(
    '/districts/:districtID/wards',
    validate(addressValidation.getWardsByDistrict),
    addressController.getWardsByDistrict
)

module.exports = router
