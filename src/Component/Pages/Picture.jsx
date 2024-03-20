import { useState } from "react";
import Loarder from "./Loarder";



const Picture = ({ photos, setSearch, loader }) => {
  const [checkButton, SetcheckButton] = useState(null);

  const handleDownload = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

        <button className="px-5 py-3 text-xl text-black rounded-full">
          Saved
        </button>
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
                    <div className="absolute bottom-3 left-3 opacity-0 transition-opacity duration-300">
                      <button
                        className="text-xl py-2 px-5 bg-[#088970] rounded-full hover:opacity-100 inline-block text-white"
                        onClick={() => handleDownload(photoItem.src.original)}
                      >
                        Download
                      </button>
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
