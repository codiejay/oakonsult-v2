import React, { useCallback, useEffect, useState } from "react";
// import { Entypo } from "react-web-vector-icons";
import { useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";
// import RoutePath from "../../../components/admin/RoutePath/RoutePath";
import { firestore } from "../../../firebase/config";
import "./styles.scss";
import GalleryOverView from "../../../componentz/admin/GalleryOverView/GalleryOverView";
// import GalleryView from "../GalleryView/GalleryView";

const Gallery = () => {
  // const admin = useSelector(({ user }) => user.admin);
  // const gallery = useSelector(({ dashboard }) => dashboard.gallery);
  const [hasGallery, setHasGallery] = useState(false);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const onLoadGallery = useCallback(async () => {
    const galleryRef = firestore.collection("gallery").orderBy("name", "asc");
    galleryRef.onSnapshot((snapShot) => {
      if (!snapShot.empty) {
        setHasGallery(true);
        const galleryArray = [];
        snapShot.forEach((item) => {
          galleryArray.push(item.data());
        });
        setGallery(galleryArray);
        setLoading(false);
      }
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    onLoadGallery();
    return () => {};
  }, [onLoadGallery]);
  return (
    <>
      <span>{history.location.pathname}</span>
      {/* <RoutePath route={history.location.pathname} /> */}
      <Route
        exact
        path={`/oak-admin/gallery`}
        render={() => (
          <GalleryOverView
            hasGallery={hasGallery}
            gallery={gallery}
            loading={loading}
          />
        )}
      />
      {/* <Route
        exact
        path={`/gallery/:galleryId`}
        render={() =>
          gallery ? <GalleryView /> : <Redirect to="/gallery" />
        }
      /> */}
    </>
  );
};

export default Gallery;
