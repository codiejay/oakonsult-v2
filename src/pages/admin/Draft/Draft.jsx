import React, { useCallback, useEffect, useState } from "react";
// import { Entypo } from "react-web-vector-icons";
import { Route, useHistory } from "react-router-dom";
// import DraftPreview from "../../../componentz/admin/DraftPreview/DraftPreview";
import { firestore } from "../../../firebase/config";
import DraftOverView from "../../../componentz/admin/DraftOverView/DraftOverView";

import "./styles.scss";

const Draft = () => {
  const [hasDraft, setHasDraft] = useState(false);
  const [draft, setDraft] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const onLoadDraft = useCallback(async () => {
    const draftRef = firestore.collection("draft").orderBy("name", "asc");
    draftRef.onSnapshot((snapShot) => {
      if (!snapShot.empty) {
        setHasDraft(true);
        const draftArray = [];
        snapShot.forEach((item) => {
          draftArray.push(item.data());
        });
        setDraft(draftArray);
        setLoading(false);
      }
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    onLoadDraft();
    return () => {};
  }, [onLoadDraft]);
  return (
    <>
      <span>{history.location.pathname}</span>
      {/* <RoutePath route={history.location.pathname} /> */}
      <Route
        exact
        path={`/oak-admin/draft`}
        render={() => (
          <DraftOverView hasDraft={hasDraft} draft={draft} loading={loading} />
        )}
      />
      {/* <Route
        exact
        path={`/draft/:draftId`}
        render={() =>
          draft ? <DraftView /> : <Redirect to="/draft" />
        }
      /> */}
    </>
  );
};

export default Draft;
