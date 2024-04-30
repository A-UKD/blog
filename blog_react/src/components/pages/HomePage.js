import Header from "../header/Header";
import Articles from "../articles/Articles";
import Extra from "../extra/Extra";
import Footer from "../footer/Footer";

const HomePage = () => {
    return(
        <>
            <Header />
            <main>
            <Articles />
            </main>
            <Extra />
            <Footer />
        </>
    )
}

export default HomePage;