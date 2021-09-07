import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AntDesign, FontAwesome } from "react-web-vector-icons";
import { colors } from "../../../constants/Colors";

import "./styles.scss";

const Navbar = ({
  collapsSidebar,
  sidebarCollapsed,
  dropdownVisible,
  setDropdownVisible,
}) => {
  const admin = useSelector(({ user }) => user.admin);
  const notificationCount = useSelector(({ admin }) => admin.notificationCount);
  return (
    <nav className="flex-vertical-center admin-navbar">
      <div className="toggler">
        {!sidebarCollapsed ? (
          <div
            className="menu-holder"
            onClick={() => collapsSidebar(!sidebarCollapsed)}
          >
            <AntDesign name="menu-unfold" size={25} color="black" />
          </div>
        ) : (
          <div
            className="menu-holder"
            onClick={() => collapsSidebar(!sidebarCollapsed)}
          >
            <AntDesign name="menu-fold" size={25} color="black" />
          </div>
        )}
      </div>
      <div className="notification-user">
        <Link to="/oak-admin/inbox" style={{ marginLeft: "auto" }}>
          <div className="notification">
            <AntDesign name="inbox" size={30} color={colors.black} />
            {notificationCount * 1 > 0 && (
              <span className="notification-count">{notificationCount}</span>
            )}
          </div>
        </Link>
        <div
          className="user"
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          <div className="avatar-container">
            <FontAwesome name="user-circle" size={28} color="black" />
          </div>
          <div>
            <h5>Admin</h5>
            <span>{`${admin.firstName || "Admin"}`}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
