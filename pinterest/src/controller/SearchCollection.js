const clientID = 'd2mtAfA49OpMr-XGxS-8jyfpUL1Qpm6uaQ3fXNZpZzQ';
const SearchCollection = (page, query) => fetch(`https://api.unsplash.com/search/photos?&page=${page}&query=${query}&client_id=${clientID}&per_page=30`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((res) => {
  if (res.status === 200) {
    return res.json();
  }
  return Promise.reject(console.log(res));
});

export default SearchCollection;
