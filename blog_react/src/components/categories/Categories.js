import categoryName from '../../utils/category_name';
import { getCategoryUrl } from '../../utils/urls';
import './categories.scss';
function CategoryItem(category) {
    return (
        <li>
            <a href={getCategoryUrl(category)} className={`category category_article category_articles category_${category}`}>{categoryName[category]}</a>
        </li>
    );
}

function getCategoryText(category) {
    return "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nulla minima quasi eveniet modi cum maiores ad nihil neque, nesciunt, earum quia veritatis sapiente omnis assumenda. Quibusdam harum hic consectetur?\nProvident quasi autem eius cupiditate corporis.Odio dolor, alias eveniet molestias rem voluptatum labore ad repellendus architecto quas.Recusandae, itaque aliquid.Laborum, quidem perferendis?";
}

export default function Categories({ category }) {

    return (
        <section className="categories">
            <div className="container container_main">
                <div className="title title_blocks title_mb-30">{categoryName[category] ?? "All Categories"}</div>
                <div className="categories__wrapper">
                    <ul className="menu categoties_menu">
                        {
                            Object.keys(categoryName).filter(key => key != null && key != category).map((key, index) => CategoryItem(key))
                        }
                    </ul>
                    <div className="categories__text">
                        {getCategoryText(category)}
                    </div>
                </div>
            </div>
        </section>
    );
}