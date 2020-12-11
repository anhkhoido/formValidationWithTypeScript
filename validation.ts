const firstName = document.getElementById('firstname') as HTMLInputElement;
const lastName = document.getElementById('lastname') as HTMLInputElement;
const emailAddress = document.getElementById('email') as HTMLInputElement;
const phoneNumber = document.getElementById('phonenumber') as HTMLInputElement;

const addressline1 = document.getElementById('addressline1') as HTMLInputElement;
const city = document.getElementById('city') as HTMLInputElement;
const province = document.getElementById('province') as HTMLInputElement;
const postalCode = document.getElementById('postalcode') as HTMLInputElement;

const submitButton = document.getElementById('submitButton');

const addressRegularExpression = new RegExp("");
const phoneNumberRegExp = new RegExp("");
const emailRegularExpression = new RegExp("");

submitButton.addEventListener("click", function() : boolean {
    return validateFirstOrLastName(firstName.value.trim()) && validateFirstOrLastName(lastName.value.trim()) && validateAddress(addressline1.value.trim()) && validatePostalCode(postalCode.value.trim());
});

function validateFirstOrLastName(name : string) : boolean {
    return name.length !== 0;
}

function validateAddress(line : string) : boolean {
    if (line.length === 0) {
        return false;
    } else if(addressRegularExpression.test(line)) {
        return true;
    }
    return false;
}

function validatePostalCode(postalCode : string) : boolean {
    return postalCode.length !== 0;
}

function validateEmailAddress(email : string) : boolean {
    return email.length !== 0;
}