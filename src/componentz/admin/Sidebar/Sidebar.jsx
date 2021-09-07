import React from "react";
import {
  AntDesign,
  Entypo,
  Foundation,
  FontAwesome5,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-web-vector-icons";
import { Link } from "react-router-dom";
import Spacing from "../../Spacing/Spacing";
import SidebarLink from "../SidebarLink/SidebarLink";
// import logo from "../../../assetz/images/logo.png";
// import logoIcon from "../../../assetz/icons/logo-icon-light.svg";

import "./styles.scss";

const Sidebar = ({ sidebarCollapsed }) => {
  return (
    <aside className={`sidebar ${sidebarCollapsed && "sidebarCollapsed"}`}>
      <div className="flex-vertical-center logo-container">
        <Link to="/">
          <span
            className={`${
              sidebarCollapsed ? "collapsed-logo-text" : "logo-text"
            }`}
          >
            OAK
          </span>
          {/* <img
            src={sidebarCollapsed ? logoIcon : logo}
            alt="Stoque logo"
            className={`logo ${sidebarCollapsed && "logoIcon"}`}
          /> */}
        </Link>
      </div>
      <div className="sidebar-links">
        <SidebarLink
          to="/oak-admin"
          icon={
            <AntDesign
              name="appstore-o"
              size={sidebarCollapsed ? 28 : 24}
              color="black"
              className={`sidebar-link-icon`}
            />
          }
          label="Dashboard"
          sidebarCollapsed={sidebarCollapsed}
        />
        <Spacing height="3.5em" />
        <SidebarLink
          to="/oak-admin/gallery"
          icon={
            <MaterialCommunityIcons
              name="google-photos"
              size={sidebarCollapsed ? 28 : 24}
              color="black"
              className={`sidebar-link-icon`}
            />
          }
          label="Gallery"
          sidebarCollapsed={sidebarCollapsed}
        />
        <Spacing height="3.5em" />
        <SidebarLink
          to="/oak-admin/quotes"
          icon={
            <Foundation
              name="quote"
              size={sidebarCollapsed ? 30 : 26}
              color="black"
              className={`sidebar-link-icon`}
            />
          }
          label="Quotes"
          sidebarCollapsed={sidebarCollapsed}
        />
        <Spacing height="3.5em" />
        <SidebarLink
          to="/oak-admin/events"
          icon={
            <MaterialIcons
              name="event"
              size={sidebarCollapsed ? 30 : 26}
              color="black"
              className={`sidebar-link-icon`}
            />
          }
          label="Events"
          sidebarCollapsed={sidebarCollapsed}
        />
        <Spacing height="3.5em" />
        <SidebarLink
          to="/oak-admin/draft"
          icon={
            <Entypo
              name="edit"
              size={sidebarCollapsed ? 28 : 24}
              color="black"
              className={`sidebar-link-icon`}
            />
          }
          label="Draft"
          sidebarCollapsed={sidebarCollapsed}
        />
        <Spacing height="3.5em" />
        <SidebarLink
          to="/oak-admin/trash"
          icon={
            <Entypo
              name="trash"
              size={sidebarCollapsed ? 28 : 24}
              color="black"
              className={`sidebar-link-icon`}
            />
          }
          label="Trash"
          sidebarCollapsed={sidebarCollapsed}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
