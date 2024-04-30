import NavbarMigration from '../navbar/NavbarMigration';
import Contacts from "../contacts/Contacts";
import Extra from "../extra/Extra";
import Footer from "../footer/Footer";


const ContactsPage = () => {
    return(
        <>
            <NavbarMigration />
            <main>
                <Contacts />
            </main>
            <Extra />
            <Footer />
        </>
    )
}

export default ContactsPage;