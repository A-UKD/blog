import popPost_1 from '../../resources/img/pop-posts/pop-post_1.jpg';
import popPost_2 from '../../resources/img/pop-posts/pop-post_2.jpg';
import popPost_3 from '../../resources/img/pop-posts/pop-post_3.jpg';
import popPost_4 from '../../resources/img/pop-posts/pop-post_4.jpg';
import popPost_5 from '../../resources/img/pop-posts/pop-post_5.jpg';
import popPost_6 from '../../resources/img/pop-posts/pop-post_6.jpg';
import blogClient from '../../utils/blog_client';
import { formatDate } from '../../utils/date';
import { getArticleUrl, getProfileUrl } from '../../utils/urls';
import { useId, useState, useEffect } from 'react';

function PopularPostList() {
    const [popularPosts, setPopularPosts] = useState([]);

    async function fetchPopularPosts() {
        const client = await blogClient.init();
        try {
            const response = await client.getArticles({
                limit: 6,
                ordering: '-rating',
            });
            setPopularPosts(response.data.results);
        } catch (error) {
            alert("Coult not fetch popular posts: " + error);
        }
    }

    useEffect(() => {
        fetchPopularPosts();
    }, []);

    return (
        <div className="popular-posts__items">
            {popularPosts.map((article, index) => _PopPost(article, index))}
        </div>
    );
}

function _getPlaceholderCoverUrl(index) {
    index = index % 6;
    const m = {
        0: popPost_1,
        1: popPost_2,
        2: popPost_3,
        3: popPost_4,
        4: popPost_5,
        5: popPost_6,
    };
    return m[index];
}

function _PopPost(article, index) {
    const {
        id,
        cover_url,
        title,
        author_username,
        updated_at,
    } = article;
    return (
        <div className="pop-post">
            <a href={getArticleUrl(id)} className="pop-post__img">
                <img src={cover_url || _getPlaceholderCoverUrl(index)} alt="man" />
            </a>
            <div className="pop-post__content">
                <h3 className="title title_pop-post">
                    <a href={getArticleUrl(id)} className="pop-post__link">
                        {title}
                    </a>
                </h3>
                <ul className="creator creator_pop-post">
                    By
                    <li>
                        <a href={getProfileUrl(author_username)} className="creator__link creator__link_pop-post">@{author_username}</a>
                    </li>
                    on
                    <li>
                        <p className="creator__data creator__data_pop-post">{formatDate(updated_at)}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PopularPostList;