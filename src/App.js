import { useState } from "react";
import "./App.css";
import SongList from "./components/SongList";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const allSongs = [
    {
      urlImage:
        "https://upload.wikimedia.org/wikipedia/id/8/8f/Taylor_Swift_-_Speak_Now_cover.png",
      artist: "Taylor Swift",
      title: "Speak Now",
    },
    {
      urlImage:
        "https://upload.wikimedia.org/wikipedia/en/1/1f/Taylor_Swift_-_Taylor_Swift.png",
      artist: "Taylor Swift",
      title: "You Belong to Me",
    },
    {
      urlImage:
        "https://cdns-images.dzcdn.net/images/cover/0ade4a9e6f79c717fa34b884055cbcb3/264x264.jpg",
      artist: "d4vd",
      title: "Here With Me",
    },
    {
      urlImage:
        "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/03/01/AM-539095762.jpg",
      artist: "Anggi Marito",
      title: "Tak Segampang Itu",
    },
  ];
  const mostPlayed = [
    {
      urlImage:
        "https://upload.wikimedia.org/wikipedia/en/1/1f/Taylor_Swift_-_Taylor_Swift.png",
      artist: "Taylor Swift",
      title: "You Belong to Me",
    },
    {
      urlImage:
        "https://cdns-images.dzcdn.net/images/cover/0ade4a9e6f79c717fa34b884055cbcb3/264x264.jpg",
      artist: "d4vd",
      title: "Here With Me",
    },
  ];

  const handleChangeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  const filteredData = () => {
    const data = allSongs.filter((item) => {
      return item.title.toLowerCase().match(searchInput.toLowerCase());
    });
    return data;
  };

  return (
    <div className="App">
      <h1>Spotify-like Music Player</h1>
      <section>
        <div>
          <label htmlFor="name">Song Name:</label>
          <input type="text" id="name" onChange={handleChangeSearchInput} />
        </div>
        <h2>All Songs</h2>
        <SongList songs={filteredData()}></SongList>
      </section>
      <section>
        <h2>Most Played Songs</h2>
        <SongList songs={mostPlayed}></SongList>
      </section>
    </div>
  );
}

export default App;
