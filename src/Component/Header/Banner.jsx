
const Banner = () => {
  return (
    <div className="overlay">
      <div
        className="bannerContainer "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/19311591/pexels-photo-19311591.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1400&dpr=1')",
        }}
      >
        <div className="hero-overlay bg-opacity-40">
          <div className="max-w-6xl mx-auto text-center   ">
            <div className="py-44">
              <h1 className="text-4xl text-white font-bold">
                The best free stock photos, royalty free <br />
                images & videos shared by creators.
              </h1>
              <div className="flex items-center justify-center my-5">
                <form className="text-center">
                  <div className="flex">
                    <label
                      htmlFor="search-dropdown"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Your Email
                    </label>
                    <button
                      id="dropdown-button"
                      data-dropdown-toggle="dropdown"
                      className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg hover:bg-gray-200   focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                      type="button"
                    >
                      All categories{" "}
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id="dropdown"
                      className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Photos
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Videos
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="relative w-96">
                      <input
                        type="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 outline-none bg-gray-50 rounded-e-lg  rounded-s-2 border border-gray-300 py-3"
                        placeholder="Search For Free Photo"
                        required
                      />
                      <button
                        type="submit"
                        className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-black bg-transparent rounded-e-lg border "
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <h3 className="text-[#ccc] text-xl">
                Tranding :{" "}
                <span className="text-white font-semibold">
                  Game, Plans, Burger, Italy, st Praticks Day
                </span>{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
