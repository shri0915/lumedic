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

  export {
      InformationFormTheme,
      AppTheme
  }