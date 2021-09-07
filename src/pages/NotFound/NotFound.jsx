import React from "react";
import { Helmet } from "react-helmet";

import "./styles.scss";

const NotFound = () => {
  return (
    <div className="notFound">
      <Helmet>
        <title>404 Error &mdash; Oak</title>
        <meta property="og:title" content="Oakonsult &mdash; 404 Error" />
        <meta property="og:type" content="website" />
        <meta name="description" content="" />
        <meta property="og:site_name" content="Oakonsult" />
      </Helmet>
      <div className="notFoundContainer"></div>
    </div>
  );
};

export default NotFound;
