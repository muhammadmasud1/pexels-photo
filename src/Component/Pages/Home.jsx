import { useEffect, useState } from "react";
import Banner from "../Header/Banner";
import Navbar from "../Header/Navbar";
import Picture from "./Picture";
import axios from "axios";

const Home = () => {

   const API_KEY = "32RbjC9489RT7tkziFOgH7wbZStsOVRHrO5zPRQJIDuhrndl03Opu1DE";
   const [photos, setPhotos] = useState([])

   useEffect(()=> {
    const fetchImage = async() => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=nature&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      ); 
      //console.log("response", res.data.photos)
      setPhotos(res.data.photos)
     
    }
    fetchImage()
   },[])
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Picture photos={photos}></Picture>
    </div>
  );
};

export default Home;
