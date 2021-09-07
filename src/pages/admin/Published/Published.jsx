import React, { useEffect, useState } from "react";
import PublishedPost from "../../../componentz/admin/PublishedPost/PublishedPost";
import { firestore } from "../../../firebase/config";

import "./styles.scss";

const Published = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const blogsRef = await firestore
        .collection("blogs")
        .orderBy("posted_at", "desc")
        .limit(9);
      blogsRef.onSnapshot((snapshot) => {
        const blogs = [];
        snapshot.docs.forEach((doc) => {
          blogs.push(doc.data());
        });
        setBlogs(blogs);
      });
    };
    fetchData();
  }, []);

  return (
    <div className="admin-blog-posts">
      {blogs.map((item, index) => (
        <PublishedPost key={index} data={item} />
      ))}
      {blogs.length === 0 && (
        <span className="empty">No Published Blog Yet</span>
      )}
    </div>
  );
};

export default Published;
