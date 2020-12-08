const firstName = document.getElementById('firstname') as HTMLInputElement;
const lastName = document.getElementById('lastname') as HTMLInputElement;
const addressline1 = document.getElementById('addressline1') as HTMLInputElement;

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener("click", function() {
    validateFirstOrLastName(firstName.value);
    validateFirstOrLastName(lastName.value);
    validateAddress(addressline1.value);
});

function validateFirstOrLastName(name : string) : boolean {
    return false;
}

function validateAddress(line : string) : boolean {
    return false;
}