import { useState, useEffect } from "react";
import './Home.css';

function Home({ back, edit }) {
  // let [input, setInput] = useState("");
  let [Dibujos, setDibujos] = useState([]);

  useEffect(() => {
    mostrarDibujos();
  }, []);

  function mostrarDibujos() {
    fetch('http://localhost:3001/Dibujos')
      .then((res) => res.json())
      .then((resp) => {
        setDibujos(resp);
      });
  }
  
  // function addDibujos() {
  //   fetch('http://localhost:3001/Dibujos')
  //     .then((res) => res.json())
  //     .then((resp) => {
  //       mostrarDibujos();
  //       setInput("");
  //     });
  // }

  // addDibujos();
  // function Dibus(){
  //  fetch('http://localhost:3001/Dibujos')
  //  .then(res => res.json())
  //  .then (console.log(res))

  // }
  // function apicall(){
  //   fetch(back)
  //   .then(function(response){
  //       return resp = response.json();
  //   })
  //   // .then(function(resp){
  //   //     resp.forEach(Dibujo =>{
  //   //         document.querySelector("#diseños").innerHTML +=`<div class="diseño"><img class= "foto" src="./fotos/${Diseño.Foto}"</img><p>Titulo:${Diseño.Titulo}</p></div>`
  //   //     })
  //   // })
  //   // }  
  //   // apicall();

  return (
    <div className="draw">{Dibujos.map((dibujo)=>{
      return (

      <div><div className="img"><img className= "foto" src={`./WP/${dibujo.Foto}`}></img></div><h3 className="titulos">{dibujo.Titulo}</h3></div>
      
      )})}
      
    </div>
  
    )}

export default Home;
