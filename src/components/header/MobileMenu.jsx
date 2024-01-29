import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ContactInfo from "./ContactInfo";

const MobileMenu = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link to="/">
          <img src="/img/general/logo.png" alt="brand" />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <Sidebar width="400" backgroundColor="#fff">
        <Menu>
          <MenuItem
            onClick={() => navigate("/")}
            className={pathname === "/destinations" ? "current" : ""}
          >
            Главная
          </MenuItem>
          <SubMenu
            label="О Бостоне"
            className={pathname === "/destinations" ? "current" : ""}
          >
            <MenuItem
              key="1"
              onClick={() => navigate("/boston/universities")}
              className={pathname === "/destinations" ? "current" : ""}
            >
              Университеты
            </MenuItem>
            <MenuItem
              key="2"
              onClick={() => navigate("/boston/events")}
              className={pathname === "/destinations" ? "current" : ""}
            >
              События
            </MenuItem>
            <MenuItem
              key="3"
              onClick={() => navigate("/boston/attractions")}
              className={pathname === "/destinations" ? "current" : ""}
            >
              Достопримечательности
            </MenuItem>
          </SubMenu>
          <SubMenu
            label="Поездки"
            className={pathname === "/destinations" ? "current" : ""}
          >
            <MenuItem
              key="1"
              onClick={() => navigate("/trips/upcoming")}
              className={pathname === "/destinations" ? "current" : ""}
            >
              Предстоящие
            </MenuItem>
            <MenuItem
              key="2"
              onClick={() => navigate("/trips/past")}
              className={pathname === "/destinations" ? "current" : ""}
            >
              Предыдущие
            </MenuItem>
          </SubMenu>
          {/* End  All Pages Menu */}

          <MenuItem
            onClick={() => navigate("/about")}
            className={pathname === "/destinations" ? "current" : ""}
          >
            О нас
          </MenuItem>
          {/* End  All Dashboard Menu */}

          <MenuItem
            onClick={() => navigate("/apply")}
            className={pathname === "/destinations" ? "current" : ""}
          >
            Оставить заявку
          </MenuItem>
          {/* End Contact  Menu */}
        </Menu>
      </Sidebar>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-20">
          <Link
            className=" button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white"
            to="/trips"
          >
            Предстоящие поездки
          </Link>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
