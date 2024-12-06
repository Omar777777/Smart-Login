var logout = document.getElementById('logout');
var welcomeBox = document.getElementById('welcomeBox');


logout.addEventListener('mousemove', function () {
    logout.style.backgroundColor = '#ffc107';
    logout.style.color = 'white';
    logout.style.boxShadow = '0 0 0 .25rem rgb(220 167 17 / 25%)';
});




logout.addEventListener('mouseleave', function () {
    logout.style.backgroundColor = 'transparent';
    logout.style.color = 'rgba(255, 255, 255, .5)';
    logout.style.borderColor = '#ffc107';
    logout.style.boxShadow = 'none';
});

var username = ''; 

if (JSON.parse(localStorage.getItem('usernameperlogin')) !== null) {
    username =JSON.parse(localStorage.getItem('usernameperlogin'));
    welcomeBox.innerText = 'Welcome ' + username;
} else {
     welcomeBox.innerText = 'Welcome ' + 'null';
}


logout.addEventListener('click', function () {
   
    localStorage.removeItem('usernameperlogin');

    location.replace('index.html');

});

