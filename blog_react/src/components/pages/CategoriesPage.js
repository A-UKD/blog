import NavbarMigration from '../navbar/NavbarMigration';
import Categories from '../categories/Categories';
import Articles from '../articles/Articles';
import Extra from "../extra/Extra";
import Footer from "../footer/Footer";
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CategoriesPage() {
    const { category: initialCategory } = useParams();
    const [category, setCategory] = useState(initialCategory);
    return (
        <>
            <NavbarMigration />
            <main>
                <Categories category={category} setCategory={setCategory} />
                <Articles category={category} />
            </main>
            <Extra />
            <Footer />
        </>
    );
}

