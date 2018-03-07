//-----------------------------------------------------------------------------------------
//--------------------------------- Third party imports -----------------------------------
//-----------------------------------------------------------------------------------------

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


//-----------------------------------------------------------------------------------------
//------------------------------------ Local imports --------------------------------------
//-----------------------------------------------------------------------------------------

import { makePayment } from '../actions/actions';

//-----------------------------------------------------------------------------------------
//------------------------------- MakePayment Component -------------------------------
//-----------------------------------------------------------------------------------------


class MakePayment extends Component {

  //-------------------------------------------------------------------------
  //------------------ Constructor & Lifecycle methods ----------------------
  //-------------------------------------------------------------------------

  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      currency: 'USD',
    };
  }

  //-------------------------------------------------------------------------
  //------------------------- Handler methods -------------------------------
  //-------------------------------------------------------------------------

  handleInputChange = (event) => {
    event.preventDefault();
    let { target: { name, value } } = event;
    this.setState({
      [name]: value,
    })
  }

  handleMakePayment = () => {
    let payload = {
      amount: this.state,
      payerNode: this.props.userAccount
    }

    this.props.makePayment(payload);
    this.props.step();
  }

  //-------------------------------------------------------------------------
  //------------------------------- Render ----------------------------------
  //-------------------------------------------------------------------------

  render() {
    return (
      <div >
        <TextField
          hintText="100"
          floatingLabelText="amount"
          type="text"
          name="amount"
          onChange={this.handleInputChange}
        /><br />
        <TextField
          hintText="Node Library"
          floatingLabelText="currency"
          type="text"
          name="currency"
          defaultValue="USD"
          onChange={this.handleInputChange}
        /><br />
        <RaisedButton
          label="Pay"
          secondary={true}
          onClick={this.handleMakePayment}
        />
      </div>
    );
  }
}


//-------------------------------------------------------------------------
//-------------------- Mapping store to ImagesDisplay's props -------------
//-------------------------------------------------------------------------


const mapStateToProps = (state, ownProps) => {
  return {
    userAccount: state.userAccount
  }
}


// const mapDispatchToProps = dispatch => {
//   return {
//   }
// }

export default connect(mapStateToProps, { makePayment })(MakePayment);