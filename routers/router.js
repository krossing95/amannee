const { fetchNews } = require('../controllers/controller')

const router = require('express').Router()

router.get('/', fetchNews)

module.exports = router
