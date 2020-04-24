import React, { useState, useEffect } from 'react';
import GetCollection from '../controller/GetCollection';
import SearchCollection from '../controller/SearchCollection';
import Menu from '../components/Menu';

const Home = () => {
  const [dataCollection, setDataCollecion] = useState([]);
  const [category, setcategory] = useState([]);

  const getCollection = () => GetCollection().then((res) => (setDataCollecion(res)));

  useEffect(() => {
    getCollection();
  }, []);
  const getCategory = (e) => {
    setcategory(e.target.value);
  };
  console.log(category);
  const search = () => SearchCollection(category).then((res) => (setDataCollecion(res.results)));
  const viewCollection = () => dataCollection.map((res) => (
    <img src={res.urls.small} alt="collection" className="card-image" />
  ));
  return (
    <>
      <Menu
        getCollection={getCollection}
        search={search}
        getCategory={getCategory}
        category={category}
      />

      <div className="container-cards">
        {viewCollection()}
      </div>

    </>
  );
};
export default Home;
