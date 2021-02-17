import {AppTheme} from './Styles/Theme'
import React from 'react';
import InformationForm from './components/Organisms/InformationForm';


function App() {
  const classes = AppTheme();
  return (
    <div className={classes.App}>
      <header className="App-header">
        <div>
          <InformationForm />
        </div>
      </header>
    </div>
  );
}

export default App;
