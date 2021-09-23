import React, { useCallback, useEffect, useState } from "react";
import { AntDesign } from "react-web-vector-icons";
import { useHistory } from "react-router-dom";
import Spacing from "../../../componentz/Spacing/Spacing";
import { firestore } from "../../../firebase/config";

import "./styles.scss";
import moment from "moment";
import ReadNotification from "../../../componentz/admin/ReadNotification/ReadNotification";

const Inbox = () => {
  const [hasInbox, setHasInbox] = useState(false);
  const [active, setActive] = useState(null);
  const [inbox, setInbox] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const onLoadInbox = useCallback(async () => {
    const inboxRef = firestore.collection("inbox").orderBy("timestamp", "desc");
    inboxRef.onSnapshot((snapShot) => {
      if (!snapShot.empty) {
        setHasInbox(true);
        const inboxArray = [];
        snapShot.forEach((item) => {
          inboxArray.push(item.data());
        });
        setInbox(inboxArray);
        setLoading(false);
      }
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    onLoadInbox();
    return () => {};
  }, [onLoadInbox]);
  return (
    <>
      <span>{history.location.pathname}</span>
      {/* <RoutePath route={history.location.pathname} /> */}
      {!hasInbox ? (
        <div className="flex-center-column no-data">
          <Spacing height="4em" />
          <span className="no-data-text">Empty</span>
          <Spacing height="2em" />
        </div>
      ) : (
        <div className="inbox">
          <div className="message-list">
            {inbox.map((item) => {
              const userName = item.name
                ? item.name
                : `${item.first_name} ${item.last_name}`;
              return (
                <div
                  className="message-preview"
                  onClick={() => setActive(item)}
                >
                  <div className="message-preview-icon">
                    <span className="message-preview-icon-text">
                      {userName
                        .split(/\s/)
                        .reduce(
                          (response, word) => (response += word.slice(0, 1)),
                          ""
                        )
                        .toUpperCase()}
                    </span>
                  </div>
                  <div className="message-preview-info">
                    <h3 className="message-title">{item.title}</h3>
                    <span className="timestamp">
                      {moment().fromNow(item.timestamp)}
                    </span>
                    {!item.seen && <div className="dot"></div>}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="divider"></div>
          <div className="message-view">
            {active ? (
              <ReadNotification data={active} />
            ) : (
              <div className="not-viewing">
                <AntDesign name="inbox" size={50} color={"gray"} />
                <h3>Inbox</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Inbox;
