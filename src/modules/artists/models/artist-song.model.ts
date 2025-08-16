import { SimpleSongModel } from '#modules/songs/models'

// Suppose rawSongs = ArtistAPIResponseModel se aaya topSongs array
const simplifiedSongs = rawSongs.topSongs.map(song => ({
  id: song.id,
  title: song.title
}))

// Return JSON
return {
  total: simplifiedSongs.length,
  songs: simplifiedSongs
}
