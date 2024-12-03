import { useLoaderData } from "react-router-dom"

function DetailPage() {
  const data = useLoaderData();
  console.log(data)
  return (
    
    <>
      <section>
        <img src={data.image} alt={`picture of ${data.name}`}/>
        <hgroup>
          <h2>{data.name}</h2>
          <p>{data.status}</p>
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
    </>
  )
}

export default DetailPage