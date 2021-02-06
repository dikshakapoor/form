import {formElement,name, married,dateOfJoining,email,phoneNumber,createPassword,confirmPassword} from "./view";

const formData = new FormData(formElement);

formElement.addEventListener('submit', () => { 
    validate(formData)
})

const validate = (formData)=>{
    debugger;
    const createPassword = formData.get("createPassword");
    const confirmedPassword = formData.get("confirmPassword");
    if (createPassword!== confirmedPassword) {alert("password dont match")
    return false}

}