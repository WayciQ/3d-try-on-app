const { Province, District, Ward } = require('../models')

const getProvinces = async () => {
    return Province.find({})
}

const getDistrictsByProvince = async (provinceID) => {
    return District.find({ province_Id: provinceID })
}

const getWardsByDistrict = async (districtID) => {
    return Ward.find({ district_Id: districtID })
}

module.exports = {
    getProvinces,
    getDistrictsByProvince,
    getWardsByDistrict,
}
