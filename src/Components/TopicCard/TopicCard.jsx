import './TopicCard.scss';
const TopicCard = (props) => {
  return (
    <div id='topicCard'>
      <div id='orangeTag'></div>
      <div id='topicCardContent'>{props.data.content}</div>
    </div>
  );
};

export default TopicCard;
