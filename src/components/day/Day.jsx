import React, { useEffect, useState } from 'react';
import Hour from '../hour/Hour';

import './day.scss';

const Day = ({ dataDay, dayEvents, fetchEvents }) => {
  const [toDrawHr, setToDrawHr] = useState(false);
  useEffect(() => {
    if (new Date().getDate() === dataDay) {
      setToDrawHr(true);
    }
  }, [toDrawHr]);

  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className='calendar__day' data-day={dataDay}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => new Date(event.dateFrom).getHours() === hour
        );

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            fetchEvents={fetchEvents}
            toDrawHr={toDrawHr}
          />
        );
      })}
    </div>
  );
};

export default Day;
