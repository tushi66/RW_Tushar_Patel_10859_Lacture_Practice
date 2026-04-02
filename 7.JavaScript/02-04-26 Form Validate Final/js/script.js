// Form Validation 

function formvalidation(e) {

    e.preventDefault();

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



    Nameerror.innerText = "";
    lastnameerror.innerText = "";
    Positionerror.innerText = "";
    Companyerror.innerText = "";
    Businesserror.innerText = "";
    Employeeserror.innerText = "";
    Streeterror.innerText = "";
    Ziperror.innerText = "";
    Placeerror.innerText = "";
    Countryerror.innerText = "";
    Codeerror.innerText = "";
    Phoneerror.innerText = "";
    emailerror.innerText = "";
    checkboxerror.innerText = "";


    let Name = document.getElementById("firstname").value.trim();
    let Lastname = document.getElementById("Lastname").value.trim();
    let Position = document.getElementById("Position").value.trim();
    let Company = document.getElementById("Company").value.trim();
    let Business = document.getElementById("Business").value.trim();
    let Employees = document.getElementById("Employees").value.trim();
    let Street = document.getElementById("Street").value.trim();
    let Additional = document.getElementById("Additional").value.trim();
    let zipcode = document.getElementById("zipcode").value.trim();
    let Place = document.getElementById("Place").value.trim();
    let Country = document.getElementById("Country").value.trim();
    let code = document.getElementById("code").value.trim();
    let Phone = document.getElementById("Phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let checkbox = document.getElementById("terms").checked;


    let isValid = true;

    if (Name === "") {
        Nameerror.innerText = "Please enter your first name";
        isValid = false;
    }

    if (Lastname === "") {
        lastnameerror.innerText = "Please enter your last name";
        isValid = false;
    }

    if (Position === "Position") {
        Positionerror.innerText = "Please Select your position";
        isValid = false;
    }

    if (Company === "") {
        Companyerror.innerText = "Please enter company name";
        isValid = false;
    }

    if (Business === "") {
        Businesserror.innerText = "Please enter your business type";
        isValid = false;
    }

    if (Employees === "Employees") {
        Employeeserror.innerText = "Please Select name of employees";
        isValid = false;
    }

    if (Street === "") {
        Streeterror.innerText = "Please enter street address";
        isValid = false;
    }

    if (zipcode === "") {
        Ziperror.innerText = "Please enter zip code";
        isValid = false;
    }

    if (Place === "Place") {
        Placeerror.innerText = "Please enter city";
        isValid = false;
    }

    if (Country === "Country") {
        Countryerror.innerText = "Please slect your country";
        isValid = false;
    }

    if (code === "") {
        Codeerror.innerText = "Please enter country code";
        isValid = false;
    }

    if (Phone === "") {
        Phoneerror.innerText = "Please enter phone number";
        isValid = false;

    } else if (!/^[0-9]{10}$/.test(Phone)) {
        Phoneerror.innerText = "Enter valid 10-digit phone";
        isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        emailerror.innerText = "Please enter email";
        isValid = false;

    } else if (!email.match(emailPattern)) {
        emailerror.innerText = "Enter valid email";
        isValid = false;
    }

    if (!checkbox) {

        checkboxerror.innerText = "You must agree to terms";
        isValid = false;
    }



    if (isValid) {

        const formData = {
            firstName: Name,
            lastName: Lastname,
            position: Position,
            company: Company,
            business: Business,
            employees: Employees,
            street: Street,
            additional: Additional,
            zipcode: zipcode,
            place: Place,
            country: Country,
            code: code,
            phone: Phone,
            email: email
        };
        console.log(formData);
        alert("Form submitted successfully!");
    }

}