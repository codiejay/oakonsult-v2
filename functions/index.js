const functions = require("firebase-functions");
const admin = require("firebase-admin");
const app = require("./server");
const { CreateBlog, UpdateBlog, DeleteBlog } = require("./blogFunctions");
admin.initializeApp();

exports.api = functions.https.onRequest(app);

const blogRef = `blogs/{blogId}`;

exports.onCreateBlog = functions.firestore
  .document(blogRef)
  .onCreate(CreateBlog);
exports.onUpdateBlog = functions.firestore
  .document(blogRef)
  .onUpdate(UpdateBlog);
exports.onDeleteBlog = functions.firestore
  .document(blogRef)
  .onDelete(DeleteBlog);
