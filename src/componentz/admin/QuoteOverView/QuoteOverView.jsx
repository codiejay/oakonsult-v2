import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import CustomButton from "../../CustomButton/CustomButton";
import edit from "../../../assetz/icons/edit.svg";
import trashIcon from "../../../assetz/icons/trashIcon.svg";
import Dialog from "../../Dialog/Dialog";
import Spacing from "../../Spacing/Spacing";
import AddQuote from "../AddQuote/AddQuote";
import Spinner from "../../Spinner/Spinner";

import "./styles.scss";
import EditQuote from "../EditQuote/EditQuote";
import { useEffect } from "react";

const QuoteOverView = ({ hasQuote, quotes, loading }) => {
  const [type, setType] = useState(null);
  const [editing, setEditing] = useState({});
  const [dialogVisible, setDialogVisible] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {}, [editing, type, dialogVisible]);
  return loading ? (
    <Spinner style={{ height: "30vh" }} />
  ) : (
    <>
      {!hasQuote ? (
        <div className="flex-center-column no-data">
          <Spacing height="4em" />
          <span className="no-data-text">You have'nt added any quote yet</span>
          <Spacing height="2em" />
          <CustomButton
            label="Add Quote"
            className="add-quote-btn"
            onClick={() => {
              setType("addQuote");
              setDialogVisible(true);
            }}
          />
        </div>
      ) : (
        <div className="has-data">
          <CustomButton
            label="Add Quote"
            className="add-quote-btn absolute-btn"
            onClick={() => {
              setType("addQuote");
              setDialogVisible(true);
            }}
          />
          <Spacing height="2em" />
          <div className="flex-vertical-center quote-list">
            {quotes.map((item, index) => (
              <div
                key={index}
                className="flex-center-column quote-preview"
                onClick={() => {}}
              >
                <Spacing height="1em" />
                <h3 className="quote">"{item.quote}"</h3>
                <div className="controls">
                  <div
                    className="ctrl edit"
                    onClick={() => {
                      setEditing(item);
                      setType("editQuote");
                      setDialogVisible(true);
                    }}
                  >
                    <img src={edit} alt="edit" />
                  </div>
                  <Spacing width="1em" />
                  <div className="ctrl trash" onClick={() => {}}>
                    <img src={trashIcon} alt="trash" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Dialog dialogVisible={dialogVisible} setDialogVisible={setDialogVisible}>
        {type === "addQuote" && (
          <AddQuote setDialogVisible={setDialogVisible} />
        )}
        {type === "editQuote" && (
          <EditQuote data={editing} setDialogVisible={setDialogVisible} />
        )}
      </Dialog>
    </>
  );
};

export default QuoteOverView;
