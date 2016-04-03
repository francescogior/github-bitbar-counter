import request from 'request'

const fetchOne = (endpoint) => new Promise((resolve, reject) => {
  request.get({url: endpoint }, (error, response, body) => {
    if (error) {
      reject(error)
    }
    resolve(JSON.parse(body))
  })
})

export default (...endpoints) => Promise.all(endpoints.map(fetchOne))
