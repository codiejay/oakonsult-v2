import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { All_Blogs, Main_Article } from "../../constants/Data";
import renderHTML from "react-render-html";
import { firestore } from "../../firebase/config";
import BlogFilterer from "../BlogFilterer/BlogFilterer";
import BlogOverviewPostPreview from "../BlogOverviewPostPreview/BlogOverviewPostPreview";
import CustomButton from "../CustomButton/CustomButton";
import Spacing from "../Spacing/Spacing";
import placeholder from "../../assetz/images/placeholder.png";
import skeleton from "../../Assets/images/blogskeleton.png";
import MobileSkeleton from "../../Assets/images/mobileskeleton.png";

import "./styles.scss";
import { Link } from "react-router-dom";

const BlogOverview = () => {
  const location = useLocation().pathname;
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [lastDoc, setLastDoc] = useState(null);
  const [articleOfTheWeek, setArticleOfTheWeek] = useState({});
  const [posts, setPosts] = useState([]);
  const [noPost, setNoPost] = useState(false);
  const [onEndReachedCalled, setOnEndReachedCalled] = useState(false);
  const [blogsRef] = useState(firestore.collection("blogs"));
  const [imageValid, setImageValid] = useState();

  const windowWidth = window.innerWidth;
  articleOfTheWeek.body
    ? console.log("show main")
    : console.log("show skeleton");
  const onLoadArticleOfTheWeek = () => {
    const slug = blogsRef.where("articleOfTheWeek", "==", true);
    slug.onSnapshot((snapShot) => {
      if (!snapShot.empty) {
        const data = snapShot.docs[0].data();
        const image_url = data.thumbnail || data.tumbnail;
        function checkImage(imageSrc, good, bad) {
          var img = new Image();
          img.onload = good;
          img.onerror = bad;
          img.src = imageSrc;
        }
        checkImage(
          image_url,
          function () {
            setImageValid(true);
          },
          function () {
            setImageValid(false);
          }
        );
        setArticleOfTheWeek(data);
      }
    });
  };
  const onLoadTagPosts = () => {
    setIsLoading(true);
    const slug = blogsRef.orderBy("posted_at", "desc").limit(10);
    slug.onSnapshot((snapshot) => {
      if (snapshot.empty) {
        setNoPost(true);
        return;
      }
      // setNoPost(true);
      let newPosts = [];
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);

      for (let i = 0; i < snapshot.docs.length; i++) {
        newPosts.push(snapshot.docs[i].data());
      }
      setPosts(newPosts);
    });
  };
  const onLoadMoreTagPosts = async () => {
    if (lastDoc) {
      setOnEndReachedCalled(false);
      setIsMoreLoading(true);
      const slug = await blogsRef
        .orderBy("created_at")
        .startAfter(lastDoc.data().created_at)
        .limit(10);
      slug.onSnapshot((snapShot) => {
        if (!snapShot.empty) {
          let newPosts = posts;

          setLastDoc(snapShot.docs[snapShot.docs.length - 1]);

          for (let i = 0; i < snapShot.docs.length; i++) {
            newPosts.push(snapShot.docs[i].data());
          }

          setPosts(newPosts);
          if (snapShot.docs.length < 10) setLastDoc(null);
        } else {
          setLastDoc(null);
        }
      });
      setIsMoreLoading(false);
    }
  };
  useEffect(() => {
    onLoadTagPosts();
    onLoadArticleOfTheWeek();
  }, [""]);
  return (
    <div className="blog-overview">
      <div className="main-article">
        <CustomButton label={`ARTICLE OF THE WEEK`} className={"tag-btn"} />
        <Spacing height={`2em`} />
        <div className="article-data">
          {articleOfTheWeek.body ? (
            <>
              <div
                className="tumbnail"
                style={
                  imageValid
                    ? {
                        backgroundImage:
                          articleOfTheWeek.tumbnail ||
                          articleOfTheWeek.thumbnail
                            ? `linear-gradient(#cac492b4, #cac4923f), url(${
                                articleOfTheWeek.tumbnail ||
                                articleOfTheWeek.thumbnail
                              })`
                            : `linear-gradient(#009ba7, #009ba7)`,
                      }
                    : { backgroundColor: "#009ba7" }
                }
              ></div>
              <Spacing width={`2em`} />
              <div className="article-text-button">
                <div className="article-text">
                  <h1 className="main-article-title">
                    {articleOfTheWeek.title}
                  </h1>
                  <p className="main-article-hook">
                    {renderHTML(`${articleOfTheWeek.hook}`)}
                  </p>
                </div>
                <Spacing height={`12em`} />
                {/* <div className="cr-btn-container"> */}
                <Link
                  to={{
                    pathname: `${
                      Main_Article.main_tag === "parents"
                        ? "/blogs/for-parents"
                        : Main_Article.main_tag === "siblings"
                        ? "/blogs/for-siblings"
                        : "/blogs/for-carers"
                    }/${Main_Article.title.split(" ").join("-").toLowerCase()}`,
                    search: articleOfTheWeek.id,
                  }}
                >
                  <CustomButton
                    label={`Continue Reading`}
                    className={`cr-btn`}
                  />
                </Link>
              </div>
            </>
          ) : (
            <div
              style={{
                background: `url(${
                  windowWidth < 800 ? MobileSkeleton : skeleton
                })`,
                backgroundPosition: "left",
                backgroundSize: "cover",
                width: "100%",
                height: "70vh",
                marginLeft: windowWidth < 800 ? "-10%" : "-5%",
              }}
            ></div>
          )}
        </div>
      </div>
      <Spacing height={`6em`} />
      <BlogFilterer />
      <Spacing height={`6em`} />
      <div className="posts">
        {posts.map((item, index) => (
          <BlogOverviewPostPreview key={index} data={item} />
        ))}
      </div>
      {onEndReachedCalled && <CustomButton label={`LOAD MORE`} />}
    </div>
  );
};

export default BlogOverview;
