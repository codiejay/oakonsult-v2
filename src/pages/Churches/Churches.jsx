import React from "react";
import { Helmet } from "react-helmet";

import "./styles.scss";

const Churches = () => {
  return (
    <>
      <Helmet>
        <title>Churches &mdash; OAK</title>
        <meta property="og:title" content="Churches &mdash; OAK" />
        <meta property="og:type" content="website" />
        <meta name="description" content="" />
        <meta property="og:site_name" content="OAKONSULT" />
      </Helmet>
      <div>
        <h1>Churches</h1>
      </div>
    </>
  );
};

export default Churches;
