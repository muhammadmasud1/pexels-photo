import { useEffect, useState } from "react";
import Banner from "../Header/Banner";
import Navbar from "../Header/Navbar";
import Picture from "./Picture";
import axios from "axios";
import { Outlet } from "react-router-dom";

const Home = () => {
  const API_KEY = "32RbjC9489RT7tkziFOgH7wbZStsOVRHrO5zPRQJIDuhrndl03Opu1DE";
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("new york");
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      //console.log("response", res.data.photos)
      setPhotos(res.data.photos);
      setLoader(false);
     /*  console.log(res); */
    };
    fetchImage();
  }, [search]);
  console.log("images is saved" , saved)
  return (
    <div>
      <Navbar setSearch={setSearch}></Navbar>
      <Banner setSearch={setSearch}></Banner>
      <Picture photos={photos} 
      setSearch={setSearch}
       loader={loader}
       saved= {saved}
       setSaved={setSaved}
       ></Picture>
       <Outlet></Outlet>
       
    </div>
  );
};

export default Home;
