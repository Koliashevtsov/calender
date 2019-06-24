import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './week.css'

import Day from '../day/Day';


function Week(props) {
  const {week} = props;
  return (
    <Fragment>
        {week.map((item, index) => (
              <td key={index}><Day day={item} /></td>
          ))}
    </Fragment>
  )
}


export default Week
