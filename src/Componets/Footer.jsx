import '../Styles/footer.css'
import { BsLinkedin , BsGlobe2  , BsGithub} from 'react-icons/bs';

function Footer(){


    return(
        <div className="footer">
            <div className="footer-links">

                <a href="https://comfortnt.netlify.app/" target='blank'> 
                     <BsGlobe2/>  
                </a>

                <a href="https://www.linkedin.com/in/comfort-ntiwane-516b73247/" target='blank'>  
                    <BsLinkedin/>
                 </a>

                <a href="https://github.com/ComfortNt" target='blank'>  
                    <BsGithub/> 
                 </a>
            </div>        
        </div>
    )
};


export default Footer;