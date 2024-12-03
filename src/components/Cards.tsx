import "../styles/cards.css"

function Cards ({name, image}: {name: string, image: string}) {
  return(
    <>
      <section id="card-container">
        <figure>
          <img src={image} alt="Rick Sanchez" />
          <figcaption>{name}</figcaption>
        </figure>
      </section>
      
    </>
    
  )
}

export default Cards