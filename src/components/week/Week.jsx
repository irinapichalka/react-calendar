import React from 'react';
import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, events, fetchEvents }) => {
  return (
    <div className='calendar__week'>
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        //getting all events from the day we will render
        const dayEvents = events.filter(
          (event) =>
            new Date(event.dateFrom) > dayStart &&
            new Date(event.dateTo) < dayEnd
        );
        console.log(dayEvents);

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            fetchEvents={fetchEvents}
          />
        );
      })}
    </div>
  );
};

export default Week;
