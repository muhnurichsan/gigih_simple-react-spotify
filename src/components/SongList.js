import SongItem from "./SongItem";

const SongList = ({ songs }) => {
  return (
    <ul className="song-list">
      {songs.map((item, index) => {
        return (
          <SongItem
            key={`songItem-${index}`}
            urlImage={item.urlImage}
            artist={item.artist}
            title={item.title}
          ></SongItem>
        );
      })}
    </ul>
  );
};

export default SongList;
