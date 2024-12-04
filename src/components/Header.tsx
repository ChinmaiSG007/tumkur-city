import { Navbar } from "react-bootstrap";
import NavBarNew from "./NavBarNew";
import SIT from "./../../public/SIT.png";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" variant="light" className="MainHeader">
        <div className="d-flex align-items-center">
          <img src={SIT} alt="SIT logo" className="logo" />
          <Navbar.Brand href="#home">
            <h1 className=" pl-3 text-white">
              <b>P DAD</b>
            </h1>
          </Navbar.Brand>
        </div>
        <h1 className="pl-3 float-left text-2xl font-extrabold animated-header">
          <span className="word word-1">PAVEMENT</span>
          <span className="word word-2">DATA</span>
          <span className="word word-3">AGGREGATION</span>
          <span className="word word-4">DASHBOARD</span>
        </h1>
      </Navbar>
      <NavBarNew />
    </div>
  );
};

export default Header;
