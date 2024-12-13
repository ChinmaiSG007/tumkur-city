import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";

const navBarData = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About Us",
    url: "/about",
  },
  {
    label: "Tumkur",
    submenu: [
      {
        label: "District",
        url: "/",
      },
      {
        label: "City",
      },
    ],
  },
  {
    label: "Wards",
    url: "/wards",
  },
];

const NavBarNew = () => {
  const menuShow = (mItems: any[]) => {
    return mItems.map((item, index) => {
      if (item.submenu) {
        return (
          <NavDropdown
            title={item.label}
            key={index}
            className="dropdown-menu-dark dropend"
          >
            {menuShow(item.submenu)}
          </NavDropdown>
        );
      } else {
        return (
          <Nav.Link href={item.url} key={index}>
            {item.label}
          </Nav.Link>
        );
      }
    });
  };
  const navStyle = {
    fontWeight: "bold",
  };
  return (
    <div>
      <Navbar className="SecondaryHeader" expand="lg" variant="light">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto section-nav" style={navStyle}>
            {menuShow(navBarData)}
          </Nav>
          <div className="search-icon-container" style={{ marginLeft: "auto" }}>
            <FaSearch size={24} color="currentColor" />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarNew;
