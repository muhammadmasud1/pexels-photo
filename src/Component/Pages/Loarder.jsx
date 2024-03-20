import { BallTriangle } from "react-loader-spinner";

const Loarder = () => {
              return (
                <div className="spinner">   
                  <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                </div>
              );
};

export default Loarder;