import React from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import './calendar.scss';
import PropTypes from 'prop-types';

const Calendar = ({ weekDates, events, fetchEvents }) => {
  return (
    <section className='calendar'>
      <Navigation weekDates={weekDates} />
      <div className='calendar__body'>
        <div className='calendar__week-container'>
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={events}
            fetchEvents={fetchEvents}
          />
        </div>
      </div>
    </section>
  );
};

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array,
  fetchEvents: PropTypes.func.isRequired,
};

Calendar.defaultProps = {
  events: [],
};

export default Calendar;
