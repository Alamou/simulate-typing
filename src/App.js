import logo from './logo.svg';
import './App.css';
import Typical from 'react-typical';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Meilleure plateforme
        <p>
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            'Benin 🧱',
            1000,
            'Ivoire 😋',
            1000
          ]}
        />
        </p>
      </header>
    </div>
  );
}

export default App;
