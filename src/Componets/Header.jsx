import { Link } from 'react-router-dom';
import '../Styles/Header.css'
import Image from '../assets/pizzaLogo.png'
import { useRef } from 'react';
import {FaTimes, FaBars} from 'react-icons/fa'

function Header(){



    const styleRef = useRef();


    const navbar =()=>{
        styleRef.current.classList.toggle("responsive-nav");
    }


    return(
        
        <div className="navbar">

                <div className="navbar_logo">  
                    <img src={Image} alt="Pizza-Image" />
                </div>

                <nav ref={styleRef}>
                    <Link to='/'>Home</Link> 
                    <Link to='/Store'>Store</Link>
                    <Link to='/About'>About</Link>
                    <Link to='/Contact'>Contact</Link>
                    <button className='nav-btn' onClick={ ()=> navbar()}><FaTimes/></button>
                </nav>

                <button className='nav-btn nav-close-btn' onClick={ ()=> navbar()}><FaBars/></button>
            
        </div>
    )
};

export default Header;