export function load({ cookies }) {
    const site_cookie = cookies.get('visited');

    cookies.set('visited', 'true', { path: '/' });
    return {
        visited: site_cookie === 'true'
    };
}