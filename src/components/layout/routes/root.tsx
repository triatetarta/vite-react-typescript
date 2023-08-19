import { Link, Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <>
      <div id='sidebar'>
        <h1>
          <Link to='/'>Places App | Business</Link>
        </h1>
        <div>Sidebar</div>
        <nav>
          <ul>
            <li>
              <Link to={`/business-list`}>Business List (nested route)</Link>
            </li>
            <li>
              <Link to={`/business-list-two`}>
                Business List Two (new page)
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  );
};
