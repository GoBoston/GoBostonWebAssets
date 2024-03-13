import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import {
  isActiveLink,
} from "../../utils/linkActiveChecker";

const MainMenu = ({ style = "" }) => {
  const { pathname } = useLocation();
  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`menu-item-has-children`}
        >
          <a href="/">
            <span className="mr-10">Главная</span>
            <i className="icon" />
          </a>
          {/* <ul className="subnav">
            {homeItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link to={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul> */}
        </li>
        {/* End home page menu */}


        <li
          className={`menu-item-has-children`}
        >
          <a href="/boston">
            <span className="mr-10">О Бостоне</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {[
              {name: "Университеты", routePath: "/boston/universities"},
              {name: "События", routePath: "/boston/events"},
              {name: "Достопримечательности", routePath: "/boston/attractions"}
            ].map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link to={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        {/* End blogIems */}


        <li
          className={`menu-item-has-children`}
        >
          <a href="/">
            <span className="mr-10">Поездки</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {[
              {name: "Предстоящие", routePath: "/trips/upcoming"},
              {name: "Прошедшие", routePath: "/trips/past"}
            ].map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link to={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        {/* End blogIems */}

        <li className={pathname === "/destinations" ? "current" : ""}>
          <Link to="/about">О Нас</Link>
        </li>
        {/* End Destinatinos single menu */}

        <li className={`menu-item-has-children ${pathname === "/apply" ? "current" : ""} special-apply-link`}>
          <Link to="/apply">Оставить заявку</Link>
        </li>
        {/* End Destinatinos single menu */}

      </ul>
    </nav>
  );
};

MainMenu.defaultProps = {
  style: ""
};

// Prop type validation
MainMenu.propTypes = {
  style: PropTypes.string
};

export default MainMenu;
