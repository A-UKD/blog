import blogClient from '../../utils/blog_client';
import { useState, useEffect } from 'react';

function _getTagUrl(name) {
    return `/tag/${name}`;
}

function TagList() {
    const [tags, setTags] = useState([]);

    async function fetchTags() {
        const client = await blogClient.init();
        try {
            const response = await client.getTags({
                limit: 11
            });

            setTags(response.data.results);
        } catch (error) {
            alert("Coult not fetch tags: " + error);
        }
    }

    useEffect(() => {
        fetchTags();
    }, []);

    return (
        <div className="tags extra__tags">
            <h2 className="title title_extra">tags</h2>
            <ul className="menu tags__list">
                {tags.map(tag => _TagItem(tag.name))}
            </ul>
        </div>
    );
}
function _TagItem(name) {
    return (
        <li><a 
        // href={_getTagUrl(name)}
         className="tags__link">#{name}</a></li>
    );
}

export default TagList;