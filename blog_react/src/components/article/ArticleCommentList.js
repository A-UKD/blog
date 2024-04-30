import { useEffect, useId, useState } from "react";
import blogClient from "../../utils/blog_client";
import { formatDate } from "../../utils/date";
import { getAuthHeaders, isAuthorized } from "../../utils/auth_utils";
import iconIncognito from "../../resources/img/icons/icon-incognito.svg";
import { getProfileUrl } from "../../utils/urls";

function ArticleCommentItem({comment}) {
    return (
        <div className="comments__comment" style={{paddingBottom: '20px'}}>
            <div className="comments__imgbox">
                <img src={comment.author_avatar_url ?? iconIncognito} alt="inkognito" className="comments__img" />
                </div>
            <div className="comments__content">
                <a href={getProfileUrl(comment.author_username)} className="comments__username">@{comment.author_username}</a>
                <div className="comments__content__wrapper">
                    <div className="comments__date">{formatDate(comment.created_at)}</div>
                    {/* <div className="comments__reply">Reply</div> */}
                </div>
                <div className="comments__message">{comment.content}</div>
            </div>
        </div>
    );
}

export default function ArticleCommentList({ article_id }) {
    const [comments, setComments] = useState([]);

    async function fetchComments() {
        const client = await blogClient.init();
        try {
            const response = await client.getComments({
                article__id: article_id,
                ordering: '-created_at',
            });
            setComments(response.data.results);
        } catch (error) {
            alert("Coult not fetch comments: " + error);
        }
    }

    useEffect(() => {
        fetchComments();
    }, []);

    const messageId = useId();
    const [message, setMessage] = useState('');

    async function submitComment() {
        if (!isAuthorized()) {
            alert("You must be logged in to comment");
            return;
        }
        
        if (message.length <= 0) {
            alert("Message cannot be empty");
            return;
        }

        const client = await blogClient.init();
        try {
            const response = await client.createComment({}, {
                article: article_id,
                content: message,
            }, getAuthHeaders());
            setComments([response.data, ...comments]);
            setMessage('');
        } catch (error) {
            alert("Coult not submit comment: " + error);
        }
    }

    return (
        <div className="container">
            <div className="comments article__comments">
                <h3 className="title title_mb-50">Comments</h3>
                {comments.map(comment => <ArticleCommentItem comment={comment} />)}
            </div>
            <div className="form_comments">
                <textarea id={messageId} value={message} onChange={e => setMessage(e.target.value)} type="text" name="Message" placeholder="Your Message"></textarea>
                <button onClick={submitComment} type="submit" className="button button_contact">submit</button>
            </div>
        </div>
    );
}