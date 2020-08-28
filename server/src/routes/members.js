const axios = require('axios');
const config = require('../../config/config')
axios.defaults.baseURL = config.wotbBaseURL
const wotbApiKey = process.env.WOTB_API_KEY

const { Router } = require('express')
const router = new Router()

router.get('/member/info', (req, res) => {
  axios.get('/clans/list/', {params: {application_id: wotbApiKey, search: req.query.search, page_no: req.query.page_no, limit: req.query.limit}}).then(response => {
    res.header("Access-Control-Allow-Origin", req.get('origin'));
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.send(response.data)
    res.status(200)
  }).catch(err => {
    res.status(500).send({ message: err })
  })

})
