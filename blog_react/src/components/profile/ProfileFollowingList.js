import { useEffect, useState } from "react";
import blogClient from "../../utils/blog_client";
import { getAuthHeaders } from "../../utils/auth_utils";
import { getProfileUrl } from "../../utils/urls";

export default function ProfileFollowingList() {
    const [profiles, setProfiles] = useState([]);

    async function fetchUserFollowings() {
        const client = await blogClient.init();
        try {
            const response = await client.getProfiles({
                ordering: '-total_articles_rating',
                subscribed: true,
            }, {}, getAuthHeaders());
            setProfiles(response.data.results);
        } catch (error) {
            alert("Coult not fetch following profiles: " + error);
        }
    }

    useEffect(() => {
        fetchUserFollowings();
    }, []);

    return (
        <>
            {profiles.map(profile => (
                <a href={getProfileUrl(profile.username)}>@{profile.username}</a>
            ))}
        </>
    );
}