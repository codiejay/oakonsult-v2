import React, { useState } from "react";
import { useHistory } from "react-router";
import Dialog from "../../Dialog/Dialog";
import Spacing from "../../Spacing/Spacing";
import Spinner from "../../Spinner/Spinner";

import "./styles.scss";

const DraftOverView = ({ hasDraft, draft, loading }) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const history = useHistory();
  return loading ? (
    <Spinner style={{ height: "30vh" }} />
  ) : (
    <>
      {!hasDraft ? (
        <div className="flex-center-column no-data">
          <Spacing height="4em" />
          <span className="no-data-text">Empty</span>
          <Spacing height="2em" />
        </div>
      ) : (
        <div className="has-data">
          <Spacing height="2em" />
          <div className="flex-vertical-center draft-list">
            {draft.map((item, index) => (
              <div
                key={index}
                className="flex-center-column draft-preview"
                onClick={() => {
                  // dispatch(setGallery(item));
                  history.push(`/draft/${item.draftCode}`);
                }}
              ></div>
            ))}
          </div>
        </div>
      )}
      <Dialog
        dialogVisible={dialogVisible}
        setDialogVisible={setDialogVisible}
      ></Dialog>
    </>
  );
};

export default DraftOverView;
