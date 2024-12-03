import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Contact from "./Componets/Contact";
import Store from "./Componets/Store";


function App() {


  return (

    <Router>

        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Store" element={<Store/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
        <Footer/>
    </Router>
   
  )
}

export default App
