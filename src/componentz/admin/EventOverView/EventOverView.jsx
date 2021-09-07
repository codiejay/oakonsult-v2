import React, { useCallback, useEffect, useState } from "react";
// import { Entypo } from "react-web-vector-icons";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import edit from "../../../assetz/icons/edit.svg";
import trashIcon from "../../../assetz/icons/trashIcon.svg";
import CustomButton from "../../CustomButton/CustomButton";
import Dialog from "../../Dialog/Dialog";
import Spacing from "../../Spacing/Spacing";
import AddEvent from "../AddEvent/AddEvent";
import Spinner from "../../Spinner/Spinner";
// import { setEvents } from "../../../redux/dashboard/actions";

import "./styles.scss";
import { Link } from "react-router-dom";
import { firestore } from "../../../firebase/config";
import { colors } from "../../../constants/Colors";
import EditEvent from "../EditEvent/EditEvent";
import { OnDeleteEvent } from "../../../firebase/firestore";

const EventOverView = () => {
  const [hasEvent, setHasEvent] = useState(false);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("upcoming");
  const [editing, setEditing] = useState({});
  const [dialogVisible, setDialogVisible] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const eventRef = firestore.collection("events");
  const onLoadEvents = async () => {
    const query =
      type === "upcoming"
        ? eventRef.where("timestring", ">", Date.now())
        : eventRef.where("timestring", "<", Date.now());
    console.log(query);
    query.onSnapshot((snapShot) => {
      if (!snapShot.empty) {
        setHasEvent(true);
        const eventArray = [];
        snapShot.forEach((item) => {
          eventArray.push(item.data());
        });
        console.log(eventArray);
        setEvents(eventArray);
        setLoading(false);
      }
      setLoading(false);
    });
  };
  useEffect(() => {
    onLoadEvents();
  }, [type]);
  return loading ? (
    <Spinner style={{ height: "30vh" }} />
  ) : (
    <>
      <EventNav
        type={type}
        setType={setType}
        setDialogVisible={setDialogVisible}
      />
      {!hasEvent ? (
        <div className="flex-center-column no-data">
          <Spacing height="4em" />
          <span className="no-data-text">You have'nt added any event yet</span>
          <Spacing height="2em" />
          <CustomButton
            label="Add Event"
            className="add-event-btn"
            onClick={() => {
              setType("addEvent");
              setDialogVisible(true);
            }}
          />
        </div>
      ) : (
        <div className="has-data">
          <CustomButton
            label="Add Event"
            className="add-event-btn absolute-btn"
            onClick={() => {
              setType("addEvent");
              setDialogVisible(true);
            }}
          />
          <Spacing height="2em" />
          <div className="flex-vertical-center event-list">
            {events.map((item, index) => (
              <div
                key={index}
                className="flex-center-column event-preview"
                onClick={() => {}}
              >
                <Spacing height="1em" />
                <div className="flex-center event-icon">
                  {/* <Entypo name="shop" size={30} color="black" /> */}
                </div>
                <Spacing height="1em" />
                <h3>{item.name}</h3>
                <span>{item.description}</span>
                <h3>{item.date}</h3>
                <div className="controls">
                  <div
                    className="ctrl edit"
                    onClick={() => {
                      setEditing(item);
                      setType("editEvent");
                      setDialogVisible(true);
                    }}
                  >
                    <img src={edit} alt="edit" />
                  </div>
                  <Spacing width="1em" />
                  <div
                    className="ctrl trash"
                    onClick={() => OnDeleteEvent(item.date)}
                  >
                    <img src={trashIcon} alt="trash" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Dialog dialogVisible={dialogVisible} setDialogVisible={setDialogVisible}>
        {type === "addEvent" && (
          <AddEvent
            type={type}
            setType={setType}
            setDialogVisible={setDialogVisible}
          />
        )}
        {type === "editEvent" && (
          <EditEvent data={editing} setDialogVisible={setDialogVisible} />
        )}
      </Dialog>
    </>
  );
};

export default EventOverView;

const EventNav = ({ type, setType, setDialogVisible }) => {
  return (
    <div className="event-nav">
      <ul className="event-nav-links">
        <li className="event-nav-link" onClick={() => setType("upcoming")}>
          <span style={type === "upcoming" ? { color: colors.tint } : {}}>
            Upcoming Events
          </span>
        </li>
        <li className="event-nav-link" onClick={() => setType("past")}>
          <span style={type === "past" ? { color: colors.tint } : {}}>
            Past Events
          </span>
        </li>
      </ul>
      <CustomButton
        label="Add Event"
        className="add-event-btn absolute-btn"
        onClick={() => {
          setType("addEvent");
          setDialogVisible(true);
        }}
      />
    </div>
  );
};
