import { useState } from "react";

export default function ProfileTabs({activeTab, setActiveTab, isYou}) {

    const tabs = isYou ? [
        "Articles",
        "Bookmarks",
        "Following",
    ] : [
        "Articles",
    ];
    return (
        <>
            <ul className="menu profile_menu">
                {tabs.map((tab, index) => (
                    <li>
                        <button
                            onClick={() => setActiveTab(index)}
                            className={`button button_profile ${index == activeTab && "button_profile_active"}`}>
                            {tab}
                        </button>
                    </li>
                ))}
            </ul>
            <hr className="divider divider_profile" />
        </>
    );
}