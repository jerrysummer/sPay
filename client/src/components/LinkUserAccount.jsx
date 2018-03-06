//-----------------------------------------------------------------------------------------
//--------------------------------- Third party imports -----------------------------------
//-----------------------------------------------------------------------------------------

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

//-----------------------------------------------------------------------------------------
//------------------------------------ Local imports --------------------------------------
//-----------------------------------------------------------------------------------------

import { linkUserAccount } from '../actions/actions';

//-----------------------------------------------------------------------------------------
//------------------------------- LinkUserAccount Component -------------------------------
//-----------------------------------------------------------------------------------------


class LinkUserAccount extends Component {

  //-------------------------------------------------------------------------
  //------------------ Constructor & Lifecycle methods ----------------------
  //-------------------------------------------------------------------------

  constructor(props) {
    super(props);
    this.state = {
      nickname: 'Node Library Checking Account',
      name_on_account: 'Node Library',
      account_num: '72347235423',
      routing_num: '051000017',
      type: 'PERSONAL',
      class: 'CHECKING'
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

  handleLinkUserAccount = () => {
    let payload = { 
      user: this.props.currentUser, 
      account: this.state 
    } 

    this.props.linkUserAccount(payload);
  }

  //-------------------------------------------------------------------------
  //------------------------------- Render ----------------------------------
  //-------------------------------------------------------------------------

  render() {
    return (
      <div >
        <TextField
          hintText="Node Library Checking Account"
          floatingLabelText="nickname"
          type="text"
          name="nickname"
          onChange={this.handleInputChange}
        /><br />
        <TextField
          hintText="Node Library"
          floatingLabelText="name on account"
          type="text"
          name="name_on_account"
          onChange={this.handleInputChange}
        /><br />
        <TextField
          hintText="72347235423"
          floatingLabelText="account number"
          type="text"
          name="account_num"
          onChange={this.handleInputChange}
        /><br />
        <TextField
          hintText="051000017"
          floatingLabelText="routing number"
          type="text"
          name="routing_num"
          onChange={this.handleInputChange}
        /><br />
        <TextField
          hintText="PERSONAL"
          floatingLabelText="type"
          type="text"
          name="type"
          onChange={this.handleInputChange}
        /><br />
        <TextField
          hintText="CHECKING"
          floatingLabelText="class"
          type="text"
          name="class"
          onChange={this.handleInputChange}
        /><br />
        <FlatButton
          label="Link Account"
          primary={true}
          onClick={this.handleLinkUserAccount}
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
    currentUser: state.currentUser
  }
}


// const mapDispatchToProps = dispatch => {
//   return {
//   }
// }

export default connect(mapStateToProps, { linkUserAccount })(LinkUserAccount);