import React, { useState } from 'react';
import { deleteEvent } from '../../gateway/events';
import Popup from '../popup/Popup';
import PropTypes from 'prop-types';

import './event.scss';

const Event = ({ height, marginTop, title, time, id, fetchEvents }) => {
  const [showPopup, setShowPopup] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };
  const onDelete = (id) => {
    console.log(id);
    deleteEvent(id).then(() => fetchEvents());
    setShowPopup(false);
  };
  return (
    <>
      <div
        style={eventStyle}
        className='event'
        onClick={() => setShowPopup(true)}
      >
        <div className='event__title'>{title}</div>
        <div className='event__time'>{time}</div>
      </div>
      {showPopup && (
        <Popup onDelete={onDelete} id={id} marginTop={marginTop + height} />
      )}
    </>
  );
};

Event.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number,
  title: PropTypes.string,
  marginTop: PropTypes.number,
  time: PropTypes.string.isRequired,
};

Event.defaultProps = {
  title: 'my new event',
  height: '60',
  marginTop: '0',
};

export default Event;
