/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import TextInput from "../Shared/TextInput";
import { sendMessage } from "../Middleware/Actions";
import { connect } from "react-redux";
import RippleButton from "../Shared/RippleButton";
import { contactSubtext } from "../constants";
import { useDispatch } from "react-redux";
import { RESET_CONTACT_STATE } from "../Middleware/ActionTypes";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../Shared/Spinner";

function ContactMe({ sendMessage, isLoading, isSuccess, isError }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sendMessage(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Message Sent !!!");
      dispatch({
        type: RESET_CONTACT_STATE,
      });
      navigate("/");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error("Oops! Please try after sometime");
      dispatch({
        type: RESET_CONTACT_STATE,
      });
      navigate("/");
    }
  }, [isError]);

  const { name, email, message } = formData;
  return (
    <>
      {isLoading && <Spinner />}
      <div className="contactContainer">
        <div className="contactTitle">
          Let's <span className="themeText">Talk</span>
        </div>
        <div className="contactSubText">{contactSubtext}</div>
        <form onSubmit={onSubmit} className="contactForm">
          <TextInput
            type="text"
            value={name}
            name="name"
            onChange={(e) => onChange(e)}
            className=""
            label="Your Name"
            labelClass=""
          />
          <TextInput
            type="email"
            value={email}
            name="email"
            onChange={(e) => onChange(e)}
            className=""
            label="Your Email"
            labelClass=""
          />
          <TextInput
            value={message}
            name="message"
            onChange={(e) => onChange(e)}
            className=""
            label="Your Message"
            labelClass=""
            placeholder="Type your message here..."
            textarea
          />
          <RippleButton
            disabled={isLoading}
            type="submit"
            label="Send Message"
            align={"justifyStart"}
            id={"contactMe"}
          />
        </form>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.contactReducer.loading,
  isSuccess: state.contactReducer.success,
  isError: state.contactReducer.error,
});

export default connect(mapStateToProps, { sendMessage })(ContactMe);
