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
  const search = () => SearchCollection(pageNumber, category).then((res) => (setDataCollecion(res.results)));
  useEffect(() => {
    search();
  }, [category]);

  const viewMore = () => SearchCollection(page, category).then((res) => { setPage(page + 1); setDataCollecion((prev) => [...new Set([...prev, ...res.results])]); });

  console.log(dataCollection);
  console.log(category);
  return (
    <>

      <Menu
        setDataCollecion={setDataCollecion}
        search={search}
        getCategory={getCategory}
        setcategory={setcategory}
        setPageNumber={setPageNumber}
      />
      <div className="container">

        <InfiniteScroll
          dataLength={dataCollection.length}
          hasMore
          next={viewMore}
        />
        {dataCollection.map((res) => (
          <PhotoCards
            photo={res.urls.small}
            username={res.user.username}
            profile_image={res.user.profile_image.small}
            description={res.description}
            imgDownload={res.links.download}
            alt_description={res.alt_description}
            likes={res.likes}
          />
        ))}


      </div>

      <div />

    </>
  );
};
export default Home;
