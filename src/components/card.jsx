import '../Styles/card.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { UilAngleDoubleRight } from '@iconscout/react-unicons'

function Card() {
  const [chat, setChat] = useState();

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhyQIJkQNOnRwIJkMleFZlmgHLyDF7p`)
      if (response.status === 200) {
        const data = response.data[0]
        setChat(data)
        console.log(chat)
      }
    }
    loadData();
}, [])

const handleRedirect =  () => window.location.reload(false)

  return chat && (
    <section className='chat'>
      <div className='buttonTitle'>
        <h1>{chat.breeds[0].name}</h1>
        <UilAngleDoubleRight className='arrow' onClick={handleRedirect}/>
      </div>
      <div className='troisParties'>
        <div className='partie1'>
          <h2>Temperament:</h2>
          <p>{chat.breeds[0].temperament}</p>
        </div>
        <div className='partie2'>
        <img alt={chat.breeds[0].name} src={chat.url} />
        </div>
        <div className='partie3'>
          <h2>Origin:</h2>
          <p>{chat.breeds[0].origin}</p>
        </div>
      </div>
      <div className='description'>
        <h2>Description:</h2> <br/>
        <p>{chat.breeds[0].description}</p>
      </div>
    </section>
    )
}

export default Card;