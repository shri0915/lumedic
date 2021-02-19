import React, { useState, } from 'react';
import {
  Button, Form, TextInput, Select, SelectItem,
} from 'carbon-components-react';
import {InformationFormTheme} from '../../Styles/Theme'
import stateList from '../../data/StateList';
import {emailPattern, addressPattern, namePattern, phoneNumberPattern, 
  zipPattern, ssnPattern} from '../../data/Patterns';
import {ValidatePatient} from '../../classes/api/lumedicApi';
import {NameInvalid, AddressInvalid, CityInvalid, DateInvalid,
  EmailInvalid, MobileNumberInvalid, SSNInvalid, ZipInvalid} from '../../assets/InvalidMessages';

const InformationForm = () => {

let submitDisabled =true;
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
  zip:true,
  flag:false});
  
  

  
  const validatePatientInfo = () => {
    ValidatePatient(patientFormData)
  }
  
  

  const CheckPatternValidity = (fieldID, value) => {
    if(value === ''){
      setPatternValidity({...patternValidity, [fieldID]: false})
    }
    else{
    setPatternValidity({...patternValidity, [fieldID]: true})
    patternValidity.flag=true;
    
    if(fieldID === 'firstName' && fieldID === 'lastName' && fieldID === 'city'){
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

const CanSubmit = () => {
  var inputValues = [patientFormData.addressLine1, patientFormData.addressLine2, 
    patientFormData.city, patientFormData.dateOfBirth, patientFormData.email, 
    patientFormData.firstName, patientFormData.last4SSN, patientFormData.lastName, 
    patientFormData.phoneNumber, patientFormData.state, patientFormData.zip];
  for (var i = 0; i < inputValues.length; i++) {
    if (inputValues[i] === '') patternValidity.flag = false;
    else patternValidity.flag = true;
}
  if (!patternValidity.flag) {
    return true;
  }
  submitDisabled = !(patternValidity.firstName && patternValidity.lastName && 
    patternValidity.phoneNumber &&
    patternValidity.state && patternValidity.zip && patternValidity.addressLine1 && 
    patternValidity.addressLine2 && patternValidity.city && patternValidity.dateOfBirth 
    && patternValidity.email);
   return submitDisabled;
    
  }


  const ValidateAndHandleChange = e => {
    if (e.target.id === 'phoneNumber') {
      FormatPhoneNumberInput(e);
    }
    else if (e.target.id === 'last4SSN' && e.target.id === 'zip') {
      FormatNumberInput(e);
    }
    else if (e.target.id === 'dateOfBirth')
    {
      FormatDOBInput(e);
    }

    
    setPatientFormData({...patientFormData, [e.target.id]: e.target.value});
    CheckPatternValidity(e.target.id, e.target.value);
   CanSubmit();
  }

  const FormatPhoneNumberInput = e => {
    var phNumber = e.target.value.replace(/\D/g,'');
    e.target.value = phNumber;
    const areaCode = phNumber.substring(0,3);
    const middle = phNumber.substring(3,6);
    const last = phNumber.substring(6,10);

    if(phNumber.length > 6){e.target.value = `(${areaCode}) ${middle} - ${last}`;}
    else if(phNumber.length > 3){e.target.value = `(${areaCode}) ${middle}`;}
    else if(phNumber.length > 0){e.target.value = `(${areaCode}`;}
  }  

  const FormatNumberInput = e => {
    var Number = e.target.value.replace(/\D/g,'');
    e.target.value = Number;
  }  

  const FormatDOBInput = e => {
    var DOB = e.target.value.replace(/\D/g,'');
    e.target.value = DOB;
    const month = DOB.substring(0,2);
    const date = DOB.substring(2,4);
    const year = DOB.substring(4,8);

    if(DOB.length > 4){e.target.value = `${month}/${date}/${year}`;}
    else if(DOB.length > 2){e.target.value = `${month}/${date}`;}
    else if(DOB.length > 0){e.target.value = `${month}`;}
  }  
  
  
  
  const classes = InformationFormTheme();
  return (
    <Form className={classes.informationForm}
    id='patientDetailsForm'>
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
          invalidText={NameInvalid}
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
          invalidText={NameInvalid}
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
          invalidText={DateInvalid}
          labelText="Date Of Birth"
          placeholder="MM/DD/YYYY"
          required
          maxLength='10'
          invalid={!patternValidity.dateOfBirth}
          onBlur={ValidateAndHandleChange}
          onChange={ValidateAndHandleChange}
        />
      </div>
      <div className={classes.DivStyle}>
        <TextInput
          className={classes.DOBSSN}
          id="last4SSN"
          invalidText={SSNInvalid}
          labelText="Social Security Number (Last 4 Digits, optional)"
          placeholder="####"
          maxLength='4'
          invalid={!patternValidity.last4SSN}
          onChange={ValidateAndHandleChange}
        />
      </div>
      <div className={classes.DivStyle}>
        <TextInput
          className={classes.TextInputFields, classes.ContactInfo}
          id="phoneNumber"
          invalidText={MobileNumberInvalid}
          labelText="Mobile Number"
          placeholder="(###)###-####"
          required
          maxLength='16'
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
          invalidText={EmailInvalid}
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
          invalidText={AddressInvalid}
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
          invalidText={AddressInvalid}
          labelText="Mailing Address (optional)"
          placeholder="Unit #, Apt, Suite"
          invalid={!patternValidity.addressLine2}
          onChange={ValidateAndHandleChange}
        />
      </div>
      <div className={classes.DivStyle}>
        <TextInput
          className={classes.CityInfo}
          id="city"
          invalidText={CityInvalid}
          labelText="City"
          placeholder="Seattle"
          required
          invalid={!patternValidity.city}
          onBlur={ValidateAndHandleChange}
          onChange={ValidateAndHandleChange}
        />
      </div>
      <div className={classes.DivStyleS}>
        <Select
          className={classes.StateInfo}
          defaultValue="State"
          id="state"
          invalidText="Please select the proper state"
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
      <div className={classes.DivStyleZ}>
        <TextInput
          className={classes.ZipInfo}
          id="zip"
          invalidText={ZipInvalid}
          labelText="Postal Code"
          placeholder="#####"
          required
          maxLength='5'
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
          disabled={CanSubmit()}
          
        >
          Submit
        </Button>
      </div>
      <div className={classes.DivStylePrivacy}>
        <labelText className={classes.lableTextPrivacy}>
          By submitting your information, you are agreeing to the Privacy Policy.
        </labelText>
      </div>
    </Form>
  );
};

export default InformationForm;
