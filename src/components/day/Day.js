import React from 'react';
import PropTypes from 'prop-types';

import './day.css';

import Modal from '../modal/Modal';


class Day extends React.Component {
  state = {
    isModal: false,
    plansList: []
  }

  onHandleModal = () => {
    this.setState((state) => {
      return {
        isModal: !this.state.isModal
      };
    })
    console.log(this.state.isModal);
  }

  addPlan = (e) => {
    this.setState((state)=> {
      plansList: state.plansList.push(e)
    })
  }
  delPlan = (item) => {
    this.setState((state) => {
      const idx = state.plansList.indexOf(item);

      const newArray = [
        ...state.plansList.slice(0, idx),
        ...state.plansList.slice(idx + 1)
      ];
      return {
        plansList: newArray
      };
    })
  }

  render(){
    const {day} = this.props;
    // create className for styles
    var classAdd = "month-active";
    if(day.status === 'unactive'){
      classAdd = "month-unactive";
    };
    if(day.date === new Date().getDate() && day.month === new Date().getUTCMonth()){
      classAdd = "month-active day-today"
    }

    return (
      <div className={`day-item ${classAdd}`}>
        <p onClick={this.onHandleModal}>{ day.date }</p>
        <Modal
          isModal={this.state.isModal}
          onCancel={this.onHandleModal}
          onSubmitForm={this.addPlan}
          plansList={this.state.plansList}
          onDeletePlan={this.delPlan}/>
      </div>
    );
  }
}


export default Day





// function Day({day, onEdit}) {
//   var classAdd = "month-active";
//   if(day.status === 'unactive'){
//     classAdd = "month-unactive";
//   };
//   if(day.date === new Date().getDate() && day.month === new Date().getUTCMonth()){
//     classAdd = "month-active day-today"
//   }
//   return (
//     <div className={`day-item ${classAdd}`} onClick={onEdit}>
//       { day.date }
//     </div>
//   );
// }
