document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    // alert('Login button clicked');

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email.includes('@') && email.includes('.') && password.length >= 6){

        window.location.href = './main.html';
    }
    else{
        console.log('Invalid email or password');
    }

})