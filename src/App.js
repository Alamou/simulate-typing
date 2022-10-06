import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
function App() {
  var simulateTyping = {
    text: 'Meilleur plateforme',
    image:[
      window.location.href + '/flag-benin.png'
    ],
    imageH: "50px",
    imageW: "50px",
    delai: 3000,
    selector: '.simulate-typing'
  }


  var typingContent = '<span>' + simulateTyping.text.split('').join('</span><span>') + '</span>';
  if(simulateTyping.image.length > 0) {
    simulateTyping.image.forEach(imgUrl => {
      typingContent += '<img src="'+imgUrl+'" height="'+simulateTyping.imageH+'" height="'+simulateTyping.imageW+'">';
    });
  }


  setInterval(() => {
    $(simulateTyping.selector).html('');
    $(typingContent).hide().appendTo(simulateTyping.selector).each(function (i) {
      $(this).delay(100 * i).css({
          display: 'inline',
          opacity: 0
      }).animate({
          opacity: 1
      }, 100);
  });
  }, simulateTyping.delai);

  return (
    <div className="App">
      <header className="App-header">
      <div className="marquee-rtl">
          <div>Type your message here.</div>
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
