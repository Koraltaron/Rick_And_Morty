import Cards from "../Cards"
import "../../styles/home-page.css"
import type { ChangeEvent } from "react";
import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import useTheme from "../../utils/useTheme";

interface Character {
  image: string,
  name: string,
  id: number    
}

function HomePage () {
  const data = useLoaderData() ;
  const characters = data.results as Character[];
  const [page, setPage] = useState(1);

  const[text, setText] = useState<string>("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if(event.currentTarget) {
      setText(event.currentTarget.value)
    }
  }

  /* Fetch with useEffect : */

  const [character, setCharacter] = useState<Character[]>([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => setCharacter(data.results))
  }, []) 
  

  const filteredCharacters = text ? characters.filter((el) => el.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())) : characters;
 
  const themeContext = useTheme();
  
  function handlePage () {
    console.warn('Yep')
  }

  return(
    <>
      <main className={`main-home ${themeContext?.theme && "light-theme"}`}>
        <h1>Rick and Morty</h1>
        <input onChange={handleChange} type="text" placeholder="Trouve ton personnage préféré" value={text}></input>
        <section id="section-container">
          <button type="button" onClick={handlePage}>Previous</button>
          {filteredCharacters.length ? filteredCharacters.map((character) => {
            return (
            <Cards name={character.name} id={character.id} image={character.image} key={character.id}/> )})
            : 
            <section className="default-search">
              <figure>
                <img src={characters[0].image} alt={characters[0].name}/>
                <figcaption>{characters[0].name}</figcaption>
              </figure>
              <p>Désolé, aucun personnage ne correspond à votre recherche</p>  
            </section>}
            <button type="button" onClick={handlePage}>Next</button>
        </section>
      </main>
    </>
  )
}

export default HomePage