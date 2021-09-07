import React, { useState } from "react";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import { firestore } from "../../../firebase/config";
import { OnToggleArticleOfTheWeek } from "../../../firebase/firestore";
import edit from "../../../assetz/icons/edit.svg";
import trashIcon from "../../../assetz/icons/trashIcon.svg";
import recycle from "../../../assetz/icons/recycle.svg";
import placeholderImage from "../../../assetz/images/placeholder.png";

import "./styles.scss";
import Dialog from "../../Dialog/Dialog";

const PublishedPost = ({ data, trash, trashpage }) => {
  const [isShow, setShow] = useState(false);
  const [message, setMessage] = useState({ success: "", error: "" });

  const deleteBlog = async () => {
    await firestore.collection("blogs").doc(data.id).delete();
    // updateTrash([...trash, data]);
    setShow(false);
  };
  const toggleArticleOfTheWeek = async () => {
    if (data.articleOfTheWeek) {
      OnToggleArticleOfTheWeek(data.id, false);
      updateArticleOfTheWeek(false);
    } else {
      firestore
        .collection("blogs")
        .where("articleOfTheWeek", "==", true)
        .get()
        .then((snapshot) => {
          if (!snapshot.empty) {
            const id = snapshot.docs[0].data().id;
            firestore
              .collection("blogs")
              .doc(id)
              .update({ articleOfTheWeek: false });
            OnToggleArticleOfTheWeek(data.id, true);
            updateArticleOfTheWeek(true);
          } else {
            OnToggleArticleOfTheWeek(data.id, true);
            updateArticleOfTheWeek(true);
          }
        });
    }
  };
  const restoreBlog = async () => {
    try {
      await firestore.collection("blogs").doc(data.id).set(data);
      setMessage({ success: "Blog Restored" });
      // updateTrash([...newTrash]);
    } catch (error) {
      setMessage({ error: "Failed, try again" });
    }
  };
  const updateArticleOfTheWeek = async (check) => {
    await firestore
      .collection("blogs")
      .doc(data.id)
      .update({ articleOfTheWeek: check });
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
          <img
            src={
              data.tumbnail
                ? data.tumbnail
                : data.thumbnail
                ? data.thumbnail
                : placeholderImage
            }
            alt="tumbnail"
          />
        </div>
        <div className="text">
          <h2 className="title">{data.title ? data.title : "No Title"}</h2>
          <p className="hook">
            {data.hook ? renderHTML(`${data.hook}`) : "No Hook"}
          </p>
          <div className="carosel-post">
            <span className="carosel-post-text">
              Set as Article of the week
            </span>
            <div
              className="slider-item-check"
              onClick={toggleArticleOfTheWeek}
              style={
                data.articleOfTheWeek ? { backgroundColor: "#6ab5b9" } : {}
              }
            ></div>
          </div>
        </div>
        <div className="controls">
          {!trashpage && (
            <Link
              to={{
                pathname: "/oak-admin/edit-post",
                state: { ...data },
              }}
            >
              <div className="ctrl edit" onClick={() => {}}>
                <img src={edit} alt="edit" />
              </div>
            </Link>
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
        <Dialog dialogVisible={isShow}>
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
        </Dialog>
      </div>
    </>
  );
};

export default PublishedPost;
