import React, { useState } from "react";
import { Ionicons } from "react-web-vector-icons";
import CustomInput from "../CustomInput/CustomInput";
import CustomPopUp from "../CustomPopUp/CustomPopUp";
import Spacing from "../Spacing/Spacing";
import Spinner from "../Spinner/Spinner";
import CustomButton from "../CustomButton/CustomButton";
import { colors } from "../../constants/Colors";
import { onRegiterForEvent } from "../../firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import "./styles.scss";

const EventRegistrationModal = ({ setDialogVisible, title }) => {
  const [loading, setLoading] = useState(false);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = async (e) => {
    const id = uuidv4().split("-").join("");
    setLoading(true);
    e.preventDefault();
    const userData = {
      id,
      first_name,
      last_name,
      email,
      type: "Register",
      eventName: title,
    };
    if (
      first_name.trim() === "" ||
      last_name.trim() === "" ||
      email.trim() === ""
    ) {
      setLoading(false);
      setErrorMessage(`All fields are required!`);
      return;
    }
    try {
      await onRegiterForEvent(userData);
      setLoading(false);
      setDialogVisible(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <Spinner style={{ height: "20vh" }} />
      ) : (
        <div className="flex-center add-employee">
          <div className="flex-vertical-center add-employee-head">
            <span>{title ? title : "Event"}</span>
            <div
              className="flex-center close-icon"
              onClick={() => setDialogVisible(false)}
            >
              <Ionicons name="md-close" size={20} color={colors.white} />
            </div>
          </div>
          <Spacing height="2em" />
          {errorMessage !== "" ? (
            <CustomPopUp
              message={`${errorMessage}`}
              type={"error"}
              customStyles={{ backgroundColor: "red" }}
              customTextStyles={{ color: "#ffffff", textAlign: "center" }}
            />
          ) : null}
          <Spacing height="1em" />
          <CustomInput
            label="First Name"
            value={first_name}
            type={"text"}
            onChange={({ target }) => setFirstName(target.value)}
            required
          />
          <Spacing height="2em" />
          <CustomInput
            label="Last Name"
            value={last_name}
            type={"text"}
            onChange={({ target }) => setLastName(target.value)}
            required
          />
          <Spacing height="2em" />
          <CustomInput
            label="Email"
            value={email}
            type={"text"}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
          <Spacing height="2em" />
          <CustomButton
            label="Invite"
            onClick={onSubmit}
            className="add-employee-btn"
          />
        </div>
      )}
    </>
  );
};

export default EventRegistrationModal;
