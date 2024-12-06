var loginbtn = document.getElementById('loginbtn');

var loginemail = document.getElementById('loginemail');

var loginpassword = document.getElementById('loginpassword');

var incorrectLogin = document.getElementById('incorrectLogin');

var NoExistingEmail = document.getElementById('NoExistingEmail');


//Styling Of Login button

loginbtn.addEventListener('mousemove', function () {
    loginbtn.style.backgroundColor = 'rgb(23, 162, 184)';
    loginbtn.style.color = 'white';
});




loginbtn.addEventListener('mouseleave', function () {
    loginbtn.style.backgroundColor = 'transparent';
    loginbtn.style.color = 'rgb(23, 162, 184)';
    loginbtn.style.borderColor = 'rgb(23, 162, 184)';
});


//clicking on SignUp button
var usersinfoarray = [];


loginbtn.addEventListener('click', function (e) {

    

    //get what in local storage and compare it with inputs

    if (JSON.parse(localStorage.getItem('usersdetailes')) !== null) {
        usersinfoarray = JSON.parse(localStorage.getItem('usersdetailes'));
        for (var i = 0; i < usersinfoarray.length; i++) {
            if (usersinfoarray[i].emailinfo == loginemail.value && usersinfoarray[i].passwordinfo == loginpassword.value) {


                localStorage.setItem('usernameperlogin', JSON.stringify(usersinfoarray[i].nameinfo));
                incorrectLogin.classList.replace('d-block', 'd-none');
                NoExistingEmail.classList.replace('d-block', 'd-none'); 
                
                location.href = 'welcomePage.html';

            } else {
                incorrectLogin.classList.replace('d-none', 'd-block');
                NoExistingEmail.classList.replace('d-block', 'd-none');  
            }
    }

    } else {
        NoExistingEmail.classList.replace('d-none', 'd-block'); 
        incorrectLogin.classList.replace('d-block', 'd-none');

} 

    e.preventDefault();
    
    
    
})


