const verifyObject = obj => {
  for (var key in obj) {
    if (obj[key] !== '') return true
  }
  return false
}

export default verifyObject
