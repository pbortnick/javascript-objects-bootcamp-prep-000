var playlist = {
  'Foo Fighters': 'Everlong',
  Prince: 'Purple Rain'
}
function updatePlaylist(object, key, value) {
  object[key] = value
  return object
}

function removeFromPlaylist(object, key) {
  delete object[key]
  return object
}