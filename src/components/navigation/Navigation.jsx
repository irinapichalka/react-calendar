import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { days } from "../../utils/dateUtils.js";

const Navigation = ({ weekDates }) => {
  const todayDate = new Date();
  let isToday = false;

  return (
    <header className="calendar__header">
      {weekDates.map((dayDate) => {
        isToday =
          todayDate.getDate() === dayDate.getDate() &&
          todayDate.getDay() === dayDate.getDay() &&
          todayDate.getMonth() === dayDate.getMonth();
        const todayDayClass = classNames("day-label__day-name", {
          "day-label__day-name-today": isToday,
        });
        const todayNumberClass = classNames("day-label__day-number", {
          "day-label__day-number-today": isToday,
        });

        return (
          <div key={Math.random()} className="calendar__day-label day-label">
            <span className={todayDayClass}>{days[dayDate.getDay()]}</span>
            <span className={todayNumberClass}>{dayDate.getDate()}</span>
          </div>
        );
      })}
    </header>
  );
};

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};

export default Navigation;
