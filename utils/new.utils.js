module.exports = {
  apiUrl: (endPoint, parameters) => {
    if (parameters !== null) {
      const apiKey = process.env.API_KEY
      return `https://newsapi.org/v2/${endPoint}?${parameters}&apiKey=${apiKey}`
    }
    return `https://newsapi.org/v2/${endpoint}?apiKey=${apiKey}`
  }
}
