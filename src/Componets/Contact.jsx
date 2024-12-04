
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

                        <textarea name="comments" id="" placeholder='Leave a coment...'></textarea> <br />
                        <button type="submit">Send Comment</button>
                    </form>

                </div>
        </div>
    );
};


export default Contact;