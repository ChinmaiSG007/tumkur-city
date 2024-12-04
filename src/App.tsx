import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const renderPage = () => {
    if (window.location.pathname === "/about") {
      return <About text="About Us" />;
    } else if (window.location.pathname === "/wards") {
      return <About text="Wards" />;
    } else {
      return <Home />;
    }
  };
  return (
    <>
      <Header />
      <div>{renderPage()}</div>
      {/* <div className="relative">
        <img src={mainMap} className="img-map" />
        <div className="absolute top-8 border border-gray-700 rounded-lg bg-gray-50/50 p-3">
          <h2 className="text-xl font-bold pb-3 text-left	">Need for Study</h2>
          <p className="text-base font-medium text-justify">
            The above study is made to develop a map of the study area which
            contains road related information like length of the road, width of
            the road and latitudinal positioning .This map is made available in
            a user friendly platform developed, so that the user can get the
            information of the road of the project area by sitting at any corner
            of the world instead of going to the project site for the
            information.
          </p>
        </div>
      </div> */}
      {/* <ImageComponent /> */}
      {/* <img src={Test} alt="Map" /> */}
    </>
  );
}

export default App;
