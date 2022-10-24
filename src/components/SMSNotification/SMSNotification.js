import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./SMSNotification.css";

const SMSNotification = (props) => {
  const {userMessage} = props;
  const [phoneNumber, setPhoneNumber] = useState();

  const onSMSSubmit = (event) => {
    event.preventDefault();
    props.addUser(phoneNumber)
  };

  return (
    <section className="sms-notify">
      <p>
        Enter your phone number below to receive SMS notifications of new alerts
      </p>
      <div className="phone-input">
        <form className="sms-form" onSubmit={onSMSSubmit}>
          <PhoneInput
            country={"us"}
            value={phoneNumber}
            onChange={phoneNumber => setPhoneNumber(phoneNumber)}
          />
          <button className="submit-btn"> Submit </button>
          {<p>{userMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default SMSNotification;
