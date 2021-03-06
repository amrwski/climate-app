const express = require("express")
const router = express.Router()
const Twitter = require("twit")

router.get("/politics/twit", (req, res) => {
  let client = new Twitter({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_KEY_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  })

  client
    .get("search/tweets", { q: ["climatechange", "globalwarming"] })
    .then(response => {
      res.json(response.data)
    })
    .catch(err => console.error(err))
})

module.exports = router
