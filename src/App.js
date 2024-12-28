import Navbar from "./components/Navbar";
import React, { useEffect, useState } from 'react'
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import './App.css';

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialurl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (initialurl) => {
    fetch(initialurl)
      .then(response => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error));
  }

  const onPrevius = () => {
    fetchCharacters(info.prev)
  }

  const onNext = () => {
    fetchCharacters(info.next)
  }

  useEffect(() => {
    fetchCharacters(initialurl);

  }, [])

  return (
    <div className="app-background">
      <Navbar brand="Rick and Morty App" />
      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext} />
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext} />
      </div>
    </div>
  );
}

export default App;