require('babel/polyfill')
require('babel/register')({
  stage: 0
})

/*
  TODO: opts
  max pages = 1
  user = BYUTelevision
  output style = space-delimited

*/

require('../lib/urls')()
