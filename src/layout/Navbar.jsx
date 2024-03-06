/* eslint-disable react/prop-types */
import { useDispatch} from "react-redux";
import { NavLink } from "react-router-dom";
import { login, logout } from "../redux/actions/authAction";

const Navbar = ({ isAuth }) => {
  const dispatch = useDispatch();
  return (
    <>
      
      <nav>
        <h2>loggedin</h2>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          {/* if user is logged in then show this links */}
          {isAuth ? (
            <li>
              <NavLink to="/cart">cart</NavLink>
            </li>
          ) : null}
          <li>
            <NavLink
              to="/"
              onClick={() =>
                isAuth ? dispatch(logout()) : dispatch(login())
              }
            >
              {isAuth ? "logout" : "login"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
