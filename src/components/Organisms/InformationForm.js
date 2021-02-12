import React from 'react';
import { Button, Form, TextInput, TextArea, Select, SelectItem } from "carbon-components-react";
import {createUseStyles} from 'react-jss';
import stateList from "../../data/StateList";

const useStyle = createUseStyles({
  informationForm:{
    display: 'Flex',
    alignContent: 'center',
    backgroundColor: 'white',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: '10vw',
    marginBottom: '10vw',
    marginRight: '25vw',
    marginLeft: '25vw',
    textAlign: 'left'
  },
submitButton:{
  backgroundColor: 'purple',
  fontWeight: 'bold',
  alignContent: 'center',
  textAlign: 'center'
},
lableTextMobile:{
  color: '#525252',
  fontSize: '10pt'
},
lableTextHeading:{
  color: '#525252',
  fontSize: '12pt',
  fontWeight: 'bold'
}
})


const InformationForm = ({children}) => {
  const classes = useStyle()
return (
  <Form className={classes.informationForm}>
    <div style={{margin: '2rem'}}>
      <labelText className={classes.lableTextHeading}>
        Please enter the same information you provided in your Providence health system medical record.
        </labelText>
    </div>
    <div style={{marginRight: '2rem'},{marginLeft: '2rem'}}>
      <labelText className={classes.lableTextMobile}>
      The information you provide on this page is used to locate your record from 
      your health system for the purpose of issuing your vaccine records to your mobile device. 
      By providing your mobile number you are consenting to be contacted regarding the availability 
      of your vaccine records. Your mobile number will not be used for mobile marketing, and messaging 
      or data charges may be imposed by your carrier.
      </labelText>
    </div>
    <div style={{margin: '2rem'}}>
      <TextInput
        id="firstName"
        invalidText="Invalid error message."
        labelText="First Name"
        placeholder="Johnny"
        required
      />
    </div>
    <div style={{margin: '2rem'}}>
      <TextInput
        id="lastName"
        invalidText="Invalid error message."
        labelText="Last Name"
        placeholder="Appleseed"
        required
      />
      </div>
      <div style={{margin: '2rem'}}>
      <TextInput
        id="dob"
        invalidText="Invalid error message."
        labelText="Date Of Birth"
        placeholder="MM/DD/YYYY"
        required
      />
      </div>
      <div style={{margin: '2rem'}}>
      <TextInput
        id="ssn"
        invalidText="Invalid error message."
        labelText="Social Security Number (Last 4 Digits, optional)"
        placeholder="####"
      />
      </div>
      <div style={{margin: '2rem'}}>
      <labelText className={classes.lableTextMobile}>Mobile Number</labelText>
      <TextInput
        id="mobile"
        invalidText="Invalid error message."
        labelText="To receive text messages and download our mobile application"
        placeholder="(###)###-####"
        required
      />
      
      </div>
      <div style={{margin: '2rem'}}>
      <TextInput
        id="email"
        type="email"
        invalidText="Invalid error message."
        labelText="Email"
        placeholder="you@mail.com"
        required
        pattern='\S+@\S+\.\S+'
      />
      </div>
    <div style={{margin: '2rem'}}>
    <TextArea
      cols={50}
      id="mailingAddress1"
      invalidText="Invalid error message."
      labelText="Mailing Address"
      placeholder="Primary street address"
      rows={1}
      required
    />
    </div>
    <div style={{margin: '2rem'}}>
    <TextArea
      cols={50}
      id="mailingAddress2"
      invalidText="Invalid error message."
      labelText="Mailing Address (optional)"
      placeholder="Unit #, Apt, Suite"
      rows={1}
    />
    </div>
    <div style={{margin: '2rem'}}>
      <TextInput
        id="city"
        invalidText="Invalid error message."
        labelText="City"
        placeholder="Seattle"
        required
      />
      </div>
    <div style={{margin: '2rem'}}>
      <Select
        defaultValue="State"
        id="select-1"
        invalidText="This is an invalid error message."
        labelText="State"
        required
      >
        {stateList.map((state) =>
          <SelectItem 
          text = {state.abbr}
          value = {state.name}
          />
        )}
      </Select>
    </div>
    <div style={{margin: '2rem'}}>
      <TextInput
        id="postalCode"
        invalidText="Invalid error message."
        labelText="Postal Code"
        placeholder="#####"
        required
      />
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