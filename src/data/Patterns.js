const emailPattern = new RegExp("\\S+@\\S+\\.\\S+");
const namePattern = new RegExp("^[a-zA-Z]*$");
const ssnPattern = new RegExp("^[0-9\\b]{4}$");
const phoneNumberPattern = new RegExp("^[0-9\\(\\)\\-\\b]{10}$");
const addressPattern = new RegExp("^[a-zA-z0-9]\\s*$");
const zipPattern = new RegExp("^[0-9\\b]{5}$");
const numberPattern = new RegExp("^[0-9]*$");


export{
    emailPattern,
    namePattern,
    phoneNumberPattern,
    addressPattern,
    ssnPattern,
    zipPattern,
    numberPattern
}