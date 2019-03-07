const express = require('express')
const bodyParser = require("body-parser");

require('dotenv').config();

const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000
const router = express.Router()

routes(router)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', router)
app.listen(PORT, () => {
  console.log("News App server running at port :: ", PORT);
})
