import { useEffect, useState } from "react";
import blogClient from "../../utils/blog_client";
import { getTokenCookie } from "../../utils/cookie_manager";
import { getArticleUrl } from "../../utils/urls";

function ProfileArticleItem(article) {

    return (
        <div>
            <a href={getArticleUrl(article.id)}>{article.title}</a>
        </div>
    );
}

export default function ProfileArticlesList({ username, favorited }) {
    const [articles, setArticles] = useState([]);

    async function fetchUserArticles() {
        const client = await blogClient.init();
        try {
            const response = await client.getArticles({
                limit: 10,
                ordering: '-created_at',
                author__username: username,
                favorited: favorited ? true : undefined,
            }, null, getTokenCookie() ? {
                headers: {
                    'Authorization': `Token ${getTokenCookie()}`,
                }
            } : null);
            setArticles(response.data.results);
        } catch (error) {
            alert("Coult not fetch articles: " + error);
        }
    }

    useEffect(() => {
        fetchUserArticles();
    }, []);

    return (
        <div style={{flexDirection: 'column'}}>
            {articles.map((article, _) => ProfileArticleItem(article))}
        </div>
    );
}