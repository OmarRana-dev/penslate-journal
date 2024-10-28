import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { Logo, Logout } from "../";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation();
  const isEditer = location.pathname.includes("/editer");

  return (
    <div className="navbar  bg-orange-400 ">
      <div className="flex-1">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex-none gap-2">
        {/* if user is already login */}
        {console.log(authStatus)}
        {authStatus && (
          <>
            {!isEditer && (
              <>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-24 md:w-auto"
                  />
                </div>
                <div
                  onClick={() => navigate("/editer")}
                  className="btn "
                >
                  <FontAwesomeIcon icon={faEdit} />
                  <span>Write</span>
                </div>
              </>
            )}
            {isEditer && (
              <>
                <div className="btn  btn-sm btn-outline btn-success">
                  Publish
                </div>
              </>
            )}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <Logout />
                </li>
              </ul>
            </div>
          </>
        )}

        {/* if user is currently not login */}
        {!authStatus && (
          <>
            <div onClick={() => navigate("/login")} className="btn">
              Login
            </div>
            <div onClick={() => navigate("/signup")} className="btn">
              SignUp
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
