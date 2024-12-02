import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";


function App() {


  return (

    <Router>

        <Header/>
          <Routes>
            <Route path="/" />
          </Routes>
        <Footer/>
    </Router>
   
  )
}

export default App
