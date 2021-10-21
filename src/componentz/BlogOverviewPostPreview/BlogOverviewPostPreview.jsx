import moment from "moment";
import React, { useState } from "react";
import { useHistory } from "react-router";
import CustomButton from "../CustomButton/CustomButton";
import Spacing from "../Spacing/Spacing";
import placeholder from "../../assetz/images/placeholder.png";

import "./styles.scss";
import { colors } from "../../constants/Colors";
import { Link } from "react-router-dom";

const BlogOverviewPostPreview = ({
  data: { id, title, hook, posted_at, main_tag, thumbnail, tumbnail },
}) => {
  console.log(tumbnail);
  const history = useHistory();
  const [imageValid, setImageValid] = useState();
  const image_url = thumbnail || tumbnail;
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
  const OnTagClick = () => {
    history.push(
      `${
        main_tag === "for-parents"
          ? "/blogs/for-parents"
          : main_tag === "for-siblings"
          ? "/blogs/for-siblings"
          : "/blogs/for-carers"
      }`
    );
  };
  return (
    <div className={`blog-overview-post-preview-container`}>
      <div className={`blog-overview-post-preview`}>
        <div
          className={`flex-center-column tumbnail`}
          style={
            imageValid
              ? {
                  backgroundImage:
                    main_tag === "for-parents"
                      ? `url(${tumbnail || thumbnail})`
                      : main_tag === "for-siblings"
                      ? `url(${tumbnail || thumbnail})`
                      : `url(${tumbnail || thumbnail})`,
                }
              : { backgroundColor: "#009ba7" }
          }
        >
          <CustomButton
            label={main_tag}
            onClick={OnTagClick}
            className={`${
              main_tag === "for-parents"
                ? "for-parents-button"
                : main_tag === "for-siblings"
                ? "for-siblings-button"
                : "for-carers-button"
            } tag-button`}
          />
          <div className={`title-container`}>
            <Link
              to={{
                pathname: `${
                  main_tag === "for-parents"
                    ? "/blogs/for-parents"
                    : main_tag === "for-siblings"
                    ? "/blogs/for-siblings"
                    : "/blogs/for-carers"
                }/${title.split(" ").join("-").toLowerCase()}`,
                search: id,
              }}
            >
              <h1
                className={`title`}
                onClick={() =>
                  history.push(
                    `${
                      main_tag === "for-parents"
                        ? "/blogs/for-parents"
                        : main_tag === "for-siblings"
                        ? "/blogs/for-siblings"
                        : "/blogs/for-carers"
                    }/${title.split(" ").join("-").toLowerCase()}`
                  )
                }
              >
                {title}
              </h1>
            </Link>
            <Spacing height={`1em`} />
            <span
              className={`time`}
              style={{
                color:
                  main_tag === "for-parents"
                    ? colors.for_parents
                    : main_tag === "for-siblings"
                    ? colors.for_siblings
                    : colors.for_carers,
              }}
            >
              {new Date(posted_at).toDateString()}
            </span>
          </div>
        </div>
        <Spacing height={`1em`} />
      </div>
    </div>
  );
};

export default BlogOverviewPostPreview;
