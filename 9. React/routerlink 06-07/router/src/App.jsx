
import './App.css'
import { BrowserRouter , Routes , Route  } from "react-router";

import Navbar from "./Component/Navbar";
import Home from './pages/Home'
import Page404 from './pages/Page404'
import Product from './pages/MyProfile'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'


function App() {

  return (
    <>
     
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='*' element={<Page404/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
