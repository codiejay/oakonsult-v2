import React, { useState } from "react";
import edit from "../../../assetz/admin/edit.svg";
import trashIcon from "../../../assetz/admin/trashIcon.svg";
import EditBlogPost from "../EditBlogPost/EditBlogPost";

import "./styles.scss";

const AdminDraftPreview = ({ data }) => {
  const [editing, setEditing] = useState(false);
  const deleteDraft = () => {
    // TODO: Delete blog from draft collection
  };
  return (
    <>
      <div className="admin-draft-preview">
        <div className="tumbnail">
          <img src={data.tumbnail ? data.tumbnail : ""} alt="tumbnail" />
        </div>
        <div className="text">
          <h2 className="title">{data.title ? data.title : "Blog Title"}</h2>
          <p className="truncate-text">
            {data.hook
              ? data.hook
              : `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sunt
          laudantium totam earum dolore deleniti necessitatibus. Repudiandae
          ipsum ipsa minima? Cupiditate incidunt.`}
          </p>
        </div>
        <div className="controls">
          {" "}
          <div className="control edit" onClick={() => setEditing(!editing)}>
            <img src={edit} alt="edit" />
          </div>
          <div className="control trash" onClick={deleteDraft}>
            <img src={trashIcon} alt="trash" />
          </div>
        </div>
        {editing && <EditBlogPost data={{ ...data }} setEditing={setEditing} />}
      </div>
    </>
  );
};

export default AdminDraftPreview;
