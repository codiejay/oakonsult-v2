import React, { useState } from "react";
import { Entypo } from "react-web-vector-icons";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import CustomButton from "../../CustomButton/CustomButton";
import edit from "../../../assetz/icons/edit.svg";
import trashIcon from "../../../assetz/icons/trashIcon.svg";
import Dialog from "../../Dialog/Dialog";
import Spacing from "../../Spacing/Spacing";
import AddQuote from "../AddQuote/AddQuote";
import Spinner from "../../Spinner/Spinner";
// import { setGallery } from "../../../redux/dashboard/actions";

import "./styles.scss";
import { Link } from "react-router-dom";

const QuoteOverView = ({ hasQuote, quotes, loading }) => {
  const [type, setType] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
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
          {/* <div className="flex-vertical-center quote-list">
            {quotes.map((item, index) => (
              <div
                key={index}
                className="flex-center-column quote-preview"
                onClick={() => {}}
              >
                <Spacing height="1em" />
                <h3 className="quote">"{item.quote}"</h3>
                <div className="controls">
                  <div className="ctrl edit" onClick={() => {}}>
                    <img src={edit} alt="edit" />
                  </div>
                  <Spacing width="1em" />
                  <div className="ctrl trash" onClick={() => {}}>
                    <img src={trashIcon} alt="trash" />
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      )}
      <Dialog dialogVisible={dialogVisible} setDialogVisible={setDialogVisible}>
        {type === "addQuote" && (
          <AddQuote setDialogVisible={setDialogVisible} />
        )}
        {/* {type === "quoteView" && (
          <GalleryView
            setDialogVisible={setDialogVisible}
            setGallerytData={setGallerytData}
            data={quoteData}
          />
        )} */}
      </Dialog>
    </>
  );
};

export default QuoteOverView;
