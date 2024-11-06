import React from 'react';

const Contact = () => {
    return (
        <div className="page contact">
            <h1>Contact Us</h1>
            <section id="contact" class="contact-list">
        <h2>Get In Touch</h2>
        <p><b><i>Drop me a line, give me a call, or send me a message.</i></b></p>
        <ul>
            <li>
                <span class="icon"><i class="fa fa-phone" aria-hidden="true"></i>
                </span>
                <span class="text">0336-3538877</span>
            </li>
            <li>
                <span class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                <span class="text">sobansaud3@gmail.com</span>
            </li>
            <li>
                <span class="icon"><i class="fa fa-linkedin" aria-hidden="true"></i></span>
                <span class="text">https://www.linkedin.com/in/soban-saud</span>
            </li>
            <li>
                <span class="icon"><i class="fa fa-youtube" aria-hidden="true"></i></span>
                <span class="text">http://www.youtube.com/@all-rounder-lifewithmemons2700</span>
            </li>
            <li>
                <span class="icon"><i class="fa fa-globe" aria-hidden="true"></i></span>
                <span class="text">Karachi , Pakistan</span>
            </li>
         
           <form className='contact-form'> <input type="text" placeholder="Name" required></input>
            <input type="email" placeholder="Email" required></input>
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
            </form>
           

        </ul>
     


       </section>
     
       </div>

    );
};

export default Contact;