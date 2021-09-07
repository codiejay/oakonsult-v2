import React, { useState } from "react";
import { firestore } from "../../../firebase/config";
import edit from "../../../assetz/admin/edit.svg";
import recycle from "../../../assetz/admin/recycle.svg";
import trashIcon from "../../../assetz/admin/trashIcon.svg";
import EditBlogPost from "../EditBlogPost/EditBlogPost";
import "./styles.scss";
const BlogPost = ({ data, trashpage }) => {
  const [editing, setEditing] = useState(false);
  const [isShow, setShow] = useState(false);
  const [message, setMessage] = useState({ success: "", error: "" });

  const deleteBlog = async () => {
    await firestore.collection("blogs").doc(data.id).delete();
    // Todo Move to trash collection
    setShow(false);
  };
  const restoreBlog = async () => {
    try {
      await firestore.collection("blogs").doc(data.id).set(data);
      setMessage({ success: "Blog Restored" });
      // TODO: Move back to blog collection and delete from trash collection
    } catch (error) {
      setMessage({ error: "Failed, try again" });
    }
  };
  const updateSliderItem = async (check) => {
    await firestore
      .collection("blogs")
      .doc(data.id)
      .update({ slider_item: check });
  };
  return (
    <>
      {message.error !== "" && (
        <span className="noty error">{message.error}</span>
      )}
      {message.success !== "" && (
        <span className="noty success">{message.success}</span>
      )}
      <div className="admin-blog-post">
        <div className="tumbnail">
          <img src={data.tumbnail ? data.tumbnail : ""} alt="tumbnail" />
        </div>
        <div className="text">
          <h2 className="title">{data.title ? data.title : "Blog Title"}</h2>
          <p className="truncate-text">
            {data.hook
              ? data.hook.split(" ").slice(0, 30).join(" ")
              : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sunt
          laudantium totam earum dolore deleniti necessitatibus. Repudiandae
          ipsum ipsa minima? Cupiditate incidunt.`}
          </p>
          <div className="carosel-post">
            <span>Make it appear in slider</span>
            <div
              className="slider-item-check"
              onClick={() =>
                data.slider_item
                  ? updateSliderItem(false)
                  : updateSliderItem(true)
              }
              style={data.slider_item ? { backgroundColor: "#6ab5b9" } : {}}
            ></div>
          </div>
        </div>
        <div className="controls">
          {!trashpage && (
            <div className="ctrl edit" onClick={() => setEditing(!editing)}>
              <img src={edit} alt="edit" />
            </div>
          )}
          {!trashpage && (
            <div className="ctrl trash" onClick={() => setShow(!isShow)}>
              <img src={trashIcon} alt="trash" />
            </div>
          )}
          {trashpage && (
            <div className="ctrl recycle" onClick={restoreBlog}>
              <img src={recycle} alt="recycle" />
            </div>
          )}
          {trashpage && (
            <div className="ctrl trash" onClick={() => setShow(!isShow)}>
              <img src={trashIcon} alt="trash" />
            </div>
          )}
        </div>
        {isShow && (
          <div className="warning-container">
            <div className="warning">
              <span>
                Are you sure you want to{trashpage && ` permanently`} delete
                this blog?
              </span>
              <div className="warning-btns">
                <button className="warning-btn" onClick={deleteBlog}>
                  Yes
                </button>
                <button
                  className="warning-btn"
                  onClick={() => setShow(!isShow)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
        {editing && <EditBlogPost data={{ ...data }} setEditing={setEditing} />}
      </div>
    </>
  );
};

export default BlogPost;
