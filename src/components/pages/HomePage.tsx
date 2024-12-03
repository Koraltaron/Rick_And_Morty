import Cards from "../Cards"
import "../../styles/home-page.css"
// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

interface Character {
  image: string,
  name: string,
  id: number    
}

function HomePage () {
  const data = useLoaderData() ;
  const characters = data.results as Character[];
  
  /* Fetch with useEffect :

  const [character, setCharacter] = useState<Character[]>([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => setCharacter(data.results))
  }, []) 
  */

  return(
    <>
      <main>
        <h1>Rick and Morty</h1>
        <input type="text" placeholder="Trouve ton personnage préféré"></input>
        <section id="section-container">
          {characters.map((el) => (
          <Cards name={el.name} image={el.image} key={el.id}/>)
          )}
        </section>
        
      </main>
    </>
  )
}

export default HomePage