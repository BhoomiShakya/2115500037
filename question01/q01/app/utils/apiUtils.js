const axios = require('axios');

async function fetchNumbers(type) {
    const urls = {
        p: 'http://20.244.56.144/test/primes',
        f: 'http://20.244.56.144/test/fibo',
        e: 'http://20.244.56.144/test/even',
        r: 'http://20.244.56.144/test/rand'
    };

    const headers = {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNzc4MTkxLCJpYXQiOjE3MjA3Nzc4OTEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjUyMWZlNzM1LTJlMzgtNDdhNy05MGZjLWViYjQyZDVkNTQyZiIsInN1YiI6ImJob29taS5zaGFreWFfY3MuYWltbDIxQGdsYS5hYy5pbiJ9LCJjb21wYW55TmFtZSI6IkFmZm9yZCBNZWRpY2FsIiwiY2xpZW50SUQiOiI1MjFmZTczNS0yZTM4LTQ3YTctOTBmYy1lYmI0MmQ1ZDU0MmYiLCJjbGllbnRTZWNyZXQiOiJ2R2lnRk9kTFFmc0xlSWFzIiwib3duZXJOYW1lIjoiQmhvb21pIFNoYWt5YSIsIm93bmVyRW1haWwiOiJiaG9vbWkuc2hha3lhX2NzLmFpbWwyMUBnbGEuYWMuaW4iLCJyb2xsTm8iOiIyMTE1NTAwMDM3In0.d4mZ5XXabd5Ngm6fahXVyjvGRui1lrnueTgWZ3IzrqA'
    };

    try {
        const response = await axios.get(urls[type], { headers, timeout: 5000 });
        if (response.status !== 200) {
            throw new Error(`Unexpected response status: ${response.status}`);
        }
        return response.data.numbers;
    } catch (error) {
        console.error('Error fetching numbers:', error.message);
        throw new Error('Error fetching numbers from third-party server');
    }
}

module.exports = {
    fetchNumbers
};
