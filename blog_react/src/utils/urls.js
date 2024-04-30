export function getProfileUrl(username) {
    return `/profile/${username}`;
}

export function getArticleUrl(id) {
    return `/article/${id}`;
}

export function getCategoryUrl(category) {
    if (!category || category === "null") {
        return `/categories`;
    }
    return `/categories/${category}`
}