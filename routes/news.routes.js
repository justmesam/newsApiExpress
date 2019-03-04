const newsController = require('../controllers/news.ctrl')

module.exports = (router) => {
  router
    .route('/news/:endpoint')
    .get(newsController.getNews)
}
