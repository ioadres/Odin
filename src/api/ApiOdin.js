import trae from trae

const url = ""

trae.baseUrl(url)

const ApiOdin = {}

ApiOdin.auntheticated = function(username, password) {
  return trae.post('/auth', {username, password})
  .then(res => res.data)
}

export default ApiOdin;