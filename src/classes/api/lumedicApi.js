import axios from 'axios';


const ValidatePatient = (patientData) =>{
  return axios.post('https://api-dev.lumedic.id/portal/v1/patient/validate', patientData);
}
export {
    ValidatePatient
    
}