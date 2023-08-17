const   firstName = document.querySelector('#firstName'),
        lastName = document.querySelector('#lastName'),
        email = document.querySelector('#email'),
        password = document.querySelector('#passwordInput'),
        confirmPassword = document.querySelector('#confirmPasswordInput'),
        submitBtn = document.querySelector('#submit'),
        fnErrorMsg = document.querySelector('#firstNameErrorMessage'),
        lnErrorMsg = document.querySelector('#lastNameErrorMessage'),
        emailErrorMsg = document.querySelector('#emailErrorMessage'),
        passwordErrorMsg = document.querySelector('#passwordErrorMessage'),
        confirmPasswordErrorMsg = document.querySelector('#confirmPasswordErrorMessage'),
        emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
        passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (firstName.value === '') {
    fnErrorMsg.innerText = 'Please enter your first name';
    fnErrorMsg.classList.add('error');
  } else if (firstName.value.trim().length < 3) {
    fnErrorMsg.innerText = 'Name must be at least 3 characters';
    fnErrorMsg.classList.add('error');
  } else {
    fnErrorMsg.innerText = '';
  }

  if (lastName.value === '') {
    lnErrorMsg.innerText = 'Please enter your last name';
    lnErrorMsg.classList.add('error');
  } else if (lastName.value.trim().length < 3) {
    lnErrorMsg.innerText = 'Name must be at least 3 characters';
    lnErrorMsg.classList.add('error');
  }else{
    lnErrorMsg.innerText = '';
  }

  if (email.value === '') {
    emailErrorMsg.innerText = 'Please enter your email address';
    emailErrorMsg.classList.add('error');
  } else if (email.value.trim().length < 3) {
    emailErrorMsg.innerText = 'Name must be at least 3 characters';
    emailErrorMsg.classList.add('error');
  }else if (!email.value.match(emailPattern)){
    emailErrorMsg.innerText = 'Please enter a valid email';
    emailErrorMsg.classList.add('error');
  }else{
    emailErrorMsg.innerText = '';
  }

  if (password.value === '') {
    passwordErrorMsg.innerText = 'Please enter a password';
    passwordErrorMsg.classList.add('error');
  } else if (!password.value.match(passwordPattern)){
    passwordErrorMsg.innerText = 'Please enter atleast 8 charatcer with number, symbol, small and capital letter.';
    passwordErrorMsg.classList.add('error');
  }else{
    passwordErrorMsg.innerText = '';
  }

  if (confirmPassword.value !== password.value) {
    confirmPasswordErrorMsg.innerText = "Password don't match";
    confirmPasswordErrorMsg.classList.add('error');
  } else{
    confirmPasswordErrorMsg.innerText = '';
  }
 
});

const showHiddenPass = (passwordInput, eye) =>{
    const password = document.querySelector('#passwordInput'),
          iconEye = document.querySelector('#eye')
 
    iconEye.addEventListener('click', () =>{
       if(password.type === 'password'){
          password.type = 'text'

          iconEye.classList.add('bx-hide')
          iconEye.classList.remove('bx-show')
       } else{
          password.type = 'password'
 
          iconEye.classList.remove('bx-hide')
          iconEye.classList.add('bx-show')
       }
    })
 }
 
 showHiddenPass('passwordInput','eye')

 const showHiddenConfirmPass = (confirmPasswordInput, confirmEye) =>{
    const confirmPassword = document.querySelector('#confirmPasswordInput'),
          confirmIconEye = document.querySelector('#confirmEye')
 
    confirmIconEye.addEventListener('click', () =>{
       if(confirmPassword.type === 'password'){
          confirmPassword.type = 'text'

          confirmIconEye.classList.add('bx-hide')
          confirmIconEye.classList.remove('bx-show')
       } else{
          confirmPassword.type = 'password'

          confirmIconEye.classList.remove('bx-hide')
          confirmIconEye.classList.add('bx-show')
       }
    })
 }
 
 showHiddenConfirmPass('confirmPasswordInput','confirmEye');