import {AiFillDelete} from 'react-icons/ai'

import './index.css'

const SongsItems = props => {
  const {song, deleteSongFromPlaylist} = props
  const {id, imageUrl, name, genre, duration} = song

  const onDeleteSong = () => {
    deleteSongFromPlaylist(id)
  }

  const card = (
    <li className="song-card">
      <div className="thumbnail-info-cont">
        <img src={imageUrl} alt="track" className="thumbnail-img" />
        <div className="song-info">
          <p className="title">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-deletion-cont">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-btn"
          onClick={onDeleteSong}
          data-testid="delete"
        >
          <AiFillDelete size="25" color="#ffffff" />
        </button>
      </div>
    </li>
  )
  return card
}

export default SongsItems
