// Validations

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPassWord = document.getElementById("password");
const inputConfirmPassWord = document.getElementById("confirm-password");
const btnSubmit = document.querySelector('button[type=submit]');

const validateName = () => {

    const inputNameValue = inputName.value.trim().toUpperCase();
    const spanName = document.getElementById("textValidateName");
    
    if(inputNameValue === ""){

        inputName.classList.remove("border-success");
        inputName.classList.add("border-danger");
        inputName.classList.add("mb-3");
        
        spanName.classList.remove("text-success");
        spanName.classList.add("text-danger");

        spanName.innerText = "Nome inválido!";

        return false;

    }else if(inputNameValue.match(/[!"#$%&'()*+,-./:;<=>?@[\\\]\^_`{|}~]/g) !== null){

        inputName.classList.remove("border-success");
        inputName.classList.add("border-danger");
        inputName.classList.add("mb-3");
        
        spanName.classList.remove("text-success");
        spanName.classList.add("text-danger");

        spanName.innerText = "Nome inválido!";

        return false;

    }else{

        inputName.classList.add("border-success");
        inputName.classList.remove("border-danger");
        inputName.classList.remove("mb-3");

        spanName.classList.remove("text-danger");
        
        spanName.innerText = "";

        return true;

    }

}

const validateEmail = () => {

    const inputEmailValue = inputEmail.value.trim().toUpperCase();
    const spanEmail = document.getElementById("textValidateEmail");

    if(inputEmailValue === ""){

        inputEmail.classList.remove("border-success");
        inputEmail.classList.add("border-danger");
        inputEmail.classList.add("mb-3");

        spanEmail.classList.remove("text-success");
        spanEmail.classList.add("text-danger");

        spanEmail.innerText = "E-mail inválido!";

        return false;

    }else if(inputEmailValue.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g) === null){

        inputEmail.classList.remove("border-success");
        inputEmail.classList.add("border-danger");
        inputEmail.classList.add("mb-3");

        spanEmail.classList.remove("text-success");
        spanEmail.classList.add("text-danger");

        spanEmail.innerText = "E-mail inválido!";

        return false;

    }else{

        inputEmail.classList.add("border-success");
        inputEmail.classList.remove("border-danger");
        inputEmail.classList.remove("mb-3");

        spanEmail.classList.remove("text-danger");

        spanEmail.innerText = "";

        return true;

    }

}

const validatePassWord = () => {

    const inputPassWordValue = inputPassWord.value.trim().toUpperCase();
    const spanPassWord = document.getElementById("textValidatePassWord");

    if(inputPassWordValue === ""){

        inputPassWord.classList.remove("border-success");
        inputPassWord.classList.add("border-danger");
        inputPassWord.classList.add("mb-3");

        spanPassWord.classList.remove("text-success");
        spanPassWord.classList.add("text-danger");

        spanPassWord.innerText = "Senha inválida!";

        return false;

    }else if(inputPassWordValue.length < 6){

        inputPassWord.classList.remove("border-success");
        inputPassWord.classList.add("border-danger");
        inputPassWord.classList.add("mb-3");

        spanPassWord.classList.remove("text-success");
        spanPassWord.classList.add("text-danger");

        spanPassWord.innerText = "Senha muito curta";

        return false;

    }else{

        inputPassWord.classList.add("border-success");
        inputPassWord.classList.remove("border-danger");
        inputPassWord.classList.remove("mb-3");

        spanPassWord.classList.remove("text-danger");

        spanPassWord.innerText = "";

        return true;

    }

}

const validateConfirmPassWord = () => {

    const inputConfirmPassWordValue = inputConfirmPassWord.value.trim().toUpperCase();
    const inputPassWordValue = inputPassWord.value.trim().toUpperCase();
    const spanConfirmPassWord = document.getElementById("textValidateConfirmPassWord");

    if(inputConfirmPassWordValue === ""){

        inputConfirmPassWord.classList.remove("border-success");
        inputConfirmPassWord.classList.add("border-danger");
        inputConfirmPassWord.classList.add("mb-3");

        spanConfirmPassWord.classList.remove("text-success");
        spanConfirmPassWord.classList.add("text-danger");

        spanConfirmPassWord.innerText = "Por favor, digite senhas iguais!";

        return false;

    }else if(inputConfirmPassWordValue !== inputPassWordValue){

        inputConfirmPassWord.classList.remove("border-success");
        inputConfirmPassWord.classList.add("border-danger");
        inputConfirmPassWord.classList.add("mb-3");

        spanConfirmPassWord.classList.remove("text-success");
        spanConfirmPassWord.classList.add("text-danger");

        spanConfirmPassWord.innerText = "Por favor, digite senhas iguais!";

        return false;

    }else{

        inputConfirmPassWord.classList.add("border-success");
        inputConfirmPassWord.classList.remove("border-danger");
        inputConfirmPassWord.classList.remove("mb-3");

        spanConfirmPassWord.classList.remove("text-danger");

        spanConfirmPassWord.innerText = "";

        return true;
        
    }

}

const validate = () => {

    if(!validateName() || !validateEmail() || !validatePassWord() || !validateConfirmPassWord()){

        btnSubmit.classList.add("d-none");

    }else if(validateName() && validateEmail() && validatePassWord() && validateConfirmPassWord()){

        btnSubmit.classList.remove("d-none");

    }

}

inputName.addEventListener("focus", validateName);
inputName.addEventListener("keyup", validateName);
inputName.addEventListener("keyup", validate);
inputName.addEventListener("change", validateName);

inputEmail.addEventListener("focus", validateEmail);
inputEmail.addEventListener("keyup", validateEmail);
inputEmail.addEventListener("keyup", validate);
inputEmail.addEventListener("change", validateEmail);

inputPassWord.addEventListener("focus", validatePassWord);
inputPassWord.addEventListener("keyup", validatePassWord);
inputPassWord.addEventListener("keyup", validate);
inputPassWord.addEventListener("change", validatePassWord);

inputConfirmPassWord.addEventListener("focus", validateConfirmPassWord);
inputConfirmPassWord.addEventListener("keyup", validateConfirmPassWord);
inputConfirmPassWord.addEventListener("keyup", validate);
inputConfirmPassWord.addEventListener("change", validateConfirmPassWord);