const axios = require('axios');
const config = require('../../config/config')
axios.defaults.baseURL = config.wotbBaseURL
const wotbApiKey = process.env.WOTB_API_KEY
const vehiclesInfoFields = 'name, tank_id, is_premium, nation, tier, type, images'
const { Router } = require('express')
const router = new Router()

//TODO упростить

router.get('/clan/list', (req, res) => {
  axios.get('/clans/list/', {params: {application_id: wotbApiKey, search: req.query.search, page_no: req.query.page_no, limit: req.query.limit}}).then(response => {
    res.header("Access-Control-Allow-Origin", req.get('origin'));
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.send(response.data)
      res.status(200)
    }).catch(err => {
      res.status(500).send({ message: err })
    })

})

router.get('/clan/info', (req, res) => {
  // res.sendStatus(200)
  axios.get('/clans/info/', {params: {application_id: wotbApiKey, clan_id: req.query.id}}).then(response => {
    res.header("Access-Control-Allow-Origin", req.get('origin'));
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.send(response.data)
      res.status(200)
    }).catch(err => {
      res.status(500).send({ message: err })
    })

})

router.get('/clan/members', (req, res) => {
  axios.get('/clans/accountinfo/', {params: {application_id: wotbApiKey, fields: 'account_name, account_id', account_id: req.query.account_id}}).then(response => {
    res.header("Access-Control-Allow-Origin", req.get('origin'));
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.send(response.data)
      res.status(200)
    }).catch(err => {
      res.status(500).send({ message: err })
    })

})

// TODO перенести в другой роут
router.get('/member/info', (req, res) => {
  axios.get('/tanks/stats/', {params: {application_id: wotbApiKey, account_id: req.query.id}}).then(response => {
    res.header("Access-Control-Allow-Origin", req.get('origin'));
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.send(response.data)
      res.status(200)
    }).catch(err => {
      res.status(500).send({ message: err })
    })

})
router.get('/vehicles/info', (req, res) => {
  axios.get('/encyclopedia/vehicles/', {params: {application_id: wotbApiKey, fields: vehiclesInfoFields, tank_id: req.query.ids}}).then(response => {
    res.header("Access-Control-Allow-Origin", req.get('origin'));
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.send(response.data)
      res.status(200)
    }).catch(err => {
      res.status(500).send({ message: err })
    })

})


module.exports = router
