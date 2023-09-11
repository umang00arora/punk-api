import { useState } from "react";
import SearchForm from "../components/SearchForm";
import ShowGrid from "../components/ShowGrid";

const Home = () => {
  const [apiData, setApiData] = useState([]);

  const onSearch = async (searchString) => {
    const url = `https://api.punkapi.com/v2/beers?beer_name=${searchString}`;
    const response = await fetch(url);
    const body = await response.json();
    //console.log(body)
    setApiData(body);
  };

  const renderAPIdata = () => {
    if (apiData) {
      //console.log(apiData)
      return (
        <>
          <ShowGrid beers={apiData} />
        </>
      );
    }
    return "No entry Found";
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderAPIdata()}</div>
    </div>
  );
};

export default Home;
