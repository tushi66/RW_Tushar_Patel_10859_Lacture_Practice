function validateform(){
    let nameerror = document.getElementById("nameerror");
    let emailerror = document.getElementById("emailerror");
    let ageerror = document.getElementById("ageerror");

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();


    if(name == ""){

        nameerror.innerText = "Please Enter your name";

        isValid = false;
    }

    const emailPatter = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if(email == ""){
        emailerror.innerText = "Please Enter your email id";
        isValid = false;

    } else if(!email.match(emailPatter)){
        emailerror.innerText = "Please Enter valid Email id";

        isValid=false;
    }

    let ageNumber = parseInt(age);

    if(age == ""){
        ageerror.innerText = "Please Enter your age";

        isValid =false;
    }else if (ageNumber == 0 || ageNumber > 120 || isNaN(ageNumber)){
        ageerror.innerText = "Enter the valid Age"
        isValid = false;
    }

    console.log({name:name, email: email, age:age});

    return isValid;
}
