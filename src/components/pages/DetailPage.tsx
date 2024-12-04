import { useLoaderData } from "react-router-dom"
import "../../styles/detailpage.css"

function DetailPage() {
  const data = useLoaderData();
  console.log(data)
  return (
    
    <>
      <section id="detail-container">
        <div id="card-detail-container">
        <img src={data.image} alt={`picture of ${data.name}`}/>
        <section id="charac-infos">
          <hgroup>
            <h2>{data.name}</h2>
            <p><strong>{data.status}</strong></p>
          </hgroup>
          <hgroup>
            <h3>Last known location:</h3>
            <p>{data.location.name}</p>
          </hgroup>
          <hgroup>
            <h3>First seen in:</h3>
            <p>{data.episode[0]}</p>
          </hgroup>
        </section>
        </div>

      </section>    
    </>
  )
}

export default DetailPage