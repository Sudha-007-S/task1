const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

const email_error = document.getElementById('email_error');

const pass_error = document.getElementById('pass_error');

form.addEventListener("submit",(e)=>
{
    console.log('check', email.value, password.value, e)
    e.preventDefault();
    const email_check = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!email.value.match(email_check))
        {
            e.preventDefault();
            email_error.innerHTML = "Valid Email is required";
        }
    else
    {
        e.preventDefault();
        email_error.innerHTML="";
    }
    
    const pass_check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[{\]};:'",/?]).{8,}$/;
    if(password.value.match(pass_check))
        {
            e.preventDefault();
            pass_error.innerHTML =""
        }
    else
    {
        e.preventDefault();
        pass_error.innerHTML="at least one uppercase letter, one lowercase letter, one digit, and one special character is required"
    }

    /*if(password.value.length <=5)
        {
            e.preventDefault();
            pass_error.innerHTML = "Password must more than six characters";
        }
    

    else if(password.value.length >=20)
        {
            e.preventDefault();
            pass_error.innerHTML = "Password cannot be more than 20 characters";
        }
    
     if(password.value==="password")
        {
            e.preventDefault();
            pass_error.innerHTML = "Password cannot be password";
        }
    else
        {
            e.preventDefault();
            pass_error.innerHTML="";
        }*/
            
});

