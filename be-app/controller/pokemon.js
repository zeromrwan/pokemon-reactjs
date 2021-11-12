const controller = {};
const service = require('../services/index')
controller.create = async (req, res) => {
    try {
        await service.create(req.body)
        res.status(201).json({
            code: '01',
            message: 'Success'
        });   
    } catch (error) {
        res.status(400).json({
            code: '01',
            message: error.message
        });
    }
};

controller.getAll = async (req,res) => {
    try {
        let data = await service.getAll()
        res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader('Access-Control-Allow-Headers',"*");
  res.header('Access-Control-Allow-Credentials', true);
        res.status(201).json({
            code: '01',
            message: 'Success',
            data: data
        });   
    } catch (error) {
        res.status(400).json({
            code: '01',
            message: error.message
        });
    }
}
controller.get = async (req, res) => {
    try {
        let id = req.params.id
        let data = await service.get(id)
        res.status(201).json({
            code: '01',
            message: 'Success',
            data: data
        });   
    } catch (error) {
        res.status(400).json({
            code: '01',
            message: error.message
        });
    }
}
controller.renameNickname = async (req, res) => {
    try {
        let id = req.params.id
        let data = await service.rename(id)
        res.status(201).json({
            code: '01',
            message: 'Success',
            data: {
                nickname: data
            }
        });   
    } catch (error) {
        res.status(400).json({
            code: '01',
            message: error.message
        });
    }
}
controller.release = async (req, res) => {
    try {
        let id = req.params.id
        let statusRelease = await service.release(id)
        res.status(201).json({
            code: '01',
            message: 'Success',
            data: {
                status: statusRelease
            }
        });   
    } catch (error) {
        res.status(400).json({
            code: '01',
            message: error.message
        });
    }
}
module.exports = controller