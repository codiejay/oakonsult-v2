const ProgrammeCard = (props) => {
  console.log(props.data.url);
  const { setDialogVisible, setActiveEvent } = props;
  return (
    <div id="ProgrammeCard">
      <div id="dateTag">{props.data.date}</div>
      <div id="card">
        <h2>{props.data.title}</h2>
        <p>{props.data.content}</p>
        <a
          target="_blank"
          href={props.type === 'past' ?  `${props.data.url}` : false}
          id="Register"
          onClick={() => {
            props.type !== 'past' && setActiveEvent(props.data.title);
            props.type !== 'past' && setDialogVisible(true);
          }}
        >
          { 
            props.type === 'past' ? 'Watch Program' : 'Register Now'
          }
        </a>
      </div>
    </div>
  );
};

export default ProgrammeCard;
