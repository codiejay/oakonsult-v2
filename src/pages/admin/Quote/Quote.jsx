import React, { useCallback, useEffect, useState } from "react";
// import { Entypo } from "react-web-vector-icons";
import { useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";
// import RoutePath from "../../../components/admin/RoutePath/RoutePath";
import { firestore } from "../../../firebase/config";
import "./styles.scss";
import QuoteOverView from "../../../componentz/admin/QuoteOverView/QuoteOverView";
// import QuoteView from "../QuoteView/QuoteView";

const Quote = () => {
  // const admin = useSelector(({ user }) => user.admin);
  // const quote = useSelector(({ dashboard }) => dashboard.quote);
  const [hasQuote, setHasQuote] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const onLoadQuote = useCallback(async () => {
    const quoteRef = firestore.collection("quotes").orderBy("quote", "asc");
    quoteRef.onSnapshot((snapShot) => {
      if (!snapShot.empty) {
        setHasQuote(true);
        const quoteArray = [];
        snapShot.forEach((item) => {
          quoteArray.push(item.data());
        });
        setQuotes(quoteArray);
        setLoading(false);
      }
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    onLoadQuote();
    return () => {};
  }, [onLoadQuote]);
  return (
    <>
      <span>{history.location.pathname}</span>
      {/* <RoutePath route={history.location.pathname} /> */}
      <Route
        exact
        path={`/oak-admin/quotes`}
        render={() => (
          <QuoteOverView
            hasQuote={hasQuote}
            quotes={quotes}
            loading={loading}
          />
        )}
      />
      {/* <Route
        exact
        path={`/quote/:quoteId`}
        render={() =>
          quote ? <QuoteView /> : <Redirect to="/quote" />
        }
      /> */}
    </>
  );
};

export default Quote;
