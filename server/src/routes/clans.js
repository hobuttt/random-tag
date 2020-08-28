const axios = require('axios');
axios.defaults.baseURL = process.env.WOTB_URL
const wotbApiKey = process.env.WOTB_API_KEY
const vehiclesInfoFields = 'name, tank_id, is_premium, nation, tier, type, images'
const { Router } = require('express')
const router = new Router()

const axiosGet = (axiosPath, req, res, params) => {
  axios.get(axiosPath, {params: {application_id: wotbApiKey,
  ...params}}).then(response => {
    res.header("Access-Control-Allow-Origin", req.get('origin'));
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.send(response.data)
    res.status(200)
  }).catch(err => {
    res.status(500).send({ message: err })
  })
}

router.get('/clan/list', (req, res) => {
  axiosGet('/clans/list/', req, res, {search: req.query.search, page_no: req.query.page_no, limit: req.query.limit})
})

router.get('/clan/info', (req, res) => {
  axiosGet('/clans/info/', req, res, {clan_id: req.query.id})
})

router.get('/clan/members', (req, res) => {
  axiosGet('/clans/accountinfo/', req, res, {fields: 'account_name, account_id', account_id: req.query.account_id})
})

// TODO перенести в другой роут
router.get('/member/info', (req, res) => {
  axiosGet('/tanks/stats/', req, res, {account_id: req.query.id})
})

router.get('/vehicles/info', (req, res) => {
  axiosGet('/encyclopedia/vehicles/', req, res, {fields: vehiclesInfoFields, tank_id: req.query.ids})
})


module.exports = router
