import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
// import ClipLoader from "react-spinners/ClipLoader";
import PacmanLoader from "react-spinners/PacmanLoader";

// import

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className="App  ">
        {loading ? (

          <div className="flex justify-center m-60">
            
          
          <PacmanLoader

              
            
            color={"rgb(134 25 143)"}
            loading={loading}
            size={70}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

</div>
        ) : (
          // <GridLoader
          //   color={'#D0021B'}
          //   loading={loading}

          //   size={100}
          //   aria-label="Loading Spinner"
          //   data-testid="loader"
          // />
          <div>
            <Navbar />
            <Outlet />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
