import { Link } from 'react-router-dom';
import '../Styles/Home.css'



function Home(){


    return(

        <div className="home">

            <h1>MamaMia's Pizzeria</h1>
            <h2>"Bonjour flavor, bonjour pizza"</h2>

            <Link to="/Store">
            <button>Order Now</button>
            </Link>
            
        </div>
    );

}

export default Home;
