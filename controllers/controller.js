const needle = require('needle')
const url = require('url')
const API_KEY = process.env.API_KEY
const API_KEY_NAME = process.env.API_KEY_NAME
const BASE_URL = process.env.BASE_URL

module.exports = {
    fetchNews: async (req, res) => {
        try {
            const params = new URLSearchParams({
                ...url.parse(req.url, true).query
            })
            const page = !params.get('page') ? 1 : Number(params.get('page')) > 0 ? params.get('page') : 1
            const querying = params.get('q') ? true : false;
            const response = await needle('get', `${BASE_URL}search?${querying && `q=${params.get('q')}`}&page=${Number(page)}&page-size=${querying ? '120' : '30'}&${API_KEY_NAME}=${API_KEY}&show-fields=thumbnail`)
            const data = response.body
            return res.status(200).json({data})
        } catch (error) {
            return res.status(500).json({error})
        }
    }
}