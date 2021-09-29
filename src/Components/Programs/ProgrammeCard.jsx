const ProgrammeCard = (props) => {
  console.log(props);
  const { setDialogVisible, setActiveEvent } = props;
  return (
    <div id="ProgrammeCard">
      <div id="dateTag">{props.data.date}</div>
      <div id="card">
        <h2>{props.data.title}</h2>
        <p>{props.data.content}</p>
        <div
          id="Register"
          onClick={() => {
            setActiveEvent(props.data.title);
            setDialogVisible(true);
          }}
        >
          { 
            props.type === 'past' ? 'Watch Program' : 'Register Now'
          }
        </div>
      </div>
    </div>
  );
};

export default ProgrammeCard;
