import React, {
  useState, useEffect,
} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import SearchCollection from '../controller/SearchCollection';
import Menu from '../components/Menu';
import PhotoCards from '../components/PhotoCards';
import '../components/Menu.css';

const Home = () => {
  const [dataCollection, setDataCollecion] = useState([]);
  const [category, setcategory] = useState('aesthetic');
  const [pageNumber, setPageNumber] = useState(1);
  const [page, setPage] = useState(2);
  const getCategory = (e) => {
    setcategory(e.target.value);
  };
  const search = () => SearchCollection(pageNumber, category)
    .then((res) => (setDataCollecion(res.results)));
  useEffect(() => {
    search();
  }, []);

  const viewMore = () => SearchCollection(page, category)
    .then((res) => {
      setPage(page + 1);
      setDataCollecion((prev) => [...new Set([...prev, ...res.results])]);
    });
  console.log(category);
  console.log(dataCollection);
  return (
    <>

      <Menu
        setDataCollecion={setDataCollecion}
        search={search}
        getCategory={getCategory}
        setcategory={setcategory}
        setPageNumber={setPageNumber}
      />
      <div className="container-collection">

        <InfiniteScroll
          dataLength={dataCollection.length}
          hasMore
          next={viewMore}
        />
        {dataCollection.map((res) => (
          <PhotoCards
            key={res.id}
            photo={res.urls.small}
            username={res.user.username}
            profileImage={res.user.profile_image.small}
            description={res.description}
            imgDownload={res.links.download}
            altDescription={res.alt_description}
            likes={res.likes}
          />
        ))}


      </div>

      <div />

    </>
  );
};
export default Home;
