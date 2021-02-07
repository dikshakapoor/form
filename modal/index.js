class FormClass {
    constructor() {
       const retrievedData =  this._retrieve();
    
       if (retrievedData) {
        const {formData} = retrievedData;
        this.formData  = formData}
       else {
       this.formData = {
        userName: "",
        married: true,
        DOJ: "",
        email: "",
        confirmPassword:"",
        createPassword: "",
        phoneNumber: ""
       }
    }
    this._storage = this._storage.bind(this)
    }

    getFormData(formData){
        debugger;
        this.formData.userName = formData.get("userName")
        this.formData.married =  formData.get("married")
        this.formData.DOJ = formData.get("DOJ") 
        this.formData.email = formData.get("email") 
        this.formData.confirmPassword = formData.get("confirmPassword")
        this.formData.createPassword = formData.get("createPassword")
        this.formData.phoneNumber = formData.get("phoneNumber") 
        debugger
        this._storage()
    //api call
    }

    _storage(){
        localStorage.setItem('localState', JSON.stringify(this))
    }

    _retrieve(){
       return  JSON.parse(localStorage.getItem('localState'))
    }

    callApi(formData){
        debugger;
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formData,
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }


}

export default FormClass;