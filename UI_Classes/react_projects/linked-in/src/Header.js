import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import TextsmsIcon from "@material-ui/icons/Textsms";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="s">
            <LinkedInIcon className="fs-1" />
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-2">
                <a className="nav-link active" aria-current="page" href="#">
                  <div>
                    <div className="text-center pb-2">
                      <HomeIcon />
                    </div>
                    <div>Home</div>
                  </div>
                </a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" href="#">
                  <div>
                    <div className="text-center pb-2">
                      <PeopleIcon />
                    </div>
                    <div>My Network</div>
                  </div>
                </a>
              </li>

              <li className="nav-item me-2">
                <a className="nav-link" href="#">
                  <div>
                    <div className="text-center pb-2">
                      <WorkIcon />
                    </div>
                    <div>Jobs</div>
                  </div>
                </a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" href="#">
                  <div>
                    <div className="text-center pb-2">
                      <TextsmsIcon />
                    </div>
                    <div>Messaging</div>
                  </div>
                </a>
              </li>
              <li className="nav-item me-2">
                <a className="nav-link" href="#">
                  <div>
                    <div className="text-center pb-2">
                      <NotificationsActiveIcon />
                    </div>
                    <div>Notifications</div>
                  </div>
                </a>
              </li>
              <li className="nav-item dropdown me-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="pb-2">
                    <AccountCircleIcon />
                  </div>
                  <span>Me</span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item me-2">
                <a className="nav-link" href="#">
                  <div>
                    <div className="text-center pb-2">
                      <ViewComfyIcon />
                    </div>
                    <div>Work</div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <div>
                    <div className="text-center pb-2">
                      <BusinessCenterIcon />
                    </div>
                    <div>Advertise</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
