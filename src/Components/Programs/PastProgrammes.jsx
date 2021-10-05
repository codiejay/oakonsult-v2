import ProgrammeCard from "./ProgrammeCard";
import Dialog from "../../componentz/Dialog/Dialog";
import EventRegistrationModal from "../../componentz/EventRegistrationModal/EventRegistrationModal";
import { useEffect, useState } from "react";

const PastProgrammes = ({ data }) => {
  const [showNoEventAlert, setShowNoEventAlert] = useState(true);
  let currentDate = new Date();
  let dateString = [
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    currentDate.getDate(),
  ];
  const [dialogVisible, setDialogVisible] = useState(false);
  const [activeEvent, setActiveEvent] = useState("");
  useEffect(() => {}, [activeEvent]);
  return (
    <>
      <div id="pastProgrammes" style={{ display: "flex" }}>
        {data.map((event, index) => {
          let eventStringDate = event.date.split("-");
          eventStringDate[1] = parseInt(eventStringDate[1]);
          eventStringDate = eventStringDate.join("");
          if (parseInt(dateString.join("")) > eventStringDate) {
            return (
              <ProgrammeCard
                type='past'
                index={index}
                data={{
                  date: event.date,
                  title: event.name,
                  content: event.description,
                  url: event.url
                }}
                setDialogVisible={setDialogVisible}
                setActiveEvent={setActiveEvent}
              />
            );
          }
        })}
        <h2
          style={{
            marginTop: "2rem",
            fontSize: "2.3rem",
            display: showNoEventAlert ? "none" : "block",
          }}
        >
          No upcoming events, please check back
        </h2>
      </div>
      <Dialog dialogVisible={dialogVisible} setDialogVisible={setDialogVisible}>
        <EventRegistrationModal
          setDialogVisible={setDialogVisible}
          title={activeEvent}
        />
      </Dialog>
    </>
  );
};

export default PastProgrammes;
