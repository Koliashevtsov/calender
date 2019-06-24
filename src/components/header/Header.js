import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

function Header(props) {
  const {year, month, onHandlePrev, onHandleCur, onHandleNext} = props;
  var nameMonths = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"]

  function transformName(month){
    for (var i = 0; i < nameMonths.length; i++){
      if (i == month){
        var nameMonth = nameMonths[i]
      }
    }
    return nameMonth;
  }
  var nameMonth = transformName(month);

  return (
    <div className="header">
      <span className="name-month">{nameMonth}</span>
      <span className="name-year">{year}</span>
      <div className="buttons">
        <div><button onClick={onHandlePrev}>Назад</button></div>
        <div><button onClick={onHandleCur}>Сегодня</button></div>
        <div><button onClick={onHandleNext}>Вперед</button></div>
      </div>
    </div>
  )
}


export default Header
