import { Link, NavLink } from 'react-router-dom';

import './navbar.scss';
import '../../style/variables.scss';

import serch from '../../resources/img/icons/icon-search.svg';
import cancel from '../../resources/img/icons/icon-cancel.svg';
import logo from '../../resources/img/icons/logo_v1.svg';
import { getTokenCookie } from '../../utils/cookie_manager';
import MiniProfile from './MiniProfile';
import { getCategoryUrl } from '../../utils/urls';


function Navbar() {

    function openSearchPanel() {
        const searchBox = document.querySelector('.search');
        const searchInput = document.querySelector('.search__input');
        const searchButton = document.querySelector('.search_btn');
        const cancelButton = document.querySelector('.search__cancel_btn');

        if (searchBox && searchInput && searchButton && cancelButton) {
            searchBox.classList.add('search_active');
            searchButton.classList.add('search_btn_active');
            searchInput.classList.add('search__input_active');
            cancelButton.classList.add('search__cancel_btn_active');
        }
    }

    function closeSearchPanel() {
        const searchBox = document.querySelector('.search');
        const searchInput = document.querySelector('.search__input');
        const searchButton = document.querySelector('.search_btn');
        const cancelButton = document.querySelector('.search__cancel_btn');

        if (searchBox && searchInput && searchButton && cancelButton) {
            searchBox.classList.remove('search_active');
            searchButton.classList.remove('search_btn_active');
            searchInput.classList.remove('search__input_active');
            cancelButton.classList.remove('search__cancel_btn_active');
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        const searchButton = document.querySelector('.search_btn');
        const cancelButton = document.querySelector('.search__cancel_btn');

        if (searchButton && cancelButton) {
            searchButton.addEventListener('click', openSearchPanel);
            cancelButton.addEventListener('click', closeSearchPanel);
        }
    });

    return (
        <nav className="navbar">
            <div className="navbar__panel">
                <div className="search">
                    <input type="text" name="search" placeholder="Type to search.." className="search__input" />
                    <div className="search_btn" onClick={openSearchPanel}>
                        <img src={serch} alt="search" className="search_btn__img" />
                    </div>
                    <div className="search__cancel_btn" onClick={closeSearchPanel}>
                        <img src={cancel} alt="cancel" className="search__cancel_btn__img" />
                    </div>
                </div>
                <div className="logo">
                    <Link to="/" className="logo__link">
                        <span>Progra</span>
                        <img src={logo} alt="logotype" className="logo__img" />
                        <span>Mystic</span>
                    </Link>
                </div>
                <div className="registrate">
                    {!getTokenCookie() &&
                        <>
                            <Link to="/signIn" className="sign-in">
                                sign in
                            </Link>
                            <Link to="/signUp" className="sign-up">
                                sign up
                            </Link>
                        </>
                        ||
                        <MiniProfile />
                    }
                </div>
            </div>
            <hr className="divider navbar__divider" />
            <ul className="menu navbar__menu">
                <li>
                    <NavLink end style={({ isActive }) => ({ 'opacity': isActive ? 1 : 0.6 })} to="/" className="menu__link">Home</NavLink>
                </li>
                <li className="li_sub-menu">
                    <NavLink end style={({ isActive }) => ({ 'opacity': isActive ? 1 : 0.6 })} to="/categories" className="menu__link">Categories</NavLink>
                    <ul className="sub-menu">
                        <li>
                            <a href={getCategoryUrl("development")} className="menu__link sub-menu__link">Development</a>
                        </li>
                        <li>
                            <a href={getCategoryUrl("administration")} className="menu__link sub-menu__link">Administration</a>
                        </li>
                        <li>
                            <a href={getCategoryUrl("design")} className="menu__link sub-menu__link">Design</a>
                        </li>
                        <li>
                            <a href={getCategoryUrl("management")} className="menu__link sub-menu__link">Management</a>
                        </li>
                        <li>
                            <a href={getCategoryUrl("marketing")} className="menu__link sub-menu__link">Marketing</a>
                        </li>
                        <li>
                            <a href={getCategoryUrl("popular_science")} className="menu__link sub-menu__link">Popular Science</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink end style={({ isActive }) => ({ 'opacity': isActive ? 1 : 0.6 })} to="/bloging" className="menu__link">Bloging</NavLink>
                </li>
                <li>
                    <NavLink end style={({ isActive }) => ({ 'opacity': isActive ? 1 : 0.6 })} to="/about" className="menu__link">About</NavLink>
                </li>
                <li>
                    <NavLink end style={({ isActive }) => ({ 'opacity': isActive ? 1 : 0.6 })} to="/contacts" className="menu__link">Contacts</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;