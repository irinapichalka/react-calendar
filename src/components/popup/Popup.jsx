import React from 'react';
import PropTypes from 'prop-types';

const Popup = ({ onDelete, id, marginTop }) => {
  return (
    <div className='popup__content' style={{ marginTop: `${marginTop}px` }}>
      <button className='button' onClick={() => onDelete(id)}>
        <i className='fa fa-trash'></i>
      </button>
    </div>
  );
};

Popup.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  marginTop: PropTypes.number,
};

Popup.defaultProps = {
  marginTop: 60,
};

export default Popup;
