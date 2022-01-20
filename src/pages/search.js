import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "../component/search/Carousel";

const Search = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    if (myData) {
      console.log("hello");
    }
  }, [myData]);

  useEffect(() => {
    async function handleData() {
      const { data } = await axios.get(
        "https://dczew.sse.codesandbox.io/get-data"
      );
      setMyData(data.characters);
      console.log(data);
    }

    handleData();
  }, []);

  return (
    <div>
      {myData.length}
      <Carousel>
        {myData.map((item, i) => (
          <item key={i} name={item.name} image={item.image} />
        ))}
      </Carousel>
    </div>
  );
};
export default Search;
