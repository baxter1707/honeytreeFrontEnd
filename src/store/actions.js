export const LOAD_HONEY_LIST = "LOAD_HONEY_LIST"


export const loadHoneyInventory = () => {
  return dispatch => {

    let url = 'http://localhost:4000/jsonInventory'
    fetch(url)
    .then(response => response.json())
    .then(json => dispatch(loadInventory(json["item"])))

  }
}

export const loadInventory = (honey) => {
  return {
    type : LOAD_HONEY_LIST,
    honey : honey
  }
}
