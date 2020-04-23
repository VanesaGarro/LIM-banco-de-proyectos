const clientID = 'd2mtAfA49OpMr-XGxS-8jyfpUL1Qpm6uaQ3fXNZpZzQ';
const GetCollection = () => fetch(`https://api.unsplash.com/photos/?client_id=${clientID}&per_page=30`, {
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

export default GetCollection;
