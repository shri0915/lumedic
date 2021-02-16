import { createUseStyles } from 'react-jss';
import React from 'react';
import InformationForm from './components/Organisms/InformationForm';
const useStyle = createUseStyles({
  App: {
    backgroundColor: '#E5E5E5'
  }}
  );

function App() {
  const classes = useStyle();
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
