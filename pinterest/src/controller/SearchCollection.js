const clientID = 'd2mtAfA49OpMr-XGxS-8jyfpUL1Qpm6uaQ3fXNZpZzQ';
const SearchCollection = (query) => fetch(`https://api.unsplash.com/search/photos?per_page=30&query=${query}&client_id=${clientID}`, {
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
