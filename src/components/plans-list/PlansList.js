import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import PlanItem from '../plan-item/PlanItem';

function PlansList(props) {
  const { items, onDeletePlan } = props
  return (
    <ul>
      {items.map((item) => (
        <li><PlanItem item={item} onDeletePlan={onDeletePlan}/></li>
      ))}
    </ul>
  );
}

export default PlansList;
