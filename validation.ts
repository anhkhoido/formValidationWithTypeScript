const firstName = document.getElementById('firstname') as HTMLInputElement;
const lastName = document.getElementById('lastname') as HTMLInputElement;
const emailAddress = document.getElementById('email') as HTMLInputElement;

const addressline1 = document.getElementById('addressline1') as HTMLInputElement;
const postalCode = document.getElementById('postalcode') as HTMLInputElement;

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener("click", function() : boolean {
    return validateFirstOrLastName(firstName.value) && validateFirstOrLastName(lastName.value) && validateAddress(addressline1.value) && validatePostalCode(postalCode.value);
});

function validateFirstOrLastName(name : string) : boolean {
    return false;
}

function validateAddress(line : string) : boolean {
    return false;
}

function validatePostalCode(postalCode : string) : boolean {
    return false;
}

function validateEmailAddress(email : string) : boolean {
    return false;
}