import './contacts.scss';

function Contacts() {
    return(
        <section className="contact">
            <div className="container">
                <h1 className="title title_blocks">Learn More About Us</h1>
                <div className="contact__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12472.260935799324!2d24.710428909450957!3d48.91596614790456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c16a0a7c0e47%3A0x8bf87c6dfb153463!2sKing%20Danylo%20University!5e0!3m2!1sen!2sua!4v1711804977920!5m2!1sen!2sua"  title="PlaceOnMap" width="1200" height="600" style={{'border': '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                </div>
                <div className="contact__wrapper">
                    <div className="find-us">
                        <h3 className="title title_mb-30">Where to Find Us</h3>
                        <a href="https://www.google.com/maps/place/King+Danylo+University/@48.9152431,24.7111191,15z/data=!4m6!3m5!1s0x4730c16a0a7c0e47:0x8bf87c6dfb153463!8m2!3d48.9152431!4d24.7111191!16s%2Fm%2F011jn38w?entry=ttu">Vulytsya Yevhena Konovalʹtsya, 35,<br />Ivano-Frankivs'k, Ivano-Frankivs'ka oblast,<br />76018</a>
                    </div>
                    <div className="contact-info">
                        <h3 className="title title_mb-30">Contact Info</h3>
                        Email to deal:
                        <a href="mailto:programmystic@gmail.com">programmystic@gmail.com</a><br />
                        Supports email:
                        <a href="mailto:programmystic.supports@gmail.com">programmystic.supports@gmail.com</a><br />
                        Tel:
                        <a href="tel:13023994949">(+1) 302 399 4949</a>
                    </div>
                </div>
                <h2 className="title title_contact-form title_mb-30">We are easy to contact</h2>
                <p className="contact-form__descr">In the form below, you can let us know if you have any suggestions for cooperation or improvement of the site, or if there is a personal problem you have encountered. Just fill out the form below and we will get back to you as soon as possible.</p>
                <form action="#" className="form_contact">
                    <input type="text" name="Name" placeholder="Your Name" />
                    <input type="text" name="Email" placeholder="Your Email" />
                    <textarea type="text" name="Message" placeholder="Your Message"></textarea>
                    <button type="submit" className="button button_contact">submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contacts;