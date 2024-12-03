
import '../Styles/Contact.css'



function Contact(){

    return(

        <div className="contact">

                <div className="contact-image">
                </div>

                <div className="contact-form">
                    <h1>Contact Us</h1>
                    <form action="">
                        <input type="text"  placeholder='Name...'/> <br />

                        <input type="email"  placeholder='Email...'/> <br />   

                        <textarea name="comments" id="" placeholder='Leave a coment...'></textarea>
                        <input type="Submit" value="Send" />
                    </form>

                </div>
        </div>
    );
};


export default Contact;