import React, { useState, } from 'react';
import {
  Button, Form, TextInput, Select, SelectItem,
} from 'carbon-components-react';
import { createUseStyles } from 'react-jss';
import stateList from '../../data/StateList';
import {emailPattern, addressPattern, namePattern, phoneNumberPattern, zipPattern, ssnPattern} from '../../data/Patterns';
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
    width: '20vw',
    maxWidth: '20vw'
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
  DivStyle: {
    margin: '2rem'
  },
  DivStyleRL: {
    marginLeft: "2rem",
    marginRight: "2rem"
  },
  DivStyleTL: {
    marginLeft: "2rem",
    marginTop: "2rem"
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

  const [validity, setValidity] = useState({
  firstName:true,
  lastName:true,
  dateOfBirth:true,
  email:true,
  last4SSN:true,
  phoneNumber:true,
  addressLine1:true,
  addressLine2:true,
  city:true,
  state:true,
  zip:true});

  const [patternValidity, setPatternValidity] = useState({
  firstName:true,
  lastName:true,
  dateOfBirth:true,
  email:true,
  last4SSN:true,
  phoneNumber:true,
  addressLine1:true,
  addressLine2:true,
  city:true,
  state:true,
  zip:true});
  
  

  // const [allowNumberValidity, setAllowNumberValidity] = useState({
  //   last4SSN:true,
  //   phoneNumber:true,
  //   zip:true});

  const ValidateAndHandleChange = e => {
    
    setValues({...values, [e.target.id]: e.target.value});
  
    {
      if(e.target.value === ''){
        setValidity({...validity, [e.target.id]: false})
      }
      else{
        setValidity({...validity, [e.target.id]: true})
      }
    }
  
      {
        if(e.target.id === 'firstName' || e.target.id === 'lastName' || e.target.id === 'city'){
          setPatternValidity({...patternValidity, [e.target.id]: namePattern.test(e.target.value)})
        }
        else if(e.target.id === 'phoneNumber'){
          setPatternValidity({...patternValidity, [e.target.id]: phoneNumberPattern.test(e.target.value)})
        }
        else if(e.target.id === 'last4SSN'){
          setPatternValidity({...patternValidity, [e.target.id]: ssnPattern.test(e.target.value)})
        }
        else if(e.target.id === 'zip'){
          setPatternValidity({...patternValidity, [e.target.id]: zipPattern.test(e.target.value)})
        }
        else if(e.target.id === 'email'){
          setPatternValidity({...patternValidity, [e.target.id]: emailPattern.test(e.target.value)})
        }
      }
  
  }
  
  
  
  const classes = useStyle();
  return (
    <Form className={classes.informationForm}>
      <div className={classes.DivStyle}>
        <labelText className={classes.lableTextHeading}>
          Please enter the same information you provided
          in your Providence health system medical record.
        </labelText>
      </div>
      <div className={classes.DivStyleRL}>
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
      <div className={classes.DivStyle}>
        <TextInput
          className={classes.TextInputFields, classes.NameBoxes}
          id="firstName"
          invalidText="Invalid error message."
          labelText="First Name"
          placeholder="Johnny"
          required={true}
          invalid={!validity.firstName || !patternValidity.firstName}
          onBlur={ValidateAndHandleChange}
          onChange={ValidateAndHandleChange}
        />
      </div>
      <div className={classes.DivStyle}>
        <TextInput
          className={classes.TextInputFields, classes.NameBoxes}
          id="lastName"
          invalidText="Invalid error message."
          labelText="Last Name"
          placeholder="Appleseed"
          required
         invalid={!validity.lastName || !patternValidity.lastName}
         onBlur={ValidateAndHandleChange}
         onChange={ValidateAndHandleChange}
        />
      </div>
      <div className={classes.DivStyle}>
        <TextInput
          className={classes.TextInputFields, classes.DOBSSN}
          id="dateOfBirth"
          invalidText="Invalid error message."
          labelText="Date Of Birth"
          placeholder="MM/DD/YYYY"
          required
          invalid={!validity.dateOfBirth}
          onBlur={ValidateAndHandleChange}
          onChange={ValidateAndHandleChange}
        />
      </div>
      <div className={classes.DivStyle}>
        <TextInput
          className={classes.TextInputFields, classes.DOBSSN}
          id="last4SSN"
          invalidText="Invalid error message."
          labelText="Social Security Number (Last 4 Digits, optional)"
          placeholder="####"
          invalid={!patternValidity.last4SSN}
          onChange={ValidateAndHandleChange}
        />
      </div>
      <div className={classes.DivStyle}>
        <TextInput
          className={classes.TextInputFields, classes.ContactInfo}
          id="phoneNumber"
          invalidText="Invalid error message."
          labelText="Mobile Number"
          placeholder="(###)###-####"
          required
          invalid={!validity.phoneNumber || !patternValidity.phoneNumber}
          onBlur={ValidateAndHandleChange}
          onChange={ValidateAndHandleChange}
        />

      </div>
      <div className={classes.DivStyle}>
        <TextInput
          className={classes.TextInputFields, classes.ContactInfo}
          id="email"
          type="email"
          invalidText="Invalid error message."
          labelText="Email"
          placeholder="you@mail.com"
          required
         invalid={!validity.email || !patternValidity.email}
         onBlur={ValidateAndHandleChange}
         onChange={ValidateAndHandleChange}
          
        />
      </div>
      <div className={classes.DivStyle}>
        <TextInput
          className={classes.TextInputFields, classes.AddressInfo}
          id="addressLine1"
          invalidText="Invalid error message."
          labelText="Mailing Address"
          placeholder="Primary street address"
           required
           invalid={!validity.addressLine1 || !patternValidity.addressLine1}
           onBlur={ValidateAndHandleChange}
           onChange={ValidateAndHandleChange}
          pattern={addressPattern}
        />
      </div>
      <div className={classes.DivStyle}>
        <TextInput
          className={classes.TextInputFields, classes.AddressInfo}
          id="addressLine2"
          invalidText="Invalid error message."
          labelText="Mailing Address (optional)"
          placeholder="Unit #, Apt, Suite"
          invalid={!patternValidity.addressLine2}
          onChange={ValidateAndHandleChange}
        />
      </div>
      <div className={classes.DivStyle}>
        <TextInput
          className={classes.TextInputFields}
          id="city"
          invalidText="Invalid error message."
          labelText="City"
          placeholder="Seattle"
          required
          invalid={!validity.city || !patternValidity.city}
          onBlur={ValidateAndHandleChange}
          onChange={ValidateAndHandleChange}
        />
      </div>
      <div className={classes.DivStyle}>
        <Select
          defaultValue="State"
          id="state"
          invalidText="This is an invalid error message."
          labelText="State"
          required
          onChange={ValidateAndHandleChange}
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
      <div className={classes.DivStyle}>
        <TextInput
          className={classes.TextInputFields}
          id="zip"
          invalidText="Invalid error message."
          labelText="Postal Code"
          placeholder="#####"
          required
          invalid={!validity.zip || !patternValidity.zip}
          onBlur={ValidateAndHandleChange}
          onChange={ValidateAndHandleChange}
        />
      </div>
      <div className={classes.DivStyleTL}>
        <Button
          className={classes.submitButton}
          kind="primary"
          type="submit"
          onClick={event => event.preventDefault(apiCall.postData(values))}
        >
          Submit
        </Button>
      </div>
      <div className={classes.DivStyle}>
        <labelText className={classes.lableTextPrivacy}>
          By submitting your information, you are agreeing to the Privacy Policy.
        </labelText>
      </div>
    </Form>
  );
};

export default InformationForm;
