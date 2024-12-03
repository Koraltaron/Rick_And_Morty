import { NavLink } from "react-router-dom"
import "../styles/cards.css"

function Cards ({name, image, id}: {name: string, image: string, id : number}) {
  return(
    <>
      <section id="card-container">
        <NavLink to={`/detail/${id}`}>
          <figure>
            <img src={image} alt="Rick Sanchez" />
            <figcaption>{name}</figcaption>
          </figure>
        </NavLink>

      </section>
      
    </>
    
  )
}

export default Cards