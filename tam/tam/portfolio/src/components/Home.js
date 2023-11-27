import "./home.css"
import avatar from "./avatar.png"

export default function home() {
    return (
      <div class="container">
        <br></br>
        <div class="card">
        <div class="card-avatar"> <img src= {avatar} class="img"/> </div>
 
  <div class="card__content">
    <p class="card__title">Info sobre mi</p>
    <p class="card__description">Estudiante de informática de la escuela Ort Yatay.</p>
  </div>
</div>
        <br></br>   
      </div>
    );
  }