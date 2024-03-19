import  { useState } from "react";

const Picture = ({photos}) => {
  const [clickedButton, setClickedButton] = useState(null);
  console.log(photos)
  const handleButtonClick = (button) => {
    setClickedButton(button);
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
        <div className="itemCard grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20">
          {photos.map((photoItem) => (
            <div key={photoItem.id}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="overflow-hidden rounded-md w-full h-full"
                    src={photoItem.src.medium}
                    alt="Photos"
                  />
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Picture;
