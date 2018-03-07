//-----------------------------------------------------------------------------------------
//--------------------------------- Third party imports -----------------------------------
//-----------------------------------------------------------------------------------------
import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import CreateUser from './components/CreateUser.jsx'
import LinkUserAccount from './components/LinkUserAccount.jsx'
import MakePayment from './components/MakePayment.jsx'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import Paper from 'material-ui/Paper';

//-----------------------------------------------------------------------------------------
//------------------------------------- App Component -------------------------------------
//-----------------------------------------------------------------------------------------

class App extends Component {

  //-------------------------------------------------------------------------
  //------------------ Constructor & Lifecycle methods ----------------------
  //-------------------------------------------------------------------------

  state = {
    finished: false,
    stepIndex: 0,
  };

  //-------------------------------------------------------------------------
  //------------------------- Handler methods -------------------------------
  //-------------------------------------------------------------------------

  handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  //-------------------------------------------------------------------------
  //------------------------------- Render ----------------------------------
  //-------------------------------------------------------------------------


  render() {
    const style = {
      height: "auto",
      width: "auto",
      margin: 3,
      padding: 10,
      textAlign: 'center',
      display: 'inline-block',
    };
    const { finished, stepIndex } = this.state;

    return (
      <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
        <AppBar 
          title="SynapsePay"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Create your user account</StepLabel>
            <StepContent>
              <Paper style={style} zDepth={1} >
                <CreateUser step={this.handleNext}/>
              </Paper>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Link your bank account</StepLabel>
            <StepContent>
              <Paper style={style} zDepth={1} >
                <LinkUserAccount step={this.handleNext}/>
              </Paper>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Make payment to seller</StepLabel>
            <StepContent>
              <Paper style={style} zDepth={1} >
                <MakePayment step={this.handleNext}/>
              </Paper>
            </StepContent>
          </Step>
        </Stepper>
        {finished && (
          <p style={{ margin: '20px 0', textAlign: 'center' }}>
            <a
              href=""
              onClick={(event) => {
                event.preventDefault();
                this.setState({ stepIndex: 0, finished: false });
              }}
            >
              Click here
            </a> to reset.
          </p>
        )}
      </div>
    );
  }
}

export default App;
