export const playerService = () => {
  return fetch('https://football-players-b31f2.firebaseio.com/players.json?print=pretty')
    .then(response => {
      return response.json()
    })
    .catch(error => {
      throw error
    })
}
