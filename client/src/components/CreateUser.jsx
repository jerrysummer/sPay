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

import { createUser } from '../actions/actions';

//-----------------------------------------------------------------------------------------
//------------------------------------ CreateUser Component -------------------------------
//-----------------------------------------------------------------------------------------


class CreateUser extends Component {

  //-------------------------------------------------------------------------
  //------------------ Constructor & Lifecycle methods ----------------------
  //-------------------------------------------------------------------------

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      legal_name: '',
      phone_number: '',
      password: '',
    };
  }

  //-------------------------------------------------------------------------
  //------------------------- Handler methods -------------------------------
  //-------------------------------------------------------------------------

  handleInputChange = (event) => {
    event.preventDefault();
    let {target : { name, value }} = event;
    this.setState({
      [name]: value,
    })
  }

  handleCreateUser = () => {
    this.props.createUser(this.state);
  }

  //-------------------------------------------------------------------------
  //------------------------------- Render ----------------------------------
  //-------------------------------------------------------------------------

  render() {
    return (
      <div >
        <TextField
          hintText="test@synapsefi.com"
          floatingLabelText="email"
          type="text"
          name="email"
          onChange={this.handleInputChange}
        /><br />
        <TextField
          hintText="Test User"
          floatingLabelText="name"
          type="text"
          name="legal_names"
          onChange={this.handleInputChange}
        /><br />
        <TextField
          hintText="901.111.1111"
          floatingLabelText="phone number"
          type="text"
          name="phone_numbers"
          onChange={this.handleInputChange}
        /><br />
        <TextField
          hintText="hunter2"
          floatingLabelText="password"
          type="password"
          name="password"
          onChange={this.handleInputChange}
        /><br />
        <FlatButton
          label="Register"
          primary={true}
          onClick={this.handleCreateUser}
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
  }
}


// const mapDispatchToProps = dispatch => {
//   return {
//   }
// }

export default connect(mapStateToProps, { createUser })(CreateUser);