import { Link } from 'react-router-dom';
import '../Styles/Header.css'
import Image from '../assets/pizzaLogo.png'

function Header(){


    return(
        
        <div className="navbar">

                <div className="navbar_logo">
                    <img src={Image} alt="Pizza-Image" />
                </div>

                <div className="nabvar_links">
                    <Link>Home</Link> 
                    <Link>Store</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                </div>

            
        </div>
    )
};

export default Header;