import Navbar from "../navbar/Navbar";

import './header.scss';
import userProfileImg from '../../resources/img/header/user.jpg';
import { useEffect, useState } from "react";
import blogClient from "../../utils/blog_client";
import { formatDate } from "../../utils/date";
import {
    getArticleUrl,
    getProfileUrl,
    getCategoryUrl,
} from "../../utils/urls";

function Header() {
    const [editorChoice, setEditorChoice] = useState([]);

    async function fetchEditorChoice() {
        try {
            const client = await blogClient.init();
            const response = await client.getArticles({
                limit: 3,
                ordering: '-created_at',
                editor_choice: true,
            });
            setEditorChoice(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            alert("Coult not fetch editor choice articles: " + error);
        }
    }

    useEffect(() => {
        fetchEditorChoice();
    }, []);

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Navbar />
                    <div className="posts header__posts">
                        {editorChoice[0] &&
                            <div className="posts__item posts__item_main" style={ editorChoice[0].cover_url && { backgroundImage: `url(${editorChoice[0]?.cover_url})` }}>
                                <div className="posts__content posts__content_main">
                                    <a href={getCategoryUrl(editorChoice[0]?.category)} className={`category posts__category category_main category_${editorChoice[0]?.category}`}>{editorChoice[0]?.category}</a>
                                    <h1 className="title title_main">
                                        <a href={getArticleUrl(editorChoice[0]?.id)} className="posts__link">{editorChoice[0]?.title}</a>
                                    </h1>
                                    <ul className="creator">
                                        {editorChoice[0]?.author_avatar_url &&
                                            <li>
                                                <a href={getProfileUrl(editorChoice[0]?.author_username)} className="creator__link_img">
                                                    <img src={editorChoice[0]?.author_avatar_url} alt="profile" className="creator__img" />
                                                </a>
                                            </li>}
                                        <li>
                                            <a href={getProfileUrl(editorChoice[0]?.author_username)} className="creator__link creator__link_main">@{editorChoice[0]?.author_username}</a>
                                        </li>
                                        <li>
                                            <p className="creator__data creator__data_main">{formatDate(editorChoice[0]?.created_at)}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>}
                        {editorChoice[1] &&
                            <div className="posts__item posts__item_top"  style={ editorChoice[1].cover_url && { backgroundImage: `url(${editorChoice[1]?.cover_url})` }}>
                                <div className="posts__content">
                                    <a href={getCategoryUrl(editorChoice[1]?.category)} className={`category posts__category category_${editorChoice[1]?.category}`}>{editorChoice[1]?.category}</a>
                                    <h2 className="title title_mini">
                                        <a href={getArticleUrl(editorChoice[1]?.id)} className="posts__link">{editorChoice[1]?.title}</a>
                                    </h2>
                                    <ul className="creator">
                                        <li>
                                            <a href={getProfileUrl(editorChoice[1]?.author_username)} className="creator__link">@{editorChoice[1]?.author_username}</a>
                                        </li>
                                        <li>
                                            <p className="creator__data">{formatDate(editorChoice[1]?.created_at)}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                        {editorChoice[2] &&
                            <div className="posts__item posts__item_bottom"  style={ editorChoice[2].cover_url && { backgroundImage: `url(${editorChoice[2]?.cover_url})` }}>
                                <div className="posts__content">
                                    <a href={getCategoryUrl(editorChoice[2]?.category)} className={`category posts__category category_${editorChoice[2]?.category}`}>{editorChoice[2]?.category}</a>
                                    <h2 className="title title_mini">
                                        <a href={getArticleUrl(editorChoice[2]?.id)} className="posts__link">{editorChoice[2]?.title}</a>
                                    </h2>
                                    <ul className="creator">
                                        <li>
                                            <a href={getProfileUrl(editorChoice[2]?.author_username)} className="creator__link">@{editorChoice[2]?.author_username}</a>
                                        </li>
                                        <li>
                                            <p className="creator__data">{formatDate(editorChoice[2]?.created_at)}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;