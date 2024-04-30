import { useState, useEffect } from 'react';
import './articles.scss';
import blogClient from '../../utils/blog_client';
import { formatDate } from '../../utils/date';
import { getArticleUrl, getCategoryUrl } from '../../utils/urls';

function Article(article) {
    const {
        id,
        cover_url,
        category,
        title,
        content,
        created_at,
    } = article;
    return (
        <div class="item">
            {cover_url &&
                <div class="item__img">
                <a href={getArticleUrl(id)}>
                    <img src={cover_url} alt="lamp" />
                </a>
            </div>
            }
            <div class="item__wrapper">
                <p class="creator__data creator__data_article">{formatDate(created_at)}</p>
                <h3 class="title title_article"><a href={getArticleUrl(id)}>{title}</a></h3>
                <p class="item__text">{content}</p>
                <a href={getCategoryUrl(category)} class={`category category_article category_${category}`}>{category}</a>
            </div>
        </div>
    );
}

function Articles({category}) {
    const [articles, setArticles] = useState([]);

    async function fetchArticles() {
        const client = await blogClient.init();
        try {
            const response = await client.getArticles({
                limit: 10,
                ordering: '-created_at',
                category__name: category ?? undefined,
            });
            setArticles(response.data.results);
        } catch (error) {
            alert("Coult not fetch articles: " + error);
        }
    }

    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <section class="articlesCarusel">
            <div class="container container_main">
                <div class="articlesCarusel__items">
                    {articles.map(article => Article(article))}
                </div>
            </div>
        </section>
    );
}

export default Articles;