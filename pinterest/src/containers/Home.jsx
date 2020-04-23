import React, { useState, useEffect } from 'react';
import GetCollection from '../controller/GetCollection';
import Menu from '../components/Menu';

const Home = () => {
  const [dataCollection, setDataCollecion] = useState([]);
  const getCollection = () => GetCollection().then((res) => (setDataCollecion(res)));

  useEffect(() => {
    getCollection();
  }, []);

  console.log(dataCollection);
  return (
    <>
      <Menu />
      <div className="container-cards">
        {dataCollection.map((res) => (
          <img src={res.urls.thumb} alt="collection" className="card-image" />
        ))}
      </div>
    </>
  );
};
export default Home;
