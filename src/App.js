import './App.css';
import Header from'./components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './components/Styles/main.scss'

function App() {
  return (
    <div className="App">
      <Header />
      {/*<header className="App-header">*/}
      <Main />
      {/*</div></header>*/}
      <Footer />
    </div>
  );
}

export default App;
