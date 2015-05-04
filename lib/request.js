const axios = require('axios')

var URL = 'https://gdata.youtube.com/feeds/api/users/BYUTelevision/uploads?max-results=50&start-index=1&prettyprint=true&fields=entry(title,media:group(media:player(@url)))&alt=json'

function request() {
  return axios.get(URL, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

module.exports = async function (done) {
  try {
    var res = await request()
    // console.log('res.data')
    console.log(require('util').inspect(res.data, {
      depth: 7
    }))
    if (res.data.errors)
      return done(res.data.errors)

    return done(null, res.data)

  } catch (e) {
    return done(e)
  }
}
