import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/netflixhome">
                Netflix Home 
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/netflixmovies">
                Netflix Movies
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/shows">
                Netflix Shows
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/teams">
                IPL TEAMS
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/usestatedemo1">
                USE STATE DEMO 1
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/usestatedemo2">
                USE STATE DEMO 2
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/usestatedemo3">
                USE STATE DEMO 3
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/employees">
                employees
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/students">
                students
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/tabledemo">
                tabledemo
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/inputdemo1">
                inputdemo1
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/inputdemo2">
                inputdemo2
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/inputdemo3">
                inputdemo3
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/formdemo3">
                formdemo3
              </Link> 
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/taskdemo">
                taskDemo
              </Link> 
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/apidemo1">
                API DEMO1
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/apidemo2">
                API DEMO2
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/apidemo3">
                API DEMO3
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/apidemo4">
                API DEMO4
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/omdbsearch">
                OMDB Search
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
