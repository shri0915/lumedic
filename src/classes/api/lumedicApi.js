import axios from 'axios';


const ValidatePatient = (patientData) =>{
  axios.post('https://api-dev.lumedic.id/portal/v1/patient/validate', patientData).then(res => {
        console.log(res);
        console.log(res.data);
      })
}
export {
    ValidatePatient
    
}