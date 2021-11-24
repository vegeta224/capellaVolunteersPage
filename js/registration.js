function submitForm(event) {
    event.preventDefault();
    const userRegex = /^[a-zA-Z0-9]*$/;
    const passwordRegex = /^.{8,}$/;
    const nameRegex = /^[a-zA-Z]*$/;
    const emailRegex = /^[^\s@]{3,}@[^\s@]{3,}\.[^\s@]{3,}/
    const phoneRegex = /^\([0-9]{3}\) [0-9]{3}\-[0-9]{4}/;
    const arr = [];


    if (document.getElementById('userName').value == "") {
        document.getElementById('userNameError').innerHTML = "Username is required."
        document.getElementById('userNameError').style["display"] = "initial";
        arr.push('userName')
    } else if (userRegex.test(document.getElementById('userName').value) == false) {
        document.getElementById('userNameError').style["display"] = "initial";
        arr.push('userName')
    } else if (userRegex.test(document.getElementById('userName').value) == true) {
        document.getElementById('userNameError').style["display"] = "none";
    }

    if (document.getElementById('firstPassword').value == "") {
        document.getElementById('firstPasswordError').innerHTML = "Password is required.";
        document.getElementById('firstPasswordError').style["display"] = "initial";
        arr.push('firstPassword')
    } else if (passwordRegex.test(document.getElementById('firstPassword').value) == false) {
        document.getElementById('firstPasswordError').style["display"] = "initial";
        arr.push('firstPassword')
    } else if (passwordRegex.test(document.getElementById('firstPassword').value) == true) {
        document.getElementById('firstPasswordError').style["display"] = "none";
    }

    if (document.getElementById('secondPassword').value == "") {
        document.getElementById('secondPasswordError').innerHTML = "Password verification is required."
        document.getElementById('secondPasswordError').style["display"] = "initial";
        arr.push('secondPassword')
    } else if (document.getElementById('secondPassword').value !== document.getElementById('firstPassword').value) {
        document.getElementById('secondPasswordError').style["display"] = "initial";   
        arr.push('secondPassword')     
    } else if (document.getElementById('secondPassword').value == document.getElementById('firstPassword').value) {
        document.getElementById('secondPasswordError').style["display"] = "none";
    }

    if (document.getElementById('firstName').value == "") {
        document.getElementById('firstNameError').innerHTML = "First name is required.";
        document.getElementById('firstNameError').style["display"] = "initial";
        arr.push('firstName')
    } else if (nameRegex.test(document.getElementById('firstName').value) == false) {
        document.getElementById('firstNameError').style["display"] = "initial";
        arr.push('firstName')
    } else if (nameRegex.test(document.getElementById('firstName').value) == true) {
        document.getElementById('firstNameError').style["display"] = "none";
    }

    if (document.getElementById('lastName').value == "") {
        document.getElementById('lastNameError').innerHTML = "Last name is required.";
        document.getElementById('lastNameError').style["display"] = "initial";
        arr.push('lastName')
    } else if (nameRegex.test(document.getElementById('lastName').value) == false) {
        document.getElementById('lastNameError').style["display"] = "initial";
        arr.push('lastName')
    } else if (nameRegex.test(document.getElementById('lastName').value) == true) {
        document.getElementById('lastNameError').style["display"] = "none";
    }


    // if (document.getElementById('email').value == "")
    if (emailRegex.test(document.getElementById('email').value) == false && document.getElementById('email').value !== "") {
        document.getElementById('emailError').style["display"] = "initial";
        arr.push('email')
    } else if (emailRegex.test(document.getElementById('email').value) == true) {
        document.getElementById('emailError').style["display"] = "none";
    }

    if (phoneRegex.test(document.getElementById('phoneNumber').value) == false && document.getElementById('phoneNumber').value !== "") {
        document.getElementById('phoneNumberError').style["display"] = "initial";
        arr.push('phoneNumber')
    } else if (phoneRegex.test(document.getElementById('phoneNumber').value) == true) {
        document.getElementById('phoneNumberError').style["display"] = "none";
    }

   
    console.log(arr)
    if (arr.length >= 1) {
        document.getElementById(arr[0]).focus();
    } else {
        window.open('confirm.html', '_self', false)
    }
}