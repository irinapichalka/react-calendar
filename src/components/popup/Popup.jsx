import React from 'react';

const Popup = ({ onDelete, id, marginTop }) => {
  return (
    <div className='popup__content' style={{ marginTop }}>
      <button className='button' onClick={() => onDelete(id)}>
        <i className='fa fa-trash'></i>
      </button>
    </div>
  );
};

export default Popup;
