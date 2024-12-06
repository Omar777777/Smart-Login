var email = document.getElementById('regestrationEmail');

var username = document.getElementById('regestrationName');

var password = document.getElementById('regestrationPassword');

var regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

var regexUserName = /^[a-zA-Z0-9_-]{3,15}$/;

var regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

var signupbtn = document.getElementById('signup');

var allinputsvalidation = document.getElementById('Allinputsrequired');

var nameValidaiton = document.getElementById('nameValidaiton');

var emailValidation = document.getElementById('emailValidation');

var passwordValidation = document.getElementById('passwordValidation');

var sucesssignup = document.getElementById('sucesssignup');



//function too check if all inputs is empty or not


function emptyinputs(){
    if (email.value == '' && username.value == '' && password.value == '') {
        return true;
    }
    else {
        return false;
    }
}

//Styling Of signUp button

signupbtn.addEventListener('mousemove', function () {
    signupbtn.style.backgroundColor = 'rgb(23, 162, 184)';
    signupbtn.style.color = 'white';
})




signupbtn.addEventListener('mouseleave', function () {
    signupbtn.style.backgroundColor = 'transparent';
    signupbtn.style.color = 'rgb(23, 162, 184)';
    signupbtn.style.borderColor = 'rgb(23, 162, 184)';
})



//Event Listner On Entering Inputs To Check If it Correct Or Wrong

var inputs = document.getElementsByTagName('input');

inputs[0].addEventListener('input', function () {
   
    if (regexUserName.test(inputs[0].value) == false) {

        nameValidaiton.classList.replace('d-none','d-block');
        
    } else {

        nameValidaiton.classList.replace('d-block','d-none');
    }
})



inputs[1].addEventListener('input', function () {
    if (regexEmail.test(inputs[1].value) == false) {
        

        emailValidation.classList.replace('d-none', 'd-block');
        
    } else {
        emailValidation.classList.replace('d-block', 'd-none');
    }
})

inputs[2].addEventListener('input', function () {
    if (regexPassword.test(inputs[2].value) == false) {

        passwordValidation.classList.replace('d-none', 'd-block');
        
    } else {
        passwordValidation.classList.replace('d-block', 'd-none');
    }
})


//clicking on SignUp button
var usersinfoarray = [];
 

signupbtn.addEventListener('click', function (e) {
    if (emptyinputs() == true) {
        e.preventDefault();
        allinputsvalidation.classList.replace('d-none', 'd-block');
    }

       if (regexEmail.test(inputs[1].value) == true && regexUserName.test(inputs[0].value) == true && regexPassword.test(inputs[2].value) == true) {
           e.preventDefault();
           saveuserdetailes();
           location.href = 'index.html';
    
    }
})

//add user to local storage

function saveuserdetailes() {

    var users = {
        nameinfo: username.value,
        emailinfo: email.value,
        passwordinfo: password.value
        
    };
    var emailexistedflage = false;

    //check if email  exist

 if (JSON.parse(localStorage.getItem('usersdetailes')) !== null) {
     usersinfoarray = JSON.parse(localStorage.getItem('usersdetailes'));
    for (var i = 0; i < usersinfoarray.length; i++) {
        if (usersinfoarray[i].emailinfo == email.value) {
           emailexistedflage = true
        }
    }

} 
    if (emailexistedflage == false) {

    usersinfoarray.push(users);
    localStorage.setItem('usersdetailes', JSON.stringify(usersinfoarray));
    while(usersinfoarray.length > 0) {
    usersinfoarray.pop();
    }
    usersinfoarray.length = 0;  
    resetinputs();
    allinputsvalidation.classList.replace('d-block', 'd-none');    
        sucesssignup.classList.replace('d-none', 'd-block');  
        
       
     
      
    } else {
        window.alert("Email Is Already Existed");
        sucesssignup.classList.replace('d-none', 'd-block'); 
        while(usersinfoarray.length > 0) {
    usersinfoarray.pop();
    }
  }
    
   
}

function resetinputs() {
    username.value = '';
    email.value = '';
    password.value = '';
}






