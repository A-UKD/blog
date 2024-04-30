import './sign.scss';

import logo from '../../resources/img/icons/logo_v1.svg';
import { useId, useState } from 'react';
import blogClient from '../../utils/blog_client';
import { setTokenCookie, setUsernameCookie } from '../../utils/cookie_manager';

const SignIn = () => {
    const usernameId = useId();
    const passwordId = useId();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function performSignIn(e) {
        // if (username.length < 6) {
        //     alert('Username must be at least 6 characters long');
        //     return;
        // }

        // if (password.length < 6) {
        //     alert('Password must be at least 6 characters long');
        //     return;
        // }

        const client = await blogClient.init();
        try {
            const response = await client.login({}, {
                username: username,
                password: password,
            });
            const { user, token } = response.data;
            // alert('Successfully logged in. Token: ' + token);
            setTokenCookie(token);
            setUsernameCookie(user.username);
            document.location.href = '/';
        } catch (error) {
            alert('Error: ' + error);
        }
    }

    return (
        <section class="sign">
            <hr class="divider divider_sign" />
            <div class="container">
                <div class="logo sign__logo">
                    <a href="/" class="logo__link">
                        <span>Progra</span>
                        <img src={logo} alt="logotype" class="logo__img" />
                        <span>Mystic</span>
                    </a>
                </div>
                <div class="sign__wrapper">
                    <h2 class="title title_sign">Log In</h2>
                    <div action="#" class="form_sign">
                        {/* <h5 class="title title_above">Email</h5>
                        <input type="text" name="email" placeholder="Enter your email address here" /> */}
                        <h5 class="title title_above">Username</h5>
                        <input id={usernameId} value={username} onInput={e => setUsername(e.target.value)} type="text" name="password" placeholder="Enter your username here" />
                        <h5 class="title title_above">Password</h5>
                        <input id={passwordId} value={password} onInput={e => setPassword(e.target.value)} type="password" name="password" placeholder="Enter a strong password here" />
                        <button class="button button_sign" onClick={performSignIn}>Sign In</button>
                    </div>
                </div>
                <div class="log-in">
                    Have no account yet? <a href="/signUp">Sign Up</a>
                </div>
                <div class="sign__nav">
                    <ul class="menu sign_menu">
                        <li>
                            <a href="/" class="menu__link">About</a>
                        </li>
                        <li>
                            <a href="/" class="menu__link">User Agreement</a>
                        </li>
                        <li>
                            <a href="/" class="menu__link">Feedback</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="divider divider_sign" />
        </section>
    )
}

export default SignIn;