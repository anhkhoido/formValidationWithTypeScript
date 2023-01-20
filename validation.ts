const firstName = document.getElementById('firstname') as HTMLInputElement;
const lastName = document.getElementById('lastname') as HTMLInputElement;
const emailAddress = document.getElementById('email') as HTMLInputElement;
const phoneNumber = document.getElementById('phonenumber') as HTMLInputElement;

const addressline1 = document.getElementById('addressline1') as HTMLInputElement;
const city = document.getElementById('city') as HTMLInputElement;
const province = document.getElementById('province') as HTMLInputElement;
const postalCode = document.getElementById('postalcode') as HTMLInputElement;

const submitButton = document.getElementById('submitButton') as HTMLButtonElement;

const firstLastNameRegexp : RegExp = /[A-Za-z -'\xC9\xE9\xE8\xC8\xC0\xE0\xC7\xE7\xCA\xEA\xF9\xD9\u0110\u0111\xC1\xE1\xC3\xE3\u1EA2\u1EA3\u1EA0\u1EA1\xC2\xE2\u1EA4\u1EA5\u1EA6\u1EA7\u1EAA\u1EAB\u1EA8\u1EA9\u1EAC\u1EAD\u0102\u0103\u1EAE\u1EAF\u1EB0\u1EB1\u1EB4\u1EB5\u1EB2\u1EB3\u1EB6\u1EB7\xCB\xEB\u1EBC\u1EBA\u1EBB\u1EB8\u1EB9\u1EBE\u1EBF\u1EC0\u1EC1\u1EC4\u1EC5\u1EC2\u1EC3\u1EC6\u1EC7\xCD\xED\xCC\xEC\u0128\u0129\u1EC8\u1EC9\u1ECA\u1ECB\xD1\xF1\xD3\xF3\xD2\xF2\xD5\xF5\u1ECE\u1ECF\u1ECC\u1ECD\u1ED0\u1ED1\u1ED2\u1ED3\u1ED6\u1ED7\u1ED4\u1ED5\u1ED8\u1ED9\u01A0\u01A1\u1EDA\u1EDB\u1EDC\u1EDD\u1EE0\u1EE1\u1EDE\u1EDF\u1EE2\u1EE3\xDC\xFC\xDA\xFA\u0168\u0169\u1EE6\u1EE7\u1EE4\u1EE5\u01AF\u01B0\u1EE8\u1EE9\u1EEA\u1EEB\u1EEE\u1EEF\u1EEC\u1EED\u1EF0\u1EF1\xDD\xFD\u1EF2\u1EF3\u1EF8\u1EF9\u1EF6\u1EF7\u1EF4\u1EF5]{2,}/i;
const addressRegularExpression = new RegExp("");
const phoneNumberRegExp : RegExp = /[0-9]{10}|[0-9]{3}\-[0-9]{3}\-[0-9]{4}|\x28{1}[0-9]{3}\x29{1} {1}[0-9]{3}\-[0-9]{4}/i;
const postalCodeRegExp : RegExp = /[A-Za-z]{1}\d{1}[A-Za-z]{1} {1}\d{1}[A-Za-z]{1}\d{1}|[A-Za-z]{1}\d{1}[A-Za-z]{1}\d{1}[A-Za-z]{1}\d{1}/i;

submitButton.addEventListener("click", validateApplicationForm, false);

function validateApplicationForm() : boolean {
    const firstNameValid : boolean = validateFirstOrLastName(firstName.value, firstName);
    const lastNameValid : boolean = validateFirstOrLastName(lastName.value, lastName);
    const postalCodeValid : boolean = validatePostalCode(postalCode.value);
    const phoneNumberValid : boolean = validatePhoneNumber(phoneNumber.value);

    const result =  firstNameValid &&
                    lastNameValid &&
                    postalCodeValid &&
                    phoneNumberValid;
    if (result) {
        alert('Thank you for applying!');
    } else {
        alert('Please review invalid fields.');
    }
    return  result;
}

function validateFirstOrLastName(name : string, field : HTMLInputElement) : boolean {
    if (firstLastNameRegexp.test(name)) {
        field.style.backgroundColor = "";
        return true;
    }
    field.style.backgroundColor = "#cc6666";
    return false;
}

function validatePhoneNumber(phone_number : string) : boolean {
    if (phoneNumberRegExp.test(phone_number)) {
        phoneNumber.style.backgroundColor = "";
        return true;
    }
    phoneNumber.style.backgroundColor = "#cc6666";
    return false;
}

function validateAddress(line : string) : boolean {
    if (line.length === 0) {
        return false;
    } else if(addressRegularExpression.test(line)) {
        return true;
    }
    return false;
}

function validatePostalCode(postal_code : string) : boolean {
    if (postalCodeRegExp.test(postal_code)) {
        postalCode.style.backgroundColor = "";
        return true;
    }
    postalCode.style.backgroundColor = "#cc6666";
    return false;
}
