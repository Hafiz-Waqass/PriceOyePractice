import './app.css'
import Header from './header.jsx';
import Footer from './footer.jsx';
import { Route, Routes } from 'react-router-dom';
import { Home } from './assets/Home.jsx';

export function App() {
  

  return (
    <>

      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />

        </Routes>
   

      <Footer></Footer>

    </>
  )


}

