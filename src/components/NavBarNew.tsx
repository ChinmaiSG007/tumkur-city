import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

const navBarData = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About Us",
    submenu: [
      {
        label: "Orgainzation",
        url: "/",
      },
      {
        label: "Mission",
        url: "/",
      },
      {
        label: "Gallery",
        url: "/",
      },
      {
        label: "Certification",
        url: "/",
      },
    ],
  },
  {
    label: "E-Services",
    submenu: [
      {
        label: "Tour Map",
        url: "/",
      },
      {
        label: "Wards (in rows and columns)",
        submenu: [
          {
            label: "Map",
            url: "/",
          },
          {
            label: "Survey Data",
            url: "/",
          },
          {
            label: "Co-ordinates",
            url: "/",
          },
          {
            label: "Auto CAD File",
            url: "/",
          },
        ],
      },
    ],
  },
  {
    label: "Documents",
    submenu: [
      {
        label: "Offline / Download",
        url: "/",
      },
      {
        label: "Tour map / Town planning documents",
        url: "/",
      },
    ],
  },
  {
    label: "Contact Us",
    submenu: [
      {
        label: "Head",
        submenu: [
          {
            label: "Gmail",
            url: "/",
          },
          {
            label: "Contact",
            url: "/",
          },
        ],
      },
      {
        label: "Co-workers",
        submenu: [
          {
            label: "1",
            submenu: [
              {
                label: "Gmail",
                url: "/",
              },
              {
                label: "Contact",
                url: "/",
              },
            ],
          },
          {
            label: "2",
            submenu: [
              {
                label: "Gmail",
                url: "/",
              },
              {
                label: "Contact",
                url: "/",
              },
            ],
          },
        ],
      },
    ],
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
    color: "black",
    fontWeight: "bold",
  };
  return (
    <div>
      <Navbar bg="light" expand="lg" variant="light">
        <Navbar.Brand href="#home">
          <h1 className=" pl-3">
            <b>P DAD</b>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={navStyle}>
            {menuShow(navBarData)}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarNew;
