const controller = {};
controller.index = async (req, res) => {
    //example
    res.status(200).json({
        code: '01',
        message: 'Success'
    });
};

module.exports = controller