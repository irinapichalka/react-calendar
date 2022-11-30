import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import { fetchEventsList } from './gateway/events.js';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const fetchEvents = () => {
    fetchEventsList().then((eventsList) => setEvents(eventsList));
  };

  return (
    <>
      <Header
        setShowModal={setShowModal}
        weekStartDate={weekStartDate}
        setWeekStartDate={setWeekStartDate}
      />
      <Calendar
        weekDates={weekDates}
        events={events}
        fetchEvents={fetchEvents}
      />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setEvents={setEvents}
        fetchEvents={fetchEvents}
      />
    </>
  );
};

export default App;
