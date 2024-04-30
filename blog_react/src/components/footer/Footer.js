import './footer.scss';

import email from '../../resources/img/icons/icon-email.svg';
import { getCategoryUrl } from '../../utils/urls';

function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__nav">
                        <div className="footer__nav__content">
                            <h3 className="title title_footer">quick links</h3>
                            <hr className="divider footer__divider divider_footer" />
                            <ul className="menu footer__nav__menu">
                                <li>
                                    <a href="/" className="menu__link">Home</a>
                                </li>
                                <li>
                                    <a href="/categories" className="menu__link">Categories</a>
                                </li>
                                <li>
                                    <a href="/bloging" className="menu__link">Bloging</a>
                                </li>
                                <li>
                                    <a href="/about" className="menu__link">About</a>
                                </li>
                                <li>
                                    <a href="/contacts" className="menu__link">Contacts</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__nav__content">
                            <h3 className="title title_footer">categories</h3>
                            <hr className="divider footer__divider divider_footer" />
                            <ul className="menu footer__nav__menu">
                                <li>
                                    <a href={getCategoryUrl("development")} className="menu__link">Development</a>
                                </li>
                                <li>
                                    <a href={getCategoryUrl("administration")} className="menu__link">Administration</a>
                                </li>
                                <li>
                                    <a href={getCategoryUrl("design")} className="menu__link">Design</a>
                                </li>
                                <li>
                                    <a href={getCategoryUrl("management")} className="menu__link">Management</a>
                                </li>
                                <li>
                                    <a href={getCategoryUrl("marketing")} className="menu__link">Marketing</a>
                                </li>
                                <li>
                                    <a href={getCategoryUrl("popular_science")} className="menu__link">Popular Science</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__nav__content">
                            <h3 className="title title_footer">socials</h3>
                            <hr className="divider footer__divider divider_footer" />
                            <ul className="menu footer__nav__menu">
                                <li>
                                    <a href="/" className="menu__link">GitHub</a>
                                </li>
                                <li>
                                    <a href="/" className="menu__link">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="/" className="menu__link">Telegram</a>
                                </li>
                                <li>
                                    <a href="/" className="menu__link">Facebook</a>
                                </li>
                                <li>
                                    <a href="/" className="menu__link">Instagram</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__contact">
                        <h3 className="title title_footer">out newsletter</h3>
                        <hr className="divider footer__divider divider_footer" />
                        <p className="footer__contact__descr">Stay updated with our Out Newsletter! Get curated articles, updates, and insights covering the latest trends in our industry. Subscribe now!</p>
                        <form action="#" className="form">
                            <img src={email} alt="email" className="form__img" />
                            <input type="text" name="email" placeholder="Email Address" className="form__input" />
                            <button type="submit" className="button button_form">send</button>
                        </form>
                    </div>
                </div>
                <div className="footer__copy">
                    © Copyright ProgramMystic 2024
                </div>
            </div>
        </footer>
    )
}

export default Footer;