import React from 'react';
import PropTypes from 'prop-types';
import './month.css';

import Week from '../week/Week';



function Month(props) {
  const {month, year} = props
  //get current year and month from state
  var currentYear = year;
  var currentMonth = month;

  var tempFirstDay = new Date(currentYear, currentMonth, 1)
  var tempLastDay = new Date(currentYear, currentMonth + 1, 0)
  var firstDayCurMonth = tempFirstDay.getUTCDay();
  var lastDateCurMonth = tempLastDay.getDate(); // not UTC
  var lastDayCurMonth = tempLastDay.getUTCDay();


  // create list of objects date current month
  function curMonthDays() {
    let curListDays = []
    for (var i=1; i <= lastDateCurMonth; i++){
      let obj = {};
      obj.date = i;
      obj.month = currentMonth;
      obj.year = currentYear;
      obj.status = "active";
      curListDays.push(obj)
    }
    return curListDays;
  }

  // create list of objects some date previous month
  function preMonthDays() {
    let preListDays = [];
    let temp = new Date(currentYear, currentMonth, 0);
    let lastDay = temp.getDate();

    if(firstDayCurMonth > 0) {
      for (var i = 0; i < firstDayCurMonth; i++){
        let obj = {};
        obj.date = lastDay - i;
        obj.month = currentMonth - 1;
        obj.year = currentYear;
        obj.status = "unactive";
        preListDays.push(obj)
      }
      return preListDays.reverse();
    } else {
      return preListDays;
    }
  }

  // create list of objects some date next month
  function nexMonthDays() {
    let nexListDays = [];
    let temp = new Date(currentYear, currentMonth + 1, 1);
    let firstDay = temp.getDate();
    var dif = 14 - lastDayCurMonth + 1;

    if(lastDayCurMonth <= 6){
      for(var i=0; i < dif; i++){
        let obj = {};
        obj.date = firstDay + i;
        obj.month = currentMonth + 1;
        obj.year = currentYear;
        obj.status = "unactive"
        nexListDays.push(obj)
      }
      return nexListDays;
    } else {
      return nexListDays;
    }
  }

  // get particular lists of date
  var preListDays = preMonthDays();
  var curListDays = curMonthDays();
  var nexListDays = nexMonthDays();
  // get full list of date
  var fullListDays = preListDays.concat(curListDays, nexListDays)


  // transform array fullListDays into array 6x7
  function createListByWeek() {
    // create array 6x7
    var table = new Array(6);
    for (var i = 0; i < table.length; i++){
      table[i] = new Array(7)
    }
    // initialization array 6x7
    var count = 0;
    for (var row = 0; row < table.length; row++){
       for (var col = 0; col < table[row].length; col++){
           table[row][col] = fullListDays[count]
           count ++
         }
      }
      return table;
  }

  //get transformed array 6x7
  var weeksInMonth = createListByWeek()

  return (

    <div className="container">
        <table>
          <tbody>
            <tr>
              <th>ПН</th>
              <th>ВТ</th>
              <th>СР</th>
              <th>ЧТ</th>
              <th>ПТ</th>
              <th>СБ</th>
              <th>ВС</th>
            </tr>
            {weeksInMonth.map((item, index) => (
              <tr key={index}>
                <Week week={item}/>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default Month
