import NavbarMigration from '../navbar/NavbarMigration';
import Bloging from "../bloging/Bloging";
import Extra from "../extra/Extra";
import Footer from "../footer/Footer";

const BlogingPage = () => {
    return(
        <>
            <NavbarMigration />
            <main>
                <Bloging />
            </main>
            <Extra />
            <Footer />
        </>
    )
}

export default BlogingPage;