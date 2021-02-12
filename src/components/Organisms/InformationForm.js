import React from 'react';
import { Button, Form, TextInput, TextArea, Select, SelectItem, text } from "carbon-components-react";
import {createUseStyles} from 'react-jss';


const useStyle = createUseStyles({
submitButton:{
  backgroundColor: 'purple',
  fontWeight: 'bold',
  alignContent: 'center',
  textAlign: 'center'
}

})


const InformationForm = ({children}) => {
  const classes = useStyle()
return (
  <Form id="FormInput">
    <div 

    />
    <div style={{marginBottom: '2rem'}}>
      <TextInput
        id="test2"
        invalidText="Invalid error message."
        labelText="Name"
        placeholder="Please enter your name"
      />
    </div>
    <div style={{marginBottom: '2rem'}}>
    <TextArea
      cols={50}
      id="test5"
      invalidText="Invalid error message."
      labelText="Address"
      placeholder="Please enter your address"
      rows={4}
    />
    </div>
    <div style={{marginBottom: '2rem'}}>
      <Select
        defaultValue="Select Country"
        id="select-1"
        invalidText="This is an invalid error message."
        labelText="Select Country"
      >
        <SelectItem
          text="India"
          value="India"
        />
        <SelectItem
          text="France"
          value="France"
        />
        <SelectItem
          text="Japan"
          value="Japan"
        />
      </Select>
    </div>
    <Button
      className={classes.submitButton}
      kind="primary"
      type="submit"
    >
      Submit
    </Button>
</Form>
  );
}

export default InformationForm;