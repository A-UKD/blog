import NavbarMigration from '../navbar/NavbarMigration';
import About from "../about/About";
import Extra from "../extra/Extra";
import Footer from "../footer/Footer";


const AboutPage = () => {
    return(
        <>
            <NavbarMigration />
            <main>
                <About />
            </main>
            <Extra />
            <Footer />
        </>
    )
}

export default AboutPage;