import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import plus from "../../../assetz/icons/plus.svg";
import { firestore } from "../../../firebase/config";
import draftIcon from "../../../assetz/icons/draft.svg";
import publish from "../../../assetz/icons/publish.svg";
import trashIcon from "../../../assetz/icons/trashIcon.svg";

import "./styles.scss";

const Dashboard = () => {
  const [draft, setDraft] = useState("0");
  const [trash, setTrash] = useState("0");
  const [blog, setBlog] = useState("0");
  useEffect(() => {
    const draftRef = firestore.collection("draft");
    const blogsRef = firestore.collection("blogs");
    const trashRef = firestore.collection("trash");
    const fetchData = async () => {
      blogsRef.onSnapshot((snapshot) => setBlog(snapshot.size));
      draftRef.onSnapshot((snapshot) => setDraft(snapshot.size));
      trashRef.onSnapshot((snapshot) => setTrash(snapshot.size));
    };
    fetchData();
  }, []);
  return (
    <div className="admin-dashboard">
      <div className="admin-buttons">
        <Link to="/oak-admin/create-post">
          <button className="admin-btn new-post">
            {" "}
            <img src={plus} alt="plus" /> NEW POST
          </button>
        </Link>
        <div className="admin-info-buttons">
          <Link to="/oak-admin/published">
            <button className="admin-btn published">
              {" "}
              <img src={publish} alt="publish" /> PUBLISHED <span>{blog}</span>
            </button>
          </Link>
          <Link to="/oak-admin/draft">
            <button className="admin-btn drafts">
              {" "}
              <img src={draftIcon} alt="draft" /> DRAFTS <span>{draft}</span>
            </button>
          </Link>
          <Link to="/oak-admin/trash">
            <button className="admin-btn trash">
              {" "}
              <img src={trashIcon} alt="trash" /> TRASH <span>{trash}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
