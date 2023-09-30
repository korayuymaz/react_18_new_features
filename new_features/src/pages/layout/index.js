import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/automatic-batching">Automatic Batching</Link>
          </li>
          <li>
            <Link to="/new-hooks">New Hooks</Link>
          </li>
          <li>
            <Link to="/client-server">Client & Server Rendering</Link>
          </li>
          <li>
            <Link to="/strict-mode">Strict Mode</Link>
          </li>
          <li>
            <Link to="/suspense">Suspense Features</Link>
          </li>
          <li>
            <Link to="/transitions">Transitions</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;