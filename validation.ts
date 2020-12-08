const firstName = document.getElementById('firstname') as HTMLInputElement;
const lastName = document.getElementById('lastname') as HTMLInputElement;

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener("click", function() {
    validateFirstOrLastName(firstName.value);
    validateFirstOrLastName(lastName.value);
});

function validateFirstOrLastName(name : string) : boolean {
    return false;
}