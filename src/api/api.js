const API_BASE_URL = 'https://api.imgur.com/3/';
const CLIENT_ID = '7ec181c9dda193d';

const fetchImages = async () => {
    const response = await fetch(API_BASE_URL + 'gallery/hot', {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
            Authorization: 'Client-ID ' + CLIENT_ID
        })
    });
    return await response.json();
};

export { fetchImages };
