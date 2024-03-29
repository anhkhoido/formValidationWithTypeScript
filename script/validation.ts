const firstName = document.getElementById('firstname') as HTMLInputElement;
const lastName = document.getElementById('lastname') as HTMLInputElement;
const emailAddress = document.getElementById('email') as HTMLInputElement;
const phoneNumber = document.getElementById('phonenumber') as HTMLInputElement;

const addressline1 = document.getElementById('addressline1') as HTMLInputElement;
const city = document.getElementById('city') as HTMLInputElement;
const province = document.getElementById('province') as HTMLInputElement;
const postalCode = document.getElementById('postalcode') as HTMLInputElement;

const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
const addEducationButton = document.getElementById('addEducationButtonId') as HTMLButtonElement;
const addProfessionalExperienceButton = document.getElementById('addProfessionalExperienceButtonId') as HTMLButtonElement;

class Province {
    constructor(public name : string, public abbreviation : string) {}
}

let provincesSelectTag = document.getElementById('provinceSelectId') as HTMLSelectElement;

const firstLastNameRegexp : RegExp = /[A-Za-z -'\xC9\xE9\xE8\xC8\xC0\xE0\xC7\xE7\xCA\xEA\xF9\xD9\u0110\u0111\xC1\xE1\xC3\xE3\u1EA2\u1EA3\u1EA0\u1EA1\xC2\xE2\u1EA4\u1EA5\u1EA6\u1EA7\u1EAA\u1EAB\u1EA8\u1EA9\u1EAC\u1EAD\u0102\u0103\u1EAE\u1EAF\u1EB0\u1EB1\u1EB4\u1EB5\u1EB2\u1EB3\u1EB6\u1EB7\xCB\xEB\u1EBC\u1EBA\u1EBB\u1EB8\u1EB9\u1EBE\u1EBF\u1EC0\u1EC1\u1EC4\u1EC5\u1EC2\u1EC3\u1EC6\u1EC7\xCD\xED\xCC\xEC\u0128\u0129\u1EC8\u1EC9\u1ECA\u1ECB\xD1\xF1\xD3\xF3\xD2\xF2\xD5\xF5\u1ECE\u1ECF\u1ECC\u1ECD\u1ED0\u1ED1\u1ED2\u1ED3\u1ED6\u1ED7\u1ED4\u1ED5\u1ED8\u1ED9\u01A0\u01A1\u1EDA\u1EDB\u1EDC\u1EDD\u1EE0\u1EE1\u1EDE\u1EDF\u1EE2\u1EE3\xDC\xFC\xDA\xFA\u0168\u0169\u1EE6\u1EE7\u1EE4\u1EE5\u01AF\u01B0\u1EE8\u1EE9\u1EEA\u1EEB\u1EEE\u1EEF\u1EEC\u1EED\u1EF0\u1EF1\xDD\xFD\u1EF2\u1EF3\u1EF8\u1EF9\u1EF6\u1EF7\u1EF4\u1EF5]{2,}/i;
const addressRegularExpression = new RegExp("");
const phoneNumberRegExp : RegExp = /[0-9]{10}|[0-9]{3}\-[0-9]{3}\-[0-9]{4}|\x28{1}[0-9]{3}\x29{1} {1}[0-9]{3}\-[0-9]{4}/i;
const postalCodeRegExp : RegExp = /[A-Za-z]{1}\d{1}[A-Za-z]{1} {1}\d{1}[A-Za-z]{1}\d{1}|[A-Za-z]{1}\d{1}[A-Za-z]{1}\d{1}[A-Za-z]{1}\d{1}/i;

submitButton.addEventListener("click", validateApplicationForm, true);
addEducationButton.addEventListener("click", addEducation, false);
addProfessionalExperienceButton.addEventListener("click", addProfessionalExperience, false);

populateProvinces();

function validateApplicationForm() : boolean {
    const firstNameValid : boolean = validateFirstOrLastName(firstName.value, firstName);
    const lastNameValid : boolean = validateFirstOrLastName(lastName.value, lastName);
    const postalCodeValid : boolean = validatePostalCode(postalCode.value);
    const phoneNumberValid : boolean = validatePhoneNumber(phoneNumber.value);

    const result =  firstNameValid &&
                    lastNameValid &&
                    postalCodeValid &&
                    phoneNumberValid;
    
    if (!result) {
        alert("Puta!");
    }
    return  result;
}

function populateProvinces() : void {
    var arrayOfProvinces : Province[] = [
        new Province("British Columbia", "BC"),
        new Province("Alberta", "AB"),
        new Province("Saskatchewan", "SK"),
        new Province("Manitoba", "MB"),
        new Province("Ontario", "ON"),
        new Province("Quebec", "QC"),
        new Province("New Brunswick", "NB"),
        new Province("Nova Scotia", "NS"),
        new Province("Prince Edward Island", "PEI"),
        new Province("Newfoundland and Labrador", "NL"),
        new Province("Yukon", "YK"),
        new Province("Nunavut", "NT"),
        new Province("Northwest Territories", "NWT")
    ];
    var emptyOptionForSelectTag = document.createElement('option') as HTMLOptionElement;
    emptyOptionForSelectTag.value = "";
    provincesSelectTag.appendChild(emptyOptionForSelectTag);

    arrayOfProvinces.forEach(province => {
        var childProvince = document.createElement('option') as HTMLOptionElement;
        childProvince.innerText = province.name;
        childProvince.value = province.abbreviation;
        provincesSelectTag.appendChild(childProvince);
    });
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

function addEducation() : void {
    const fieldsetEducation = document.getElementById('educationContainerId') as HTMLElement;
    var indexInListOfTrainings = document.querySelectorAll('.removeEducationButton').length as number;
    const childNodeDivBoxForEducation = createDivBoxForEducation();
    fieldsetEducation.appendChild(childNodeDivBoxForEducation);
    const removeButtonsEducationList = document.querySelectorAll('.removeEducationButton') as NodeListOf<HTMLButtonElement>;
    configureRemoveButtonForEducation(removeButtonsEducationList[indexInListOfTrainings], indexInListOfTrainings);

    function configureRemoveButtonForEducation(button : HTMLButtonElement, index : number) : void {
        button.addEventListener("click", function() {
            removeSpecificEducationAt(index);
        }, false);

        function removeSpecificEducationAt(index : number) : void {
            let parentContainerWithEducation = document.getElementById('educationContainerId') as HTMLDivElement;
            let educationSlatedForRemoval = parentContainerWithEducation.childNodes[index];
            educationSlatedForRemoval.parentNode?.removeChild(educationSlatedForRemoval);
        }
    }
}

function createDivBoxForEducation() : HTMLDivElement {
    let divBoxForEducation = document.createElement('div') as HTMLDivElement;
    divBoxForEducation.style.display = 'block';
    divBoxForEducation.style.width = '70%';
    divBoxForEducation.style.borderColor = '#000';
    divBoxForEducation.style.border = '5px solid #000';
    divBoxForEducation.style.borderRadius = '20px';
    divBoxForEducation.style.margin = '10px';
    divBoxForEducation.style.padding = '20px';
    
    let establishmentLegend = document.createElement('label') as HTMLLabelElement;
    establishmentLegend.innerText = 'Establishment';
    establishmentLegend.htmlFor = 'establishment';
    let establishmentInputField = document.createElement('input');
    establishmentInputField.type = 'text';
    let programLegend = document.createElement('label') as HTMLLabelElement;
    programLegend.innerText = 'Program';
    programLegend.htmlFor = 'program';
    let programInputField = document.createElement('input') as HTMLInputElement;
    programInputField.type = 'text';

    let graduationDateLabel = document.createElement('label') as HTMLLabelElement;
    graduationDateLabel.innerText = 'Graduation';
    graduationDateLabel.htmlFor = 'graduation';
    let graduationDatePicker = document.createElement('input') as HTMLInputElement;
    graduationDatePicker.type = 'datetime-local';

    divBoxForEducation.appendChild(establishmentLegend);
    divBoxForEducation.appendChild(establishmentInputField);
    divBoxForEducation.appendChild(document.createElement('br'));
    divBoxForEducation.appendChild(programLegend);
    divBoxForEducation.appendChild(programInputField);
    divBoxForEducation.appendChild(document.createElement('br'));
    divBoxForEducation.appendChild(graduationDateLabel);
    divBoxForEducation.appendChild(graduationDatePicker);
    
    let buttonContainer = document.createElement('div') as HTMLDivElement;
    let removeButton = document.createElement('button') as HTMLButtonElement;
    removeButton.type = 'button';
    removeButton.className = 'bi bi-trash removeEducationButton';
    buttonContainer.appendChild(removeButton);
    divBoxForEducation.appendChild(buttonContainer);

    return divBoxForEducation;
}

function addProfessionalExperience() : void {
    let professionalExpContainerDiv = document.getElementById('professionalExperienceContainerId') as HTMLDivElement;
    var futureIndexInListOfJobs = document.querySelectorAll('.removeJobButton').length;
    const professionalExpChildNode = createProfessionalExperienceDiv() as HTMLDivElement;
    professionalExpContainerDiv.appendChild(professionalExpChildNode);
    const removeJobButtonsList = document.querySelectorAll('.removeJobButton') as NodeListOf<HTMLButtonElement>;
    configureRemoveButton(removeJobButtonsList[futureIndexInListOfJobs], futureIndexInListOfJobs);

    function configureRemoveButton(button : HTMLButtonElement, index : number) : void {
        button.addEventListener("click", function() {
            removeSpecificJobAt(index);
        }, false);

        function removeSpecificJobAt(index : number) : void {
            let parentContainerWithJobs = document.getElementById('professionalExperienceContainerId') as HTMLDivElement;
            let jobSlatedForRemoval = parentContainerWithJobs.childNodes[index] as HTMLDivElement;
            jobSlatedForRemoval.parentNode?.removeChild(jobSlatedForRemoval);
        }
    }
}

function createProfessionalExperienceDiv() : HTMLDivElement {
    let divElementProfessionalExp = document.createElement('div');
    divElementProfessionalExp.style.display = 'block';
    divElementProfessionalExp.style.width = '70%';
    divElementProfessionalExp.style.borderColor = '#000';
    divElementProfessionalExp.style.border = '5px solid #000';
    divElementProfessionalExp.style.borderRadius = '20px';
    divElementProfessionalExp.style.margin = '10px';
    divElementProfessionalExp.style.padding = '20px';

    let employerLabel = document.createElement('label');
    employerLabel.innerText = 'Employer';

    let employerInputField = document.createElement('input');
    employerInputField.type = 'text';

    let positionLabel = document.createElement('label');
    positionLabel.innerText = 'Position';

    let positionInputField = document.createElement('input');
    positionInputField.type = 'text';

    let startDateLabel = document.createElement('label');
    startDateLabel.innerText = 'Start date';
    startDateLabel.htmlFor = 'start_date';
    let startDateDatePicker = document.createElement('input');
    startDateDatePicker.type = 'datetime-local';
    startDateDatePicker.name = 'start_date';

    let endDateLabel = document.createElement('label');
    endDateLabel.innerText = 'End date';
    endDateLabel.htmlFor = 'end_date';
    let endDateDatePicker = document.createElement('input');
    endDateDatePicker.type = 'datetime-local';
    endDateDatePicker.name = 'end_date';

    let fieldsAndInputsContainer = document.createElement('div');
    fieldsAndInputsContainer.appendChild(employerLabel);
    fieldsAndInputsContainer.appendChild(employerInputField);
    fieldsAndInputsContainer.appendChild(document.createElement('br'));
    fieldsAndInputsContainer.appendChild(positionLabel);
    fieldsAndInputsContainer.appendChild(positionInputField);
    fieldsAndInputsContainer.appendChild(document.createElement('br'));
    fieldsAndInputsContainer.appendChild(startDateLabel);
    fieldsAndInputsContainer.appendChild(startDateDatePicker);
    fieldsAndInputsContainer.appendChild(document.createElement('br'));
    fieldsAndInputsContainer.appendChild(endDateLabel);
    fieldsAndInputsContainer.appendChild(endDateDatePicker);

    divElementProfessionalExp.appendChild(fieldsAndInputsContainer);
   
    let removeButton = document.createElement('button') as HTMLButtonElement;
    removeButton.type = 'button';
    removeButton.className = 'bi bi-trash removeJobButton';

    let buttonContainer = document.createElement('div');
    buttonContainer.appendChild(removeButton);
    divElementProfessionalExp.appendChild(buttonContainer);
    return divElementProfessionalExp;
}