import React, { useEffect } from 'react';

import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import { deleteEvent } from '../../gateway/events.js';
import Line from '../line/Line';

const Hour = ({ dataHour, hourEvents, fetchEvents, toDrawHr }) => {
  const handleEventDelete = (id) => {
    deleteEvent(id).then(() => fetchEvents());
  };
  let ifHour = false;
  if (new Date().getHours() === dataHour) {
    ifHour = true;
  }
  const draw = toDrawHr && ifHour;

  return (
    <div className='calendar__time-slot' data-time={dataHour + 1}>
      {draw && <Line />}
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
          new Date(dateFrom).getMinutes()
        )}`;
        const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
          new Date(dateTo).getMinutes()
        )}`;

        return (
          <>
            <Event
              key={id}
              //calculating event height = duration of event in minutes
              height={
                (new Date(dateTo).getTime() - new Date(dateFrom).getTime()) /
                (1000 * 60)
              }
              marginTop={new Date(dateFrom).getMinutes()}
              time={`${eventStart} - ${eventEnd}`}
              title={title}
              id={id}
              onDelete={handleEventDelete}
            />
          </>
        );
      })}
    </div>
  );
};

export default Hour;
