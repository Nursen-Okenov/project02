import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Slider from './components/main/first__block/Slider';

function App() {
  return (
    <div className="App">
      < Header />
      < Main />
      < Footer />
      < Slider />
    </div>
  );
}

export default App;
