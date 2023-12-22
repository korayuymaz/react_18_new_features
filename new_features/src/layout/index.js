import { Outlet, Link, useLocation } from "react-router-dom";
import "./style.css";
import ListItem from "../components/layout-components/list-item";

const Layout = () => {
  const location = useLocation();
  const activeClass = "active";
  return (
    <>
      <nav>
        <ul className="navbar">
          <ListItem
            activeClass={activeClass}
            location={location.pathname}
            path={"/"}
          >
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem
            activeClass={activeClass}
            location={location.pathname}
            path={"/automatic-batching"}
          >
            <Link className="link" to="/automatic-batching">
              Automatic Batching
            </Link>
          </ListItem>
          <ListItem
            activeClass={activeClass}
            location={location.pathname}
            path={"/new-hooks"}
          >
            <Link to="/new-hooks">New Hooks</Link>
          </ListItem>
          <ListItem
            activeClass={activeClass}
            location={location.pathname}
            path={"/client-server"}
          >
            <Link to="/client-server">Client & Server Rendering</Link>
          </ListItem>
          <ListItem
            activeClass={activeClass}
            location={location.pathname}
            path={"/strict-mode"}
          >
            <Link to="/strict-mode">Strict Mode</Link>
          </ListItem>
          <ListItem
            activeClass={activeClass}
            location={location.pathname}
            path={"/suspense"}
          >
            <Link to="/suspense">Suspense Features</Link>
          </ListItem>
          <ListItem
            activeClass={activeClass}
            location={location.pathname}
            path={"/transitions"}
          >
            <Link to="/transitions">Transitions</Link>
          </ListItem>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
