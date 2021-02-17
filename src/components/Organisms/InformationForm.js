import React, { useState, } from 'react';
import {
  Button, Form, TextInput, Select, SelectItem,
} from 'carbon-components-react';
import {InformationFormTheme} from '../../Styles/Theme'
import stateList from '../../data/StateList';
import {emailPattern, addressPattern, namePattern, phoneNumberPattern, zipPattern, ssnPattern} from '../../data/Patterns';
import {ValidatePatient} from '../../classes/api/lumedicApi';


const InformationForm = () => {


  const [patientFormData, setPatientFormData] = useState({
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
  
  
  const validatePatientInfo = () => {
    ValidatePatient(patientFormData)
  }
  
  

  const CheckPatternValidity = (fieldID, value) => {
    if(value === ''){
      setPatternValidity({...patternValidity, [fieldID]: false})
    }
    else{
    setPatternValidity({...patternValidity, [fieldID]: true})
    
    if(fieldID === 'firstName' || fieldID === 'lastName' || fieldID === 'city'){
      setPatternValidity({...patternValidity, [fieldID]: namePattern.test(value)})
    }
    else if(fieldID === 'phoneNumber'){
      setPatternValidity({...patternValidity, [fieldID]: phoneNumberPattern.test(value)})
    }
    else if(fieldID === 'last4SSN'){
      setPatternValidity({...patternValidity, [fieldID]: ssnPattern.test(value)})
    }
    else if(fieldID === 'zip'){
      setPatternValidity({...patternValidity, [fieldID]: zipPattern.test(value)})
    }
    else if(fieldID === 'email'){
      setPatternValidity({...patternValidity, [fieldID]: emailPattern.test(value)})
    }
  }
}

  const ValidateAndHandleChange = e => {
    setPatientFormData({...patientFormData, [e.target.id]: e.target.value});
    CheckPatternValidity(e.target.id, e.target.value);
  }
  
  
  
  const classes = InformationFormTheme();
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
          invalid={!patternValidity.firstName}
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
         invalid={!patternValidity.lastName}
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
          invalid={!patternValidity.dateOfBirth}
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
          invalid={!patternValidity.phoneNumber}
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
         invalid={!patternValidity.email}
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
           invalid={!patternValidity.addressLine1}
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
          invalid={!patternValidity.city}
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
          invalid={!patternValidity.zip}
          onBlur={ValidateAndHandleChange}
          onChange={ValidateAndHandleChange}
        />
      </div>
      <div className={classes.DivStyleTL}>
        <Button
          className={classes.submitButton}
          kind="primary"
          onClick={validatePatientInfo}
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
