const httpStatus = require('http-status')
const catchAsync = require('../../utils/catch-async')
const { addressService } = require('../services')

const importToFile = catchAsync(async (req, res, next) => {
    
    const data = await addressService.importToFile();
    return res.status(httpStatus.OK).send(data);

});

module.exports = {
    importToFile,
}