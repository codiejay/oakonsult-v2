import React, { useEffect } from "react";
import moment from "moment";

import "./styles.scss";
import { firestore } from "../../../firebase/config";

const ReadNotification = ({ data }) => {
  const inboxRef = firestore.collection("inbox");
  useEffect(() => {
    const updateNotificationReadState = async () => {
      const snapshot = await inboxRef.doc(`${data.timestamp}`).get();
      snapshot.exists && snapshot.ref.update({ seen: true });
    };
    updateNotificationReadState();
  }, []);
  return (
    <div className="viewing">
      <code className="timestamp">{moment().fromNow(`${data.timestamp}`)}</code>
      <h3 className="notification-title">{data.title}</h3>
      <p>
        {data.name} is interested in joining {data.course}
      </p>
      <br />
      {data.email && <h6>Email: {data.email}</h6>}
      {data.phone && <h6>Phone: {data.phone}</h6>}
    </div>
  );
};

export default ReadNotification;
