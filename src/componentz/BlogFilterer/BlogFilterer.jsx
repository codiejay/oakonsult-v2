import React from 'react';
import { useHistory } from 'react-router';
import CustomButton from '../CustomButton/CustomButton';
import Spacing from '../Spacing/Spacing';

import './styles.scss';

const BlogFilterer = ({}) => {
  const history = useHistory();
  const onRoute = () => {};
  return (
    <div className={`flex-vertical-center blog-filterer`}>
      <span>Filter Blog By</span>
      <Spacing width={`1em`} />
      <span className={`line`}></span>
      <Spacing width={`2em`} />
      <div className={`flex-vertical-center filtering-buttons`}>
        <CustomButton
          label={`All`}
          onClick={() => {}}
          className={`filter-button all-btn`}
        />
        <Spacing width={`2em`} />
        <CustomButton
          label={`For Parents`}
          onClick={() => history.push(`/blogs/for-parents`)}
          className={`filter-button for-parents`}
        />
        <Spacing width={`2em`} />
        <CustomButton
          label={`For Siblings`}
          onClick={() => history.push(`/blogs/for-siblings`)}
          className={`filter-button for-siblings`}
        />
        <Spacing width={`2em`} />
        <CustomButton
          label={`For Churches`}
          onClick={() => history.push(`/blogs/for-carers`)}
          className={`filter-button for-carers`}
        />
      </div>
    </div>
  );
};

export default BlogFilterer;
