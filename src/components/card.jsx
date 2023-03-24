import axios from "axios";
import { useEffect, useState } from "react";

function Card() {
  const [chat, setChat] = useState();

  // Méthode du cycle de vie d'un composant React permettant d'effectuer une action au montage du composant
  // Le montage c'est l'apparition du composant à l'écran
  useEffect(() => {
    // On créé une méthode pour récupérer les données provenant du backend (Strapi)
    const loadData = async () => {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhyQIJkQNOnRwIJkMleFZlmgHLyDF7p')
      if (response.status === 200) {
        const data = response.data[0].breeds[0]
        setChat(data)
        console.log(chat)
        // const data = response.data.data
        // setRestaurants(data)
      }
    }
    loadData();
}, [])
  // return (
  //   // <h1>{response.Promise.PromiseResult.data[0].breeds[0].name}</h1>
  //   // <img alt="" src= />
  //   // <button onClick={handleRedirect}>Changer de chat</button>
  //   )
}

export default Card;