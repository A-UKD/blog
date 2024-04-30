import './extra.scss';

import social_1 from '../../resources/img/icons/social/github.svg';
import social_2 from '../../resources/img/icons/social/telegram.svg';
import social_3 from '../../resources/img/icons/social/facebook.svg';
import social_4 from '../../resources/img/icons/social/instagram.svg';
import social_5 from '../../resources/img/icons/social/x.svg';
import { useId } from 'react';
import TagList from './TagList';
import PopularPostList from './PopularPostList';

function Extra() {
    return (
        <section className="extra">
            <div className="container">
                <div className="extra__wrapper">
                    <div className="popular-posts">
                        <h2 className="title title_extra">Popular Posts</h2>
                        <PopularPostList />
                    </div>
                    <div className="about-us">
                        <h2 className="title title_extra">about ProgramMystic</h2>
                        <p className="about-us__descr">
                            Welcome to ProgramMystic, your trusted companion in programming. We discuss relevant topics, trends, and tools, from basics to advanced tech. Join our community for learning and interaction. Explore and deepen your programming knowledge with us. Embark on the ProgramMystic journey!
                        </p>
                        <ul className="social about-us__social">
                            <a href="/" className="social__link">
                                <img src={social_1} alt="github" className="social__img" />
                            </a>
                            <a href="/" className="social__link">
                                <img src={social_2} alt="telegram" className="social__img" />
                            </a>
                            <a href="/" className="social__link">
                                <img src={social_3} alt="facebook" className="social__img" />
                            </a>
                            <a href="/" className="social__link">
                                <img src={social_4} alt="instagram" className="social__img" />
                            </a>
                            <a href="/" className="social__link">
                                <img src={social_5} alt="x" className="social__img" />
                            </a>
                        </ul>
                    </div>
                </div>
                <TagList />
            </div>
        </section>
    )
}

export default Extra;
