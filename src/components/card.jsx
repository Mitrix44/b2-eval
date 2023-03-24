import axios from "axios";

function Card() {
  let id = 1;
  let lien = `https://api.thecatapi.com/v1/images/search?has_breeds=${id}&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhyQIJkQNOnRwIJkMleFZlmgHLyDF7p`
  const response = axios.get(lien)
   (
    {
    console.log(response)
    }
    <h1>Ceci est un chat</h1>
    <img alt="" src= />
    <button onClick={handleRedirect}>Changer de chat</button>
   );
}

export default Card;