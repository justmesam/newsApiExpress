const utils = require('../utils/new.utils')
const axios = require('axios')

module.exports = {
  getNews: (req, res) => {
    const { endpoint } = req.params
    const queryKey = Object.keys(req.query).join()
    const parameters = queryKey && `${queryKey}=${req.query[queryKey]}`
    const newsUrl = utils.apiUrl(endpoint, parameters)
    axios.get(newsUrl)
      .then((response) => {
        const apiResponse = {
          ...response.data
        }
        res.status(200).send(apiResponse)
      })
      .catch((errors) => {
        res.status(404).send(errors)
      })
  }
}
