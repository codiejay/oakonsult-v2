import ProgrammeCard from "./ProgrammeCard";
import Dialog from "../../componentz/Dialog/Dialog";
import EventRegistrationModal from "../../componentz/EventRegistrationModal/EventRegistrationModal";
import { useEffect, useState } from "react";

const PastProgrammes = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [activeEvent, setActiveEvent] = useState("");
  useEffect(() => {}, [activeEvent]);
  return (
    <>
      <div id="pastProgrammes" style={{ display: "flex" }}>
        <ProgrammeCard
          data={{
            date: "20th July 2010",
            title: "Elitist - Rare Achievement",
            content:
              "In the lives of people with disabilities; just like it is for every living being on the surface of the lorem ipsum, only the gospel of Jesus can make a lasting, significant, and eternal difference",
          }}
          setDialogVisible={setDialogVisible}
          setActiveEvent={setActiveEvent}
        />
        <ProgrammeCard
          data={{
            date: "11th April 1977",
            title: "Past Event",
            content:
              "Only the gospel of Jesus can make a lasting, significant, and eternal difference in the lives of people with disabilities; just like it is for every living being on the surface of the lorem ipsum",
          }}
          setDialogVisible={setDialogVisible}
          setActiveEvent={setActiveEvent}
        />
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
