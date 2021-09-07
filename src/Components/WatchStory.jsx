import '../Scss/watchstory.scss';

const WatchStory = (props) => {
  const iconStyle = {
    backgroundImage: `url(${props.data.icon})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '80%',
  };
  return (
    <div id='watchStory'>
      <div className='icon' style={iconStyle}></div>
      <p className='text'>{props.data.text}</p>
    </div>
  );
};

export default WatchStory;
