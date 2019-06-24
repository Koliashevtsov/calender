import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './plan-item.css'

function PlanItem(props) {
  const { item, onDeletePlan } = props
  return (
    <div className="plan-item">
      <div className="text-item">{item}</div>
      <div className="button-item"><button onClick={() => onDeletePlan(item)}>Delete</button></div>
    </div>
  );
}

export default PlanItem
