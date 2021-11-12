const repo = {}
const model = require('../model/index')
const moment = require('moment')
repo.create = async (data) => {
    data.createdAt = moment().format()
    let result = await model.tdOwned.create(data);
    return result
}
repo.get = async (where) => {
    let result = await model.tdOwned.findOne({
        where: where
    })
    return result
}
repo.getAll = async () => {
    let result = await model.tdOwned.findAll()
    return result
}
repo.update = async (data, where) => {
    let result = await model.tdOwned.update(data,{
        where: where
    })
    return result
}
repo.delete = async (where) => {
    let result = await model.tdOwned.destroy({
        where: where
    })
    return result
}
module.exports = repo