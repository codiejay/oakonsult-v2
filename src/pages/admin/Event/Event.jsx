import React, { useCallback, useEffect, useState } from "react";
// import { Entypo } from "react-web-vector-icons";
import { Route, useHistory } from "react-router-dom";
import { firestore } from "../../../firebase/config";
import EventOverView from "../../../componentz/admin/EventOverView/EventOverView";
// import EventView from "../EventView/EventView";

import "./styles.scss";

const Event = () => {
  const history = useHistory();

  return (
    <>
      <span>{history.location.pathname}</span>
      {/* <RoutePath route={history.location.pathname} /> */}
      <Route
        exact
        path={`/oak-admin/events`}
        render={() => <EventOverView />}
      />
    </>
  );
};

export default Event;
