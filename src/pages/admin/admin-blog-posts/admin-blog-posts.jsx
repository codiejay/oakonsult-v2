import React from "react";
import AdminBlogPost from "../admin-blog-post/admin-blog-post";
import "./admin-blog-posts.scss";
const AdminBlogPosts = ({ blogs }) => {
  return (
    <div className="admin-blog-posts">
      {blogs.map((item, index) => (
        <AdminBlogPost key={index} data={item} />
      ))}
      {blogs.length === 0 && (
        <span className="empty">No Published Blog Yet</span>
      )}
    </div>
  );
};

export default AdminBlogPosts;
