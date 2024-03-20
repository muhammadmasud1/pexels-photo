import { useState } from "react";
import Loarder from "./Loarder";
import { CiSaveDown2 } from "react-icons/ci";
import { GoDownload } from "react-icons/go";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const Picture = ({ photos, setSearch, loader, saved, setSaved }) => {
  const [checkButton, SetcheckButton] = useState(null);

  const handleDownload = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  /* ===========saved images ==========*/

  const savedImages = (img) => {
    const flag = true;
    if (saved != null && saved.length > 0) {
      for (let i = 0; i < saved.length; i++) {
        if (saved[i].id === img.id) {
           Swal.fire({
             position: "center",
             icon: "error",
             title: "Already Images Saved",
             showConfirmButton: false,
             timer: 1200,
           });
           flag = false;
          break;
        }
      }
    } 
      if (flag) {
        setSaved([...saved, img]);
        console.log("images Added");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Image Saved Successfull",
          showConfirmButton: false,
          timer: 1200,
        });
      }
    
  };
  return (
    <div className="container max-w-6xl mx-auto my-36">
      <div className="flex justify-center items-center gap-5">
        <button
          className={`px-5 py-3 text-xl  rounded-full ${
            checkButton === "nature" ? "bg-black text-white" : "text-black"
          }`}
          onClick={() => {
            setSearch("nature");
            SetcheckButton("nature");
          }}
        >
          Nature
        </button>
        <button
          className={`px-5 py-3 text-xl  rounded-full ${
            checkButton === "car" ? "bg-black text-white" : "text-black"
          }`}
          onClick={() => {
            setSearch("car");
            SetcheckButton("car");
          }}
        >
          Car
        </button>
        <button
          className={`px-5 py-3 text-xl rounded-full ${
            checkButton === "ai" ? "bg-black text-white" : "text-black"
          }`}
          onClick={() => {
            setSearch("ai");
            SetcheckButton("ai");
          }}
        >
          {" "}
          Artificial AI
        </button>
        <button
          className={`px-5 py-3 text-xl rounded-full ${
            checkButton === "fashion" ? "bg-black text-white" : "text-black"
          }`}
          onClick={() => {
            setSearch("fashion");
            SetcheckButton("fashion");
          }}
        >
          {" "}
          Fashion
        </button>
        <button
          className={`px-5 py-3 text-xl rounded-full ${
            checkButton === "film" ? "bg-black text-white" : "text-black"
          }`}
          onClick={() => {
            setSearch("film");
            SetcheckButton("film");
          }}
        >
          {" "}
          Film
        </button>

        <Link to={"/saved"}>
          <button className="px-5 py-3 text-xl text-black rounded-full">
            Saved
          </button>
        </Link>
      </div>
      <div className="ItemContainer my-10" id="top">
        <div className="content flex justify-between items-center">
          <h1 className="text-2xl font-bold ">Free Stock Photos</h1>
          <div className="selected">
            <select className="select select-accent border border-black w-full max-w-xs">
              <option disabled selected>
                Tranding
              </option>
              <option>New</option>
              <option>Flowing</option>
            </select>
          </div>
        </div>
        {loader ? (
          <Loarder></Loarder>
        ) : (
          <>
            <div
              className="itemCard grid grid-cols-1 items-start justify-center sm:grid-cols-1 
        md:grid-cols-2 lg:grid-cols-3 gap-5 my-20"
            >
              {photos.map((photoItem) => (
                <div key={photoItem.id}>
                  <div className="card bg-base-100 shadow-xl relative">
                    <figure className="">
                      <img
                        className="overflow-hidden relative rounded-md w-full h-full hover:scale-105 transition-all hover:cursor-pointer"
                        src={photoItem.src.medium}
                        alt="Photos"
                      />
                    </figure>
                    <div className=" z-30 absolute bottom-3 right-3 opacity-0 transition-opacity duration-300">
                      <button
                        className=" text-xl py-2 px-3 bg-[#088970] rounded-full 
                        hover:opacity-100 inline-block text-white"
                        onClick={() => handleDownload(photoItem.src.original)}
                      >
                        <span className="inline-block text-center">
                          <GoDownload></GoDownload>
                        </span>{" "}
                        Download
                      </button>
                    </div>
                    <div className="absolute top-4 right-3 opacity-0 transition-opacity duration-300">
                      <li
                        className="text-xl py-2 px-5 bg-[#fff]  rounded-full 
                        hover:opacity-100 inline-block text-black cursor-pointer"
                        onClick={() => savedImages(photoItem)}
                      >
                        <CiSaveDown2 />
                      </li>
                    </div>
                    <div className="flex gap-2 justify-center items-center absolute bottom-3 left-3 opacity-0 transition-opacity duration-300">
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        src={photoItem.src.tiny}
                        alt=""
                      />
                      <h4 className="text-white font-bold">
                        {photoItem.photographer}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="text-center">
          {photos.length != 0 && (
            <button>
              <a
                className="px-4 py-2 bg-black text-white rounded-full text-xl"
                href="#top"
              >
                Back to Top
              </a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Picture;
