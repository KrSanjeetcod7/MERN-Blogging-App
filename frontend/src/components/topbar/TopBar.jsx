import { useContext } from "react";
import {NavLink} from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

const TopBar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <NavLink className="NavLink" to="/">
              HOME
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink className="NavLink" to="/">
              ABOUT
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink className="NavLink" to="/">
              CONTACT
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink className="NavLink" to="/write">
              WRITE
            </NavLink>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <NavLink to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </NavLink>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <NavLink className="NavLink" to="/login">
                LOGIN
              </NavLink>
            </li>
            <li className="topListItem">
              <NavLink className="NavLink" to="/register">
                REGISTER
              </NavLink>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
export default TopBar;