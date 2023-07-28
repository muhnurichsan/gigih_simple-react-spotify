const SongItem = ({ urlImage, artist, title }) => {
  return (
    <li>
      <img src={urlImage} alt="song-album" />
      <div className="song-desc">
        <h4>{artist}</h4>
        <span>{title}</span>
      </div>
      <button>Add to playlist</button>
    </li>
  );
};

export default SongItem;
