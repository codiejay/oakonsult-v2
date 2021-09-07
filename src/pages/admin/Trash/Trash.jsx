import React, { useCallback, useEffect, useState } from "react";
// import { Entypo } from "react-web-vector-icons";
import { Route, useHistory } from "react-router-dom";
// import TrashPreview from "../../../componentz/admin/TrashPreview/TrashPreview";
import { firestore } from "../../../firebase/config";
import TrashOverView from "../../../componentz/admin/TrashOverView/TrashOverView";

import "./styles.scss";

const Trash = () => {
  const [hasTrash, setHasTrash] = useState(false);
  const [trash, setTrash] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const onLoadTrash = useCallback(async () => {
    const trashRef = firestore.collection("trash").orderBy("name", "asc");
    trashRef.onSnapshot((snapShot) => {
      if (!snapShot.empty) {
        setHasTrash(true);
        const trashArray = [];
        snapShot.forEach((item) => {
          trashArray.push(item.data());
        });
        setTrash(trashArray);
        setLoading(false);
      }
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    onLoadTrash();
    return () => {};
  }, [onLoadTrash]);
  return (
    <>
      <span>{history.location.pathname}</span>
      {/* <RoutePath route={history.location.pathname} /> */}
      <Route
        exact
        path={`/oak-admin/trash`}
        render={() => (
          <TrashOverView hasTrash={hasTrash} trash={trash} loading={loading} />
        )}
      />
      {/* <Route
        exact
        path={`/trash/:trashId`}
        render={() =>
          trash ? <TrashView /> : <Redirect to="/trash" />
        }
      /> */}
    </>
  );
};

export default Trash;
