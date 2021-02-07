import {formElement,userNameElement,marriedElement,DOJElement,emailElement,phoneNumberElement,createPasswordElement,confirmPasswordElement} from "./view";
import FormClass from "./modal";

const formObject = new FormClass();
debugger;
userNameElement.value = formObject.formData.userName;
marriedElement.value = formObject.formData.married.checked;
debugger;
DOJElement.value = formObject.formData.DOJ;
emailElement.value =formObject.formData.email;
phoneNumberElement.value = formObject.formData.phoneNumber;
createPasswordElement.value = formObject.formData.createPassword;
confirmPasswordElement.value =formObject.formData.confirmPassword;

formElement.addEventListener('submit', (e) => { 
    e.preventDefault();
    debugger;
    const formData = new FormData(formElement);
    formObject.getFormData(formData)
    formObject.callApi()
    validate(formData)
})

const validate = (formData)=>{
    const createPassword = formData.get("createPassword");
    const confirmedPassword = formData.get("confirmPassword");
    if (createPassword!== confirmedPassword) {alert("password don't match")
    return false}
    formObject.getFormData(formData)
}