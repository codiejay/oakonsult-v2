const admin = require("firebase-admin");

exports.CreateBlog = async (snapshot, context) => {
  const blogCreated = snapshot.data();
  const blogId = context.params.blogId;
  const blogRef = `blogs/${blogId}`;
};

exports.UpdateBlog = async (change, context) => {
  const blogUpdated = change.after.data();
  const blogId = context.params.blogId;
};

exports.DeleteBlog = async (snapshot, context) => {
  const blogDeleted = snapshot.data();
  const blogId = context.params.blogId;
};
