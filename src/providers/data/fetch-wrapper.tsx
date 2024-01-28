const customFetch = async (url: string, options: RequestInit) => {
    const accessToken = localStorage.getItem('access_token');

    const headers = options.headers || {};
}