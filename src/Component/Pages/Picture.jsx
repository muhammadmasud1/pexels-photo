import { useState } from "react";

const Picture = ({ photos }) => {
  const [clickedButton, setClickedButton] = useState(null);
  console.log(photos);
  const handleButtonClick = (button) => {
    setClickedButton(button);
  };


 const handleDownload = (imageUrl) => {
   const link = document.createElement("a");
   link.href = imageUrl;
   link.download = "image.jpg";
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
 };
  return (
    <div className="max-w-6xl mx-auto my-36">
      <div className="flex justify-center items-center gap-4">
        <button
          className={`button py-4 px-8  text-[16px] rounded-full ${
            clickedButton === "nature"
              ? "bg-blue-900 text-white"
              : " text-black"
          }`}
          onClick={() => handleButtonClick("nature")}
        >
          Nature
        </button>
        <button
          className={`button py-4 px-8 text-[16px] rounded-full ${
            clickedButton === "travel" ? "bg-blue-900 text-white" : "text-black"
          }`}
          onClick={() => handleButtonClick("travel")}
        >
          Travel
        </button>
        <button
          className={`button py-4 px-8 text-[16px] rounded-full ${
            clickedButton === "city" ? "bg-blue-900 text-white" : "text-black"
          }`}
          onClick={() => handleButtonClick("city")}
        >
          City
        </button>
        <button
          className={`button py-4 px-8 text-[16px] rounded-full ${
            clickedButton === "technology"
              ? "bg-blue-900 text-white"
              : "text-black"
          }`}
          onClick={() => handleButtonClick("technology")}
        >
          Technology
        </button>
        <button
          className={`button py-4 px-8 text-[16px] rounded-full ${
            clickedButton === "fashion"
              ? "bg-blue-900 text-white"
              : "text-black"
          }`}
          onClick={() => handleButtonClick("fashion")}
        >
          Fashions
        </button>
        <button
          className={`button py-4 px-8 text-[16px] rounded-full ${
            clickedButton === "cars" ? "bg-blue-900 text-white" : "text-black"
          }`}
          onClick={() => handleButtonClick("cars")}
        >
          Cars
        </button>
        <button
          className={`button py-4 px-8 text-[16px] rounded-full ${
            clickedButton === "save" ? "bg-blue-900 text-white" : "text-black"
          }`}
          onClick={() => handleButtonClick("save")}
        >
          Saved
        </button>
      </div>
      <div className="ItemContainer my-10">
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
        <div className="itemCard grid grid-cols-1 items-start justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
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
      </div>
    </div>
  );
};

export default Picture;
