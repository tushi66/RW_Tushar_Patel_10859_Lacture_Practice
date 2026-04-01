// Form Validation 

function formvalidation() {


    let Nameerror = document.getElementById("firstnamerror");
    let lastnameerror = document.getElementById("lastnameerror");
    let Positionerror = document.getElementById("Positionerror");
    let Companyerror = document.getElementById("Companyerror");
    let Businesserror = document.getElementById("Businesserror");
    let Employeeserror = document.getElementById("Employeeserror");
    let Streeterror = document.getElementById("Streeterror");
    // let Additionalerror = document.getElementById("Additionalerror");
    let Ziperror = document.getElementById("Ziperror");
    let Placeerror = document.getElementById("Placeerror");
    let Countryerror = document.getElementById("Countryerror");
    let Codeerror = document.getElementById("Codeerror");
    let Phoneerror = document.getElementById("Phoneerror");
    let emailerror = document.getElementById("emailerror");
    let checkboxerror = document.getElementById("checkboxerror");





    let Name = document.getElementById("firstname").value.trim();
    let Lastname = document.getElementById("Lastname").value.trim();
    let Position = document.getElementById("Position").value.trim();
    let Company = document.getElementById("Company").value.trim();
    let Business = document.getElementById("Business").value.trim();
    let Employees = document.getElementById("Employees").value.trim();
    let Street = document.getElementById("Street").value.trim();
    // let Additional = document.getElementById("Additional").value.trim();
    let zipcode = document.getElementById("zipcode").value.trim();
    let Place = document.getElementById("Place").value.trim();
    let Country = document.getElementById("Country").value.trim();
    let code = document.getElementById("code").value.trim();
    let Phone = document.getElementById("Phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let checkbox = document.getElementById("checkbox").checked();


    let isValid = true;

    if (Name === "") {
        Nameerror.innerHTML = "Please enter your first name";
        isValid = false;
    }

    if (Lastname === "") {
        lastnameerror.innerHTML = "Please enter your last name";
        isValid = false;
    }

    if (Position === "") {
        Positionerror.innerHTML = "Please enter your position";
        isValid = false;
    }

    if (Company === "") {
        Companyerror.innerHTML = "Please enter company name";
        isValid = false;
    }

    if (Business === "") {
        Businesserror.innerHTML = "Please enter business type";
        isValid = false;
    }

    if (Employees === "") {
        Employeeserror.innerHTML = "Please enter name of employees";
        isValid = false;
    }

    if (Street === "") {
        Streeterror.innerHTML = "Please enter street address";
        isValid = false;
    }

    if (zipcode === "") {
        Ziperror.innerHTML = "Please enter zip code";
        isValid = false;
    }

    if (Place === "") {
        Placeerror.innerHTML = "Please enter city";
        isValid = false;
    }

    if (Country === "") {
        Countryerror.innerHTML = "Please enter country";
        isValid = false;
    }

    if (code === "") {
        Codeerror.innerHTML = "Please enter country code";
        isValid = false;
    }

    if (Phone === "") {
        Phoneerror.innerHTML = "Please enter phone number";
        isValid = false;

    } else if (!/^[0-9]{10}$/.test(Phone)) {
        Phoneerror.innerHTML = "Enter valid 10-digit phone";
        isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        emailerror.innerHTML = "Please enter email";
        isValid = false;

    } else if (!email.match(emailPattern)) {
        emailerror.innerHTML = "Enter valid email";
        isValid = false;
    }

    if (!checkbox) {

        checkboxerror.innerHTML = "You must agree to terms";
        isValid = false;
    }

    return isValid;
}