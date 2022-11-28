import React, { useState } from 'react';
import './header.scss';
import Modal from '../modal/Modal';
import { getDisplayedMonth } from '../../utils/dateUtils';

const Header = ({
  showModal,
  setShowModal,
  weekStartDate,
  setWeekStartDate,
}) => {
  return (
    <>
      <header className='header'>
        <button
          className='button create-event-btn'
          onClick={() => setShowModal(true)}
        >
          <i className='fas fa-plus create-event-btn__icon'></i>Create
        </button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <div className='navigation'>
          <button
            className='navigation__today-btn button'
            onClick={() => setWeekStartDate(new Date())}
          >
            Today
          </button>
          <button
            className='icon-button navigation__nav-icon'
            onClick={() =>
              setWeekStartDate(
                new Date(weekStartDate.setDate(weekStartDate.getDate() - 7))
              )
            }
          >
            <i className='fas fa-chevron-left'></i>
          </button>
          <button
            className='icon-button navigation__nav-icon'
            onClick={() =>
              setWeekStartDate(
                new Date(weekStartDate.setDate(weekStartDate.getDate() + 7))
              )
            }
          >
            <i className='fas fa-chevron-right'></i>
          </button>
          <span className='navigation__displayed-month'>
            {getDisplayedMonth(weekStartDate)}
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
