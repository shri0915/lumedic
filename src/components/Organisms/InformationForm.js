import React, { createRef, useRef } from 'react';
import { Button, Form, TextInput, Select, SelectItem } from "carbon-components-react";
import {createUseStyles} from 'react-jss';
import stateList from "../../data/StateList";

const useStyle = createUseStyles({
  informationForm:{
    display: 'Flex',
    backgroundColor: 'white',
    flexWrap: 'wrap',
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
  fontSize: '10pt',
  whiteSpace: 'pre-wrap'
},
lableTextHeading:{
  color: '#525252',
  fontSize: '12pt',
  fontWeight: 'bold'
},
lableTextPrivacy:{
  color: '#525252',
  fontSize: '10pt',
  fontWeight: 'bold'
},
TextInputFields:{
    paddingLeft: '2rem',
    paddingRight: '2rem',
    width: '15vw'
}
})







const InformationForm = () => {
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
      <TextInput className={classes.TextInputFields}
        id="firstName"
        invalidText="Invalid error message."
        labelText="First Name"
        placeholder="Johnny"
        required={true}
        onBlur={event => {if(event.target.value == '') {
          event.target.reportValidity(false)
        }}}
        onKeyDownCapture={event => {if(event.target.value == '') {
          event.target.reportValidity(false)
        }}}
      />
    </div>
    <div style={{margin: '2rem'}}>
      <TextInput className={classes.TextInputFields}
        id="lastName"
        invalidText="Invalid error message."
        labelText="Last Name"
        placeholder="Appleseed"
        required={true}
        onBlur={event => {if(event.target.value == '') {
          event.target.reportValidity(false)
        }}}
        onKeyDownCapture={event => {if(event.target.value == '') {
          event.target.reportValidity(false)
        }}}
      />
      </div>
      <div style={{margin: '2rem'}}>
      <TextInput className={classes.TextInputFields}
        id="dob"
        invalidText="Invalid error message."
        labelText="Date Of Birth"
        placeholder="MM/DD/YYYY"
        required={true}
        onBlur={event => {if(event.target.value == '') {
          event.target.reportValidity(false)
        }}}
        onKeyDownCapture={event => {if(event.target.value == '') {
          event.target.reportValidity(false)
        }}}
      />
      </div>
      <div style={{margin: '2rem'}}>
      <TextInput className={classes.TextInputFields}
        id="ssn"
        invalidText="Invalid error message."
        labelText="Social Security Number (Last 4 Digits, optional)"
        placeholder="####"
      />
      </div>
      <div style={{margin: '2rem'}}>
      <TextInput className={classes.TextInputFields} 
        id="mobile"
        invalidText="Invalid error message."
        labelText='Mobile Number'
        placeholder="(###)###-####"
        required={true}
        onBlur={event => {if(event.target.value == '') {
          event.target.reportValidity(false)
        }}}
        onKeyDownCapture={event => {if(event.target.value == '') {
          event.target.reportValidity(false)
        }}}
      />
      
      </div>
      <div style={{margin: '2rem'}}>
      <TextInput className={classes.TextInputFields}
        id="email"
        type="email"
        invalidText="Invalid error message."
        labelText="Email"
        placeholder="you@mail.com"
        required={true}
        pattern='\S+@\S+\.\S+'
        onBlur={event => {if(event.target.value == '') {
          event.target.reportValidity(false)
        }}}
        onKeyDownCapture={event => {if(event.target.value == '') {
          event.target.reportValidity(false)
        }}}
      />
      </div>
    <div style={{margin: '2rem'}}>
    <TextInput className={classes.TextInputFields}
      id="mailingAddress1"
      invalidText="Invalid error message."
      labelText="Mailing Address"
      placeholder="Primary street address"
      required={true}
      onBlur={event => {if(event.target.value == '') {
        event.target.reportValidity(false)
      }}}
      onKeyDownCapture={event => {if(event.target.value == '') {
        event.target.reportValidity(false)
      }}}
    />
    </div>
    <div style={{margin: '2rem'}}>
    <TextInput className={classes.TextInputFields}
      id="mailingAddress2"
      invalidText="Invalid error message."
      labelText="Mailing Address (optional)"
      placeholder="Unit #, Apt, Suite"
    />
    </div>
    <div style={{margin: '2rem'}}>
      <TextInput className={classes.TextInputFields}
        id="city"
        invalidText="Invalid error message."
        labelText="City"
        placeholder="Seattle"
        required={true}
        onBlur={event => {if(event.target.value == '') {
          event.target.reportValidity(false)
        }}}
        onKeyDownCapture={event => {if(event.target.value == '') {
          event.target.reportValidity(false)
        }}}
      />
      </div>
    <div style={{margin: '2rem'}}>
      <Select
        defaultValue="State"
        id="select-1"
        invalidText="This is an invalid error message."
        labelText="State"
        required={true}
        onBlur={event => {if(event.target.value == '') {
          event.target.reportValidity(false)
        }}}
        onKeyDownCapture={event => {if(event.target.value == '') {
          event.target.reportValidity(false)
        }}}
      >
        {stateList.map((state) =>
          <SelectItem key = {state.abbr}
          text = {state.abbr}
          value = {state.name}
          />
        )}
      </Select>
    </div>
    <div style={{margin: '2rem'}}>
      <TextInput className={classes.TextInputFields}
        id="postalCode"
        invalidText="Invalid error message."
        labelText="Postal Code"
        placeholder="#####"
        required={true}
        onBlur={event => {if(event.target.value == '') {
          event.target.reportValidity(false)
        }}}
        onKeyDownCapture={event => {if(event.target.value == '') {
          event.target.reportValidity(false)
        }}}
      />
      </div>
      <div style={{margin: '2rem'}}>
      <Button
      className={classes.submitButton}
      kind="primary"
      type="submit"
    >
      Submit
    </Button>
      </div>
    
    <div style={{margin: '2rem'}}>
      <labelText className={classes.lableTextPrivacy}>
      By submitting your information, you are agreeing to the Privacy Policy.
      </labelText>
    </div>
</Form>
  );
}

export default InformationForm;