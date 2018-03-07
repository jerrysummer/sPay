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
    this.props.step();
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
        />
        <TextField
          hintText="Test User"
          floatingLabelText="name"
          type="text"
          name="legal_names"
          onChange={this.handleInputChange}
        />
        <TextField
          hintText="901.111.1111"
          floatingLabelText="phone number"
          type="text"
          name="phone_numbers"
          onChange={this.handleInputChange}
        />
        <TextField
          hintText="hunter2"
          floatingLabelText="password"
          type="password"
          name="password"
          onChange={this.handleInputChange}
        />
        <RaisedButton
          label="Register"
          secondary={true}
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

export default connect(mapStateToProps, { createUser })(CreateUser);