import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import { useLocation } from 'react-router-dom';

function App() {
  var simulateTyping = {
    pays: [ // Définition du nom des Pays
      'Benin',
      'Mali',
      'Togo'
    ],
    drapeau:[ // Définition du drapau des pays. Les drapeaux doivent suivrent l'ordre de définition des noms de pays.
      './image/flag-benin.png',
      './image/ml.png',
      './image/tg.png'
    ],
    imageH: "20px", // Hauteur de l'image.
    imageW: "20px", // Largeur de l'image.
    delai: 3000,
    selector: '.simulate-typing'
  }


  var typingContent = '';
  let compteur = 0;
  setInterval(function(){

    if(typeof simulateTyping.pays[compteur] === "undefined") {
      compteur = 0;
    }
    let eText = simulateTyping.pays[compteur];
    let ekey = compteur;
    typingContent = '<span>' + eText.split('').join('</span><span>') + ' </span>';
    if(typeof simulateTyping.drapeau[ekey] !== "undefined") {
      typingContent += '<img src="'+
      simulateTyping.drapeau[ekey]+'" height="'+
      simulateTyping.imageH+'" height="'+
      simulateTyping.imageW+'"> ';
      ++compteur;
    }

    $(simulateTyping.selector).html(typingContent); 
  }, simulateTyping.delai)

  return (
    <div className="App">
      <header className="App-header">
      <div className="marquee-rtl">
          <div>
            <span>Bitcoin (BTC)</span>
            <span className="rate">0,00123 $(USD)</span>
            <span>LiteCoin (Ltc)</span>
            <span className="rate">0,00123 $(USD)</span>
          </div>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        Meilleure plateforme
        <p className='simulate-typing'>
        </p>
      </header>
    </div>
  );
}

export default App;
