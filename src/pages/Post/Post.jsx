import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import renderHTML from "react-render-html";
import { firestore } from "../../firebase/config";
import Spinner from "../../componentz/Spinner/Spinner";

import "./styles.scss";

const Post = ({ endpoint }) => {
  const location = useLocation();
  const query = location.search;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const blogsRef = firestore.doc(`blogs/${query.split("?")[1]}`);
      const snapShot = await blogsRef.get();
      if (snapShot.exists) {
        setData(snapShot.data());
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>{loading ? "" : data.title} &mdash; Oak</title>
        <meta property="og:title" content={loading ? "" : data.title} />
        <meta property="og:type" content="website" />
        <meta name="description" content="" />
        <meta property="og:site_name" content="Oakonsult" />
      </Helmet>
      {loading ? (
        <Spinner style={{ height: "70vh" }} />
      ) : (
        <div>{renderHTML(data.body)}</div>
      )}
    </div>
  );
};

export default Post;
