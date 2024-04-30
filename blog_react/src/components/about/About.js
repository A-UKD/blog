import './about.scss';

import bunner from '../../resources/img/about/program_mystic.jpg';
import university from '../../resources/img/about/university.jpg';
import inkognito from '../../resources/img/icons/icon-incognito.svg';

function About() {
    return(
        <section className="about">
            <div className="container">
                <h1 className="title title_blocks">Learn More About Us</h1>
                <div className="about__wrapper">
                    <div className="what about__info">
                        <h2 className="title title_mb-30">What Is ProgramMystic?</h2>
                        <p className="what__descr">
                            ProgramMystic is an article and idea sharing platform designed for communication and discussion.
                            It's a place for people with similar interests in IT to find common ground, share their thoughts and
                            experiences. Although the main focus is on IT topics, ProgramMystic welcomes articles and
                            discussions on a variety of topics. It's a place to discuss exciting travels, recommend places to
                            visit, or just relax while enjoying interesting conversations. ProgramMystic is a community where
                            people connect, share and explore together!
                        </p>
                    </div>
                    <div className="about__img">
                        <img src={bunner} alt="banner" />
                    </div>
                    <div className="about__img">
                        <img src={university} alt="university" />
                    </div>
                    <div className="how about__info">
                        <h2 className="title title_mb-30">Genesis Of Idea</h2>
                        <p className="how__descr">
                            ProgramMystic started as an academic initiative, born out of the need to fulfill the requirements of
                            the Software Engineering course at King Daniel University. However, the project took on a life of
                            its own as the development team delved deeper into its creation. What started as a simple academic
                            project quickly turned into a full-fledged blogging platform specifically designed for IT
                            professionals. With each passing day, ProgramMystic is gaining momentum, attracting a diverse
                            community of technology enthusiasts eager to share knowledge, exchange ideas, and explore the
                            ever-changing field of information technology.
                        </p>
                    </div>
                </div>
                <div className="about__details">
                    <div className="mission about__mission">
                        <h2 className="title title_mb-30">Our Mission</h2>
                        <p className="mission__descr">
                            To create an innovative environment for exchanging articles and ideas, fostering communication and
                            discussions among IT professionals. We are developing a platform that welcomes a variety of topics
                            and encourages discussions on various subjects, providing opportunities to share thoughts and
                            experiences.
                        </p>
                    </div>
                    <div className="vision about__vision">
                        <h2 className="title title_mb-30">Our Vision</h2>
                        <p className="vision__descr">
                            To become recognized leaders in the field of information exchange and communication among IT
                            specialists. We aspire to establish an open and friendly environment where everyone can find
                            something of interest, from information technology to exciting journeys.
                        </p>
                    </div>
                    <div className="values about__values">
                        <h2 className="title title_mb-30">Our Values</h2>
                        <p className="values__descr">
                            We strive for excellence in all that we do, promoting understanding and collaboration. Our community
                            supports open dialogue, diversity, and integrity, creating a space where everyone can freely express
                            their thoughts and ideas.
                        </p>
                    </div>
                </div>
                <div className="our-team about__our-team">
                    <h2 className="title title_our-team title_mb-50">Our Team</h2>
                    <div className="our-team__teammates">
                        <div className="our-team__teammate">
                            <div className="our-team__teammate__img">
                                <img src={inkognito} alt="man" />
                            </div>
                            <h5 className="our-team__teammate__position">frontend developer</h5>
                            <h4 className="our-team__teammate__fullname">Nazar Talaievych</h4>
                            <a href="/" className="our-team__teammate__link">more</a>
                        </div>
                        <div className="our-team__teammate">
                            <div className="our-team__teammate__img">
                                <img src={inkognito} alt="man" />
                            </div>
                            <h5 className="our-team__teammate__position">frontend developer</h5>
                            <h4 className="our-team__teammate__fullname">Nazar Talaievych</h4>
                            <a href="/" className="our-team__teammate__link">more</a>
                        </div>
                        <div className="our-team__teammate">
                            <div className="our-team__teammate__img">
                                <img src={inkognito} alt="woman" />
                            </div>
                            <h5 className="our-team__teammate__position">frontend developer</h5>
                            <h4 className="our-team__teammate__fullname">Nazar Talaievych</h4>
                            <a href="/" className="our-team__teammate__link">more</a>
                        </div>
                        <div className="our-team__teammate">
                            <div className="our-team__teammate__img">
                                <img src={inkognito} alt="man" />
                            </div>
                            <h5 className="our-team__teammate__position">frontend developer</h5>
                            <h4 className="our-team__teammate__fullname">Nazar Talaievych</h4>
                            <a href="/" className="our-team__teammate__link">more</a>
                        </div>
                        <div className="our-team__teammate">
                            <div className="our-team__teammate__img">
                                <img src={inkognito} alt="man" />
                            </div>
                            <h5 className="our-team__teammate__position">frontend developer</h5>
                            <h4 className="our-team__teammate__fullname">Nazar Talaievych</h4>
                            <a href="/" className="our-team__teammate__link">more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;