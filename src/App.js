import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home';
import Livros from './components/pages/Livros';
import Series from './components/pages/Series';
import Animes from './components/pages/Animes';
import Mangas from './components/pages/Mangas';
import Filmes from './components/pages/Filmes';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import New from './components/pages/New';
import {useState} from 'react';
import styles from './App.module.css'

function App() {
  const [menu, setMenu] = useState(false)

  function abrirHeader(){
    setMenu(!menu)
    console.log("clicou! pode abrir ou fechar a navbar")
  }

  return (
    <div>
       <Header event={abrirHeader}/>
       <Router>
        {
          menu && (
            <Navbar />
          )
        }
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/livros'element={<Livros />} />
            <Route path='/series'element={<Series />} />
            <Route path='/animes'element={<Animes />} />
            <Route path='/mangas'element={<Mangas />} />
            <Route path='/filmes'element={<Filmes />} />
        </Routes>
       </Router>
       <Footer />
    </div>
  );
}

export default App;
