const utils = require('../utils/new.utils')
const axios = require('axios')

module.exports = {
  getNews: (req, res) => {
    const { endpoint } = req.params
    let queryKey = Object.keys(req.query);
    let queryParams;
    if (queryKey.length > 0) {
      queryKey = queryKey.join()
      queryParams = queryKey && `${queryKey}=${req.query[queryKey]}`
    }
    const newsUrl = typeof queryParams === 'string'
      ? utils.apiUrl(endpoint, queryParams)
      : utils.apiUrl(endpoint)
    axios.get(newsUrl)
      .then((response) => {
        const apiResponse = {
          ...response.data
        }
        res.status(200).send(apiResponse)
      })
      .catch((errors) => {
        res.status(404).send({ errors })
      })
  }
}
