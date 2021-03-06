const string = value => {
  return /^([a-z]+\s)*[a-z]+$/gi.test(value)
}

module.exports = {
  string
}