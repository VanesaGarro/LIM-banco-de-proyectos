import React, { useState, useEffect } from 'react';
import GetCollection from '../controller/GetCollection';

const Home = () => {
  const [dataCollection, setDataCollecion] = useState([]);
  const getCollection = () => GetCollection().then((res) => (setDataCollecion(res)));

  useEffect(() => {
    getCollection();
  }, []);

  console.log(dataCollection);
  return (
    <>
      <h1> hola</h1>
      <div>
        {dataCollection.map((res) => (
          <img src={res.urls.thumb} alt="collection" />
        ))}
      </div>
    </>
  );
};
export default Home;
