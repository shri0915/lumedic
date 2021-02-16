import React, { useState } from 'react';
import {
  Button, Form, TextInput, Select, SelectItem,
} from 'carbon-components-react';
import { createUseStyles } from 'react-jss';
import stateList from '../../data/StateList';
import emailPattern from '../../data/Patterns';
import apiCall from '../../classes/api/lumedicApi';
const useStyle = createUseStyles({
  informationForm: {
    display: 'Flex',
    backgroundColor: 'white',
    flexWrap: 'wrap',
    marginTop: '10vw',
    marginBottom: '10vw',
    marginRight: '25vw',
    marginLeft: '25vw',
    textAlign: 'left',
  },
  submitButton: {
    display: 'flex',
    backgroundColor: 'purple',
    fontWeight: 'bold',
    width: '15vw'
  },
  lableText: {
    color: '#525252',
    fontSize: '10pt',
    whiteSpace: 'pre-wrap',
  },
  lableTextHeading: {
    color: '#525252',
    fontSize: '12pt',
    fontWeight: 'bold',
  },
  lableTextPrivacy: {
    color: '#525252',
    fontSize: '10pt',
    fontWeight: 'bold',
    display: 'flex'
  },
  TextInputFields: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
    width: '15vw',
  },
  NameBoxes: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '20vw'
  },
  DOBSSN: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '20vw'
  },
  ContactInfo: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '20vw'
  },
  AddressInfo: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '20vw'
  },
  SubmitFlex: {
    

  }
});

const InformationForm = () => {
  const [values, setValues] = useState({
  firstName:"",
  lastName:"",
  dateOfBirth:"",
  email:"",
  last4SSN:"",
  phoneNumber:"",
  addressLine1:"",
  addressLine2:"",
  city:"",
  state:"",
  zip:"",
  credName:"COVID-19 Vaccine"});
  const [validity, setValidity] = useState('');
  const InputValidation = (inputValue, elementID) =>{
    if(inputValue === ''){
      setValidity(elementID);
    }
    else
    {
      setValidity('');
    }
    
  }
  const changeHandler = e => {
    setValues({...values, [e.target.id]: e.target.value})
 }
  
  const classes = useStyle();
  return (
    <Form className={classes.informationForm}>
      <div style={{ margin: '2rem' }}>
        <labelText className={classes.lableTextHeading}>
          Please enter the same information you provided
          in your Providence health system medical record.
        </labelText>
      </div>
      <div style={{ marginRight: '2rem', marginLeft: '2rem' }}>
        <labelText className={classes.lableText}>
          The information you provide on this page is used to locate your record from
          your health system for the purpose of issuing your vaccine records to your
          mobile device.
          By providing your mobile number you are consenting to be contacted regarding
          the availability
          of your vaccine records. Your mobile number will not be used for mobile marketing,
          and messaging
          or data charges may be imposed by your carrier.
        </labelText>
      </div>
      <div style={{ margin: '2rem' }}>
        <TextInput
          className={classes.TextInputFields, classes.NameBoxes}
          id="firstName"
          invalidText="Invalid error message."
          labelText="First Name"
          placeholder="Johnny"
          required={true}
         invalid={validity === "firstName" && true}
          onBlur={event => InputValidation(event.target.value, event.target.id)}
          onChange={event => InputValidation(event.target.value, event.target.id), changeHandler}
        />
      </div>
      <div style={{ margin: '2rem' }}>
        <TextInput
          className={classes.TextInputFields, classes.NameBoxes}
          id="lastName"
          invalidText="Invalid error message."
          labelText="Last Name"
          placeholder="Appleseed"
          required
         invalid={validity === "lastName" && true}
          onBlur={event => InputValidation(event.target.value, event.target.id)}
          onChange={event => InputValidation(event.target.value, event.target.id), changeHandler}
        />
      </div>
      <div style={{ margin: '2rem' }}>
        <TextInput
          className={classes.TextInputFields, classes.DOBSSN}
          id="dateOfBirth"
          invalidText="Invalid error message."
          labelText="Date Of Birth"
          placeholder="MM/DD/YYYY"
          required
          invalid={validity === "dateOfBirth" && true}
          onBlur={event => InputValidation(event.target.value, event.target.id)}
          onChange={event => InputValidation(event.target.value, event.target.id), changeHandler}
        />
      </div>
      <div style={{ margin: '2rem' }}>
        <TextInput
          className={classes.TextInputFields, classes.DOBSSN}
          id="last4SSN"
          invalidText="Invalid error message."
          labelText="Social Security Number (Last 4 Digits, optional)"
          placeholder="####"
          onChange={changeHandler}
        />
      </div>
      <div style={{ margin: '2rem' }}>
        <TextInput
          className={classes.TextInputFields, classes.ContactInfo}
          id="phoneNumber"
          invalidText="Invalid error message."
          labelText="Mobile Number"
          placeholder="(###)###-####"
          required
          invalid={validity === "phoneNumber" && true}
           onBlur={event => InputValidation(event.target.value, event.target.id)}
           onChange={event => InputValidation(event.target.value, event.target.id), changeHandler}
        />

      </div>
      <div style={{ margin: '2rem' }}>
        <TextInput
          className={classes.TextInputFields, classes.ContactInfo}
          id="email"
          type="email"
          invalidText="Invalid error message."
          labelText="Email"
          placeholder="you@mail.com"
          required
          pattern={emailPattern}
         invalid={validity === "email" && true}
         onBlur={event => InputValidation(event.target.value, event.target.id)}
         onChange={event => InputValidation(event.target.value, event.target.id), changeHandler}
          
        />
      </div>
      <div style={{ margin: '2rem' }}>
        <TextInput
          className={classes.TextInputFields, classes.AddressInfo}
          id="addressLine1"
          invalidText="Invalid error message."
          labelText="Mailing Address"
          placeholder="Primary street address"
           required
           invalid={validity === "addressLine1" && true}
           onBlur={event => InputValidation(event.target.value, event.target.id)}
          onChange={event => InputValidation(event.target.value, event.target.id), changeHandler}
        />
      </div>
      <div style={{ margin: '2rem' }}>
        <TextInput
          className={classes.TextInputFields, classes.AddressInfo}
          id="addressLine2"
          invalidText="Invalid error message."
          labelText="Mailing Address (optional)"
          placeholder="Unit #, Apt, Suite"
          onChange={changeHandler}
        />
      </div>
      <div style={{ margin: '2rem' }}>
        <TextInput
          className={classes.TextInputFields}
          id="city"
          invalidText="Invalid error message."
          labelText="City"
          placeholder="Seattle"
          required
          invalid={validity === "city" && true}
          onBlur={event => InputValidation(event.target.value, event.target.id)}
          onChange={event => InputValidation(event.target.value, event.target.id), changeHandler}
        />
      </div>
      <div style={{ margin: '2rem' }}>
        <Select
          defaultValue="State"
          id="state"
          invalidText="This is an invalid error message."
          labelText="State"
           required
           onChange={changeHandler}
        >
          {stateList.map((state) => (
            <SelectItem
              key={state.abbr}
              text={state.abbr}
              value={state.name}
            />
          ))}
        </Select>
      </div>
      <div style={{ margin: '2rem' }}>
        <TextInput
          className={classes.TextInputFields}
          id="zip"
          invalidText="Invalid error message."
          labelText="Postal Code"
          placeholder="#####"
          required
           invalid={validity === "zip" && true}
          onBlur={event => InputValidation(event.target.value, event.target.id)}
          onChange={event => InputValidation(event.target.value, event.target.id), changeHandler}
        />
      </div>
      <div style={{ marginTop: '2rem', marginLeft: '2rem' }}>
        <Button
          className={classes.submitButton}
          kind="primary"
          type="submit"
          onClick={event => event.preventDefault(apiCall.postData(values))}
        >
          Submit
        </Button>
      </div>
      <div style={{ margin: '2rem' }}>
        <labelText className={classes.lableTextPrivacy}>
          By submitting your information, you are agreeing to the Privacy Policy.
        </labelText>
      </div>
    </Form>
  );
};

export default InformationForm;
