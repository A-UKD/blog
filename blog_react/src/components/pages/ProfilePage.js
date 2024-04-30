import Profile from "../profile/Profile";
import Extra from "../extra/Extra";
import Footer from "../footer/Footer";
import NavbarMigration from "../navbar/NavbarMigration";
import { useParams } from "react-router-dom";

export default function ProfilePage() {
    const { username } = useParams();
    return (
        <>
            <NavbarMigration />
            <main>
                <Profile username={username} />
            </main>
            <Extra />
            <Footer />
        </>
    );
};