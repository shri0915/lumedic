import axios from 'axios';

export default {
    postData: (values) =>
    {
    console.log(values);
    axios.post('https://api-dev.lumedic.id/portal/v1/patient/validate', values).then(res => {
        console.log(res);
        console.log(res.data);
      })
}}