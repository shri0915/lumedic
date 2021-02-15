import React from 'react';
import InformationForm from '../Organisms/InformationForm';
import {ProgressIndicator, ProgressStep} from 'carbon-components-react';

const progressBar = () => {
    return (
<div className="some-container">
<ProgressIndicator currentIndex={1}>
    <ProgressStep
      label="Welcome"
      description="LET’S GET YOU SET UP!"
    />
    <ProgressStep
      current
      label="Enter your personal information"
      description= {InformationForm}
    />
    <ProgressStep
      label="Third step"
      description="Thank you for filling the form"
    />
  </ProgressIndicator>
</div>
    );
};

export default progressBar;
