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
import Midia from './components/pages/Midia';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW4CFaE3y2gez7jzi2af3tHnv2nHOTwQQ",
  authDomain: "midtracker-e799f.firebaseapp.com",
  projectId: "midtracker-e799f",
  storageBucket: "midtracker-e799f.appspot.com",
  messagingSenderId: "679662573379",
  appId: "1:679662573379:web:ccff1f08ade4993963c1f6",
  measurementId: "G-XNG3T2T9NK"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
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
            <Route path='/midia/:id'element={<Midia />} />
        </Routes>
       </Router>
       <Footer />
    </div>
  );
}

export default App;
