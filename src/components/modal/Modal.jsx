import React, { useEffect, useState } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { createEvent, fetchEventsList } from "../../gateway/events";
import "./modal.scss";

const Modal = ({ showModal, setShowModal, fetchEvents }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
  };
  const onCreate = () => {
    const eventObj = {};
    eventObj.title = formData.title;
    eventObj.description = formData.description;

    const year = new Date(formData.date).getFullYear();
    const month = new Date(formData.date).getMonth();
    const day = new Date(formData.date).getDate();
    const hourStart = formData.startTime.slice(0, 2);
    const minStart = formData.startTime.slice(3, 5);
    const hourEnd = formData.endTime.slice(0, 2);
    const minEnd = formData.endTime.slice(3, 5);

    eventObj.dateFrom = new Date(year, month, day, hourStart, minStart, 0, 0);
    eventObj.dateTo = new Date(year, month, day, hourEnd, minEnd, 0, 0);

    createEvent(eventObj).then(() => fetchEvents());
    setShowModal(false);
  };

  if (!showModal) return null;
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button
            className="create-event__close-btn"
            onClick={() => setShowModal(false)}
          >
            +
          </button>
          <form className="event-form" onSubmit={(event) => formSubmit(event)}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={formData.title}
              onChange={(event) => handleChange(event)}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={formData.date}
                onChange={(event) => handleChange(event)}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={formData.startTime}
                onChange={(event) => handleChange(event)}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={formData.endTime}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={formData.description}
              onChange={(event) => handleChange(event)}
            ></textarea>
            <button
              type="submit"
              className="event-form__submit-btn"
              onClick={() => onCreate()}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  fetchEvents: PropTypes.func.isRequired,
};

export default Modal;
