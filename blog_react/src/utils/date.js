export function formatDate(date) {
    return new Date(Date.parse(date)).toLocaleDateString(undefined, {
        hour: 'numeric',
        minute: 'numeric',
    });
}