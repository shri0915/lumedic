import React from 'react';
import {
  Header,
  HeaderName
} from 'carbon-components-react';


const lumedicHeader = () => (
  <div className="container">
    <span>
      <img src="./lumedic.svg" alt="logo"></img>
    </span>
    <Header style={{backgroundColor:'#f4f4f4'}} aria-label="IBM Platform Name">
      <HeaderName style ={{color:'#161616'}}href="#" prefix="">
        Lumedic
      </HeaderName>
    </Header>
  </div>
);

export default lumedicHeader;