import React from "react";
import { Helmet } from "react-helmet";
import { Redirect, Route, useLocation } from "react-router-dom";
import BlogOverview from "../../componentz/BlogOverview/BlogOverview";
import Tag from "../Tag/Tag";

const Blog = () => {
  const location = useLocation().pathname;
  const endpoint = location.split("/")[location.split("/").length - 1];
  return (
    <>
      {/* BLOG OVERVIEW */}
      <Helmet>
        <title>Blogs &mdash; Oak</title>
        <meta property="og:title" content="Blog &mdash; Oak" />
        <meta property="og:type" content="website" />
        <meta name="description" content="" />
        <meta property="og:site_name" content="Oakonsult" />
      </Helmet>
      <Route
        exact
        path={`/blogs`}
        render={() => <Redirect to="/blogs/all" />}
      />
      <Route exact path={`/blogs/all`} render={() => <BlogOverview />} />
      <Route
        path={`/blogs/for-parents`}
        render={() => <Tag endpoint={endpoint} />}
      />
      <Route
        path={`/blogs/for-siblings`}
        render={() => <Tag endpoint={endpoint} />}
      />
      <Route
        path={`/blogs/for-carers`}
        render={() => <Tag endpoint={endpoint} />}
      />
    </>
  );
};

export default Blog;
