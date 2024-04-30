import { useEffect, useState } from 'react';
import './article.scss';
import blogClient from '../../utils/blog_client';
import { getAuthHeaders, isAuthorized } from '../../utils/auth_utils';
import { formatDate } from '../../utils/date';
import categoryName from '../../utils/category_name';
import iconLike from '../../resources/img/icons/icon-like.svg';
import iconBookmark from '../../resources/img/icons/icon-bookmark.svg';
import ArticleCommentList from './ArticleCommentList';

export default function Article({ id }) {
    const [article, setArticle] = useState({});

    async function fetchArticle() {
        const client = await blogClient.init();
        try {
            const response = await client.getArticle({
                id: id,
            }, {}, getAuthHeaders());
            setArticle(response.data);
        } catch (error) {
            alert("Could not fetch article: " + error);
        }
    }

    async function changeRate(rate) {
        if (!isAuthorized()) {
            alert("You have to login into your account to proceed this action");
            return;
        }

        const client = await blogClient.init();
        try {
            let response = null;
            if (rate === true || rate === false) {
                response = await client.rateArticle({ id: id, }, {
                    is_positive: rate,
                }, getAuthHeaders());
            } else {
                response = await client.unrateArticle({
                    id: id,
                }, {}, getAuthHeaders());
            }
            let newTotalRate = article.rating;
            if (rate === true && rate !== article.your_rate) {
                newTotalRate += 1;
            } else if (rate === false && rate !== article.your_rate) {
                newTotalRate -= 1;
            } else if (rate === null && article.your_rate === true) {
                newTotalRate -= 1;
            } else if (rate === null && article.your_rate === false) {
                newTotalRate += 1;
            }
            const newArticle = { ...article, your_rate: rate, rating: newTotalRate };
            setArticle(newArticle);
        } catch (error) {
            alert("Could not change rating: " + error);
        }
    }

    async function like() {
        if (article.your_rate === true) {
            await changeRate(null);
        } else {
            await changeRate(true);
        }
    }

    async function dislike() {
        if (article.your_rate === false) {
            await changeRate(null);
        } else {
            await changeRate(false);
        }
    }

    async function toggleBookmark() {
        if (!isAuthorized()) {
            alert("You have to login into your account to proceed this action");
            return;
        }

        const client = await blogClient.init();
        try {
            if (article.is_your_bookmark) {
                await client.unfavoriteArticle({
                    id: id,
                }, {}, getAuthHeaders());
            } else {
                await client.favoriteArticle({
                    id: id,
                }, {}, getAuthHeaders());
            }
            const newArticle = { ...article, is_your_bookmark: !article.is_your_bookmark };
            setArticle(newArticle);
        } catch (error) {
            alert("Could not change bookmark: " + error);
        }
    }

    async function deleteArticle() {
        const client = await blogClient.init();
        try {
            await client.deleteArticle({id: article.id}, {}, getAuthHeaders());
            window.location = '/';  
        } catch (error) {
            alert("Could not delete article: " + error);
        }
    }

    useEffect(() => {
        fetchArticle();
    }, []);

    return (
        <section className="article">
            <div className="container container_main">
                <div className="title title_blocks title_mb-10">
                    {article.title}
                </div>
                <div className="article__info">
                    <div className="article__date">{formatDate(article.updated_at)}</div>
                    <div className={`category category_article category_${article.category}`}>{categoryName[article.category]}</div>
                </div>
                <div className="article__content">
                    {article.content}
                </div>
                <div className="article__panel">
                    <div className="rate">
                        <img onClick={like} src={iconLike} alt="like" className="rate__rating" style={{ background: article.your_rate === true && "green" }} />
                        <img onClick={dislike} src={iconLike} alt="dislike" className="rate__rating" style={{ background: article.your_rate === false && "red" }} />
                        <div className="rate__rating">{article.rating}</div>
                        <div style={{ width: "2px" }} />
                        <img onClick={toggleBookmark} src={iconBookmark} alt="bookmark" className="rate__rating" style={{ background: article.is_your_bookmark && "yellow" }} />
                    </div>
                    {article.you_author && <button onClick={deleteArticle} className="button button_delete">Delete Article</button>}
                </div>
                <div className="article__tags">
                    <h3 className="title">Post Tags</h3>
                    <hr className="divider divider_tegs" />
                    <div className='article__tagsbox'>
                        {article.tags && article.tags.map(tag => <a className="article__tags__link">#{tag}</a>)}
                    </div>
                </div>
                <ArticleCommentList article_id={id} />
            </div>
        </section>
    );
}