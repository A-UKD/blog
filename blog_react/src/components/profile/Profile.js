import './profile.scss';

import { useState, useEffect, act } from 'react';
import blogClient from '../../utils/blog_client';
import { getProfileUrl } from '../../utils/urls';
import { formatDate } from '../../utils/date';
import { deleteTokenCookie, deleteUsernameCookie, getTokenCookie } from '../../utils/cookie_manager';
import illuminatiIcon from '../../resources/img/icons/icon-illuminati.svg';
import ProfileTabs from './ProfileTabs';
import EmptyPlaceholder from './EmptyPlaceholder';
import ProfileArticlesList from './ProfileArticlesList';
import ProfileFollowingList from './ProfileFollowingList';
import { getAuthHeaders, isAuthorized } from '../../utils/auth_utils';

export default function Profile({ username }) {
    const [profile, setProfile] = useState([]);

    function logout() {
        deleteTokenCookie();
        deleteUsernameCookie();
        window.location.href = "/";
    }

    async function fetchProfile() {
        const client = await blogClient.init();
        try {
            const response = await client.getProfile({ username: username }, {}, getAuthHeaders());
            setProfile(response.data);
        } catch (error) {
            alert("Coult not fetch profile: " + error);
        }
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    const [activeTab, setActiveTab] = useState(0);
    const whats = [
        "Articles",
        "Bookmarks",
        "Following",
    ];

    async function toggleFollow() {
        if (!isAuthorized()) {
            return;
        }

        const client = await blogClient.init();
        try {
            let response = null;
            if (profile.are_you_subscribed) {
                response = await client.unsubscribe({ username: profile.username }, {}, getAuthHeaders());
            } else {
                response = await client.subscribe({ username: profile.username }, {}, getAuthHeaders());
            }
            const newProfile = { ...profile, are_you_subscribed: !profile.are_you_subscribed, subscribers_count: !profile.are_you_subscribed ? profile.subscribers_count + 1 : profile.subscribers_count - 1, };
            setProfile(newProfile);
        } catch (error) {
            alert("Coult not toggle follow: " + error);
        }
    }

    return (
        <section className="profile">
            <div className="container container_main">
                <div className="profile__wrapper">
                    <div className="profile__main">
                        <div className="profile__char">
                            <div className='profile__imgbox'>
                                <img src={profile.avatar_url} className="profile__img" />
                            </div>
                            <div className="profile__about">
                                <div className="profile__initial">
                                    {profile.public_name && <div className="profile__pablicname">{profile.public_name}</div>}
                                    <a href={getProfileUrl(profile.username)} className="profile__username">@{profile.username}</a>
                                </div>
                                <p className="profile__text">{profile.bio}</p>
                            </div>
                            {isAuthorized() && !profile.is_you && <button onClick={toggleFollow} className="button button_follow">{profile.are_you_subscribed ? "Unfollow" : "Follow"}</button>}
                            {isAuthorized() && profile.is_you && <button className="button button_follow" onClick={logout}>Logout</button>}
                        </div>
                        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} isYou={profile.is_you} />
                    </div>
                    <aside className="aside profile__aside">
                        <div className="title title_aside">INFORMATION</div>
                        <hr className="divider" />
                        <div className="aside__info">
                            <h5 className="title title_aside title_plus">Rating:</h5>
                            <p className="aside__descr">{profile.total_articles_rating}</p>
                            <h5 className="title title_aside title_plus">Registered:</h5>
                            <p className="aside__descr">{formatDate(profile.date_joined)}</p>
                            <h5 className="title title_aside title_plus">Subscribers:</h5>
                            <p className="aside__descr">{profile.subscribers_count}</p>
                            {/* <h5 className="title title_aside title_plus">Activity:</h5>
                            <p className="aside__descr">today at 23:26</p> */}
                        </div>
                    </aside>
                    {activeTab == 0 && <ProfileArticlesList username={username} />}
                    {activeTab == 1 && <ProfileArticlesList username={username} favorited={true} />}
                    {activeTab == 2 && <ProfileFollowingList />}
                    {/* <EmptyPlaceholder what={whats[activeTab]} /> */}
                </div>
            </div>
        </section>
    );
}