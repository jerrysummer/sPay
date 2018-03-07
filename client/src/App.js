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
import FlatButton from 'material-ui/FlatButton';
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

  renderStepActions(step) {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: '12px 0' }}>
        <FlatButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{ marginRight: 12 }}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  //-------------------------------------------------------------------------
  //------------------------------- Render ----------------------------------
  //-------------------------------------------------------------------------


  render() {
    const style = {
      height: "auto",
      width: "auto",
      margin: 5,
      padding: 10,
      textAlign: 'center',
      display: 'inline-block',
    };
    const { finished, stepIndex } = this.state;

    return (
      <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
        <AppBar 
          title="iPay"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Create your user account</StepLabel>
            <StepContent>
              <Paper style={style} zDepth={1} >
                <CreateUser step={this.handleNext}/>
              </Paper>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Link your bank account</StepLabel>
            <StepContent>
              <Paper style={style} zDepth={1} >
                <LinkUserAccount step={this.handleNext}/>
              </Paper>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Make payment to seller</StepLabel>
            <StepContent>
              <Paper style={style} zDepth={1} >
                <MakePayment step={this.handleNext}/>
              </Paper>
              {this.renderStepActions(2)}
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
