import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 19a1d8309b738f7fc03dd2556410b878ec3426e607b6b3b69124d41a98bba2f2'
    }
});