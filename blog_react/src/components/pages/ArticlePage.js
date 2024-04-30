import Article from "../article/Article";
import Extra from "../extra/Extra";
import Footer from "../footer/Footer";
import NavbarMigration from "../navbar/NavbarMigration";
import { useParams } from "react-router-dom";

export default function ArticlePage() {
    const { id } = useParams();
    return (
        <>
            <NavbarMigration />
            <main>
                <Article id={id} />
            </main>
            <Extra />
            <Footer />
        </>
    );
}