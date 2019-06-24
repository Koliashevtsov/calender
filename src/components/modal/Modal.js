import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import './modal.css';

import Portal from '../portal/Portal';
import PlansList from '../plans-list/PlansList';

class Modal extends React.Component {
  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitForm(this.state.label);
    this.setState({
      label: ''
    })
  }

  render(){
    const {isModal, onCancel, plansList} = this.props;
    return (
      <Fragment>
        { isModal &&
          <Portal>
            <div className="modal-overlay">
              <div className="modal-window">
                <div className="modal-header">
                  <p>Plans on this day</p>
                </div>
                <div className="modal-body">
                  <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                    <input
                      onChange={this.onLabelChange}
                      type="text" className="form-control"
                      placeholder="Please enter some events on today"
                      value={this.state.label}/>
                    <button>OK</button>
                    <button onClick={onCancel}>Cancel</button>
                  </form>
                </div>
                <div className="list-item">
                  <PlansList items={plansList} onDeletePlan={this.props.onDeletePlan}/>
                </div>
              </div>
            </div>
          </Portal>
        }
      </Fragment>

    );
  }
}

Modal.propTypes = {
  isModal: PropTypes.array
}


export default Modal;
