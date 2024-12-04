import Cards from "../Cards"
import "../../styles/home-page.css"
import type { ChangeEvent } from "react";
// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { useState } from "react";

interface Character {
  image: string,
  name: string,
  id: number    
}

function HomePage () {
  const data = useLoaderData() ;
  const characters = data.results as Character[];

  const[text, setText] = useState<string>("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if(event.currentTarget) {
      setText(event.currentTarget.value)
    }
  }

  /* Fetch with useEffect :

  const [character, setCharacter] = useState<Character[]>([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => setCharacter(data.results))
  }, []) 
  */

  const filteredCharacters = characters.filter((el) => el.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()));

  return(
    <>
      <main>
        <h1>Rick and Morty</h1>
        <input onChange={handleChange} type="text" placeholder="Trouve ton personnage préféré" value={text}></input>
        <section id="section-container">
          {filteredCharacters ? (filteredCharacters.map((character) => (
            <Cards name={character.name} id={character.id} image={character.image} key={character.id}/>)
          )): (<figure><img src ={characters[0].image} alt={characters[0].name}/><figcaption>Pas de personnage trouvé !</figcaption></figure>)}
        </section>
        
      </main>
    </>
  )
}

export default HomePage