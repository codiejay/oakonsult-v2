import React, { useEffect, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import TagOverview from "../../componentz/TagOverview/TagOverview";
import { firestore } from "../../firebase/config";
import Post from "../Post/Post";

import "./styles.scss";

const Tag = ({ endpoint }) => {
  return (
    <div>
      <Route exact path={`/blogs/${endpoint}`} render={() => <TagOverview />} />
      <Route
        path={`/blogs/for-parents/:postId`}
        render={() => <Post endpoint={endpoint} />}
      />
      <Route
        path={`/blogs/for-siblings/:postId`}
        render={() => <Post endpoint={endpoint} />}
      />
      <Route
        path={`/blogs/for-carers/:postId`}
        render={() => <Post endpoint={endpoint} />}
      />
    </div>
  );
};

export default Tag;
