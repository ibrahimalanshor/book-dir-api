const path = require('path')

module.exports = function(dir = '') {
  return path.normalize(path.join(__dirname + '/../' + dir))
}