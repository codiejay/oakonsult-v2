import { useEffect, useState } from "react";
import "./Programmes.scss";
import PastProgrammes from "./PastProgrammes";
import CurrentProgrammes from "./CurrentProgrammes";
import { firestore } from "../../firebase/config";

const Programmes = () => {
  const [ProgrammeSort, ChangeProgrammeSort] = useState("Current");
  let currentStyle;
  let pastStyle;
  let colorSwitch = { currentColor: "#009ba7", pastColor: "#009ba799" };
  const [event, setEvent] = useState([]);
  const eventRef = firestore.collection("events");

  const OnLoadEvent = async () => {
    eventRef.onSnapshot((snapShot) => {
      if (!snapShot.empty) {
        const events = [];

        snapShot.docs.forEach((item, index) => {
          events.push(item.data());
          if (index === snapShot.size - 1) {
            setEvent(events);
          }
        });
      }
    });
  };

  useEffect(() => {
    OnLoadEvent();
  }, []);
  switch (ProgrammeSort) {
    case "Current":
      console.log("current programmes");
      currentStyle = { display: "block" };
      pastStyle = { display: "none" };
      colorSwitch.currentColor = "#009ba7";
      colorSwitch.pastColor = "#009ba799";

      break;
    case "Past":
      console.log("Past programmes");
      currentStyle = { display: "none" };
      pastStyle = { display: "block" };
      colorSwitch.currentColor = "#009ba799";
      colorSwitch.pastColor = "#009ba7";

      break;
    default:
      console.log("Error in programme switcher");
  }

  return (
    <>
      <div id="Programmes">
        <div id="ProgrammesIntro">
          <h2 id="Title">
            OUR
            <br /> PROGRAMMES
          </h2>
          <div id="calenderImage"></div>
        </div>
        <div id="programmesSection">
          <div id="selectionNavBar">
            <div
              id="current"
              className="programSelection"
              onClick={() => {
                ChangeProgrammeSort("Current");
              }}
              style={{ background: colorSwitch.currentColor }}
            >
              CURRENT PROGRAMS
            </div>
            <div
              id="past"
              className="programSelection"
              onClick={() => {
                ChangeProgrammeSort("Past");
              }}
              style={{ background: colorSwitch.pastColor }}
            >
              PAST PROGRAMS
            </div>
          </div>
        </div>
        <div id="AvailiableProgrammes">
          <div className="current" style={pastStyle}>
            <PastProgrammes data={event} />
          </div>

          <div className="past" style={currentStyle}>
            <CurrentProgrammes data={event} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Programmes;
