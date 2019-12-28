var express = require('express');
var router = express.Router();
const defaultRes = require('../../../module/utils/utils');
const statusCode = require('../../../module/utils/statusCode');
const resMessage = require('../../../module/utils/responseMessage')
const db = require('../../../module/pool');
const jwtUtils = require('../../../module/jwt');


router.get('/', async (req, res) => {
    // Instantiate
    res.status(200).send(defaultRes.successTrue(statusCode.OK, resMessage.SIGNIN_SUCCESS))
})

router.get('/info', async (req, res) => {
    // Instantiate
    res.status(200).send(defaultRes.successTrue(statusCode.OK, resMessage.SIGNIN_SUCCESS))
})


router.get('/:idx', async (req, res) => {
    // Instantiate
    res.status(200).send(defaultRes.successTrue(statusCode.OK, resMessage.SIGNIN_SUCCESS))
})




module.exports = router;