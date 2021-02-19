import { createUseStyles } from 'react-jss';


const AppTheme = createUseStyles({
    App: {
      backgroundColor: '#E5E5E5'
    }}
    );
const InformationFormTheme = createUseStyles({
    informationForm: {
      display: 'Flex',
      backgroundColor: 'white',
      flexWrap: 'wrap',
      marginTop:'5%',
      marginBottom:'5%',
      marginRight:'25%',
      marginLeft:'25%',
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
      fontFamily: 'Brown',
      lineHeight: '1rem',
      letterSpacing: '0.32px',
    },
    lableTextHeading: {
      color: '#525252',
      fontSize: '12pt',
      fontWeight: 'bold',
      fontFamily: 'Brown',
      lineHeight: '1rem',
      letterSpacing: '0.32px',
    },
    lableTextPrivacy: {
      color: '#525252',
      fontSize: '10pt',
      fontWeight: 'bold',
      display: 'flex',
      fontFamily: 'Brown',
      lineHeight: '1rem',
      letterSpacing: '0.32px',
      width: '30vw'
    },
    TextInputFields: {
      paddingLeft: '2rem',
      paddingRight: '2rem',
      width: '20vw',
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px'
    },
    NameBoxes: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '20vw',
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px'
    },
    DOBSSN: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '20vw',
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px'
    },
    ContactInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '20vw',
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px'
    },
    AddressInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '20vw',
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px'
    },
    DivStyle: {
      marginLeft: "2rem",
      marginRight: "2rem",
      marginTop: "1.5rem",
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px'
    },
    DivStyleRL: {
      marginLeft: "2rem",
      marginRight: "2rem",
      marginTop: "2rem",
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px'
    },
    DivStyleTL: {
      marginLeft: "2rem",
      marginTop: "1.5rem",
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px'
    },
    DivStylePrivacy: {
      marginLeft: "2rem",
      marginRight: "2rem",
      marginTop: "1.5rem",
      marginBottom: "1.5rem",
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px'
    },
    DivStyleS: {
      marginLeft: "2rem",
      marginRight: "1rem",
      marginTop: "1.5rem",
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px'
    },
    DivStyleZ: {
      marginLeft: "1rem",
      marginRight: "2rem",
      marginTop: "1.5rem",
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px'
    },
    CityInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px',
      width: '20vw'
    },
    StateInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px',
    },
    ZipInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px',
    },


    '@media (max-width: 671px)':{    
      
      informationForm: {
      display: 'Flex',
      backgroundColor: 'white',
      flexWrap: 'wrap',
      textAlign: 'left',
      margin: '0%',
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px'
    },
    submitButton: {
      display: 'flex',
      backgroundColor: 'purple',
      fontWeight: 'bold',
      width: '100%'
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
      width: '30vw',
    },
    NameBoxes: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '30vw',
      maxWidth: '30vw'
    },
    DOBSSN: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '30vw'
    },
    ContactInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '30vw'
    },
    AddressInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '30vw'
    },
    CityInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '15vw'
    },
    StateInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px',
      width: '15vw'
    },
    ZipInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px',
      width: '15vw'
    },

    },
    '@media (max-width: 415px)':{    
      
      informationForm: {
      display: 'Flex',
      backgroundColor: 'white',
      flexWrap: 'wrap',
      textAlign: 'left',
      margin: '0%',
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px'
    },
    submitButton: {
      display: 'flex',
      backgroundColor: 'purple',
      fontWeight: 'bold',
      width: '80vw'
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
      display: 'flex',
      width: '100%'
    },
    TextInputFields: {
      paddingLeft: '2rem',
      paddingRight: '2rem',
      width: '80vw',
    },
    NameBoxes: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '80vw',
      maxWidth: '80vw'
    },
    DOBSSN: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '80vw'
    },
    ContactInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '80vw'
    },
    AddressInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '80vw'
    },
    CityInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '80vw'
    },
    StateInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px',
      width: '36vw'
    },
    ZipInfo: {
      display: 'flex',
      flexWrap: 'wrap',
      fontFamily: 'Brown',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      letterSpacing: '0.32px',
      width: '36vw'
    },

    },
  });

  export {
      InformationFormTheme,
      AppTheme
  }