// Accessing buttons
const topButton = document.querySelector('.top-submit-btn');
const btmButton = document.querySelector('.btm-submit-btn');

// Accessing input fields
const fnameInput = document.querySelector('.fname-field');
const lnameInput = document.querySelector('.lname-field');
const emailInput = document.querySelector('.email-field');
const pwdInput = document.querySelector('.pwd-field');

// Acessing First Name error/success messages
const fnameErrorMessage = document.querySelector('.fname-error-message');
const fnameSuccessMessage = document.querySelector('.fname-success-message');

// Accessing Last Name error/success messages
const lnameErrorMessage = document.querySelector('.lname-error-message');
const lnameSuccessMessage = document.querySelector('.lname-success-message');

// Accessing Email error/success messages
const emailErrorMessage = document.querySelector('.email-error-message');
const emailSuccessMessage = document.querySelector('.email-success-message');

// Accessing Password error/success messages
const pwdErrorMessage = document.querySelector('.pwd-error-message');
const pwdSuccessMessage = document.querySelector('.pwd-success-message');

const log = event => {
   const namePattern = new RegExp("[0-9]");
   const nameResponse = namePattern.test(fnameInput.value, lnameInput.value);
   const emailPattern = new RegExp("@");
   const emailResponse = emailPattern.test(emailInput.value);
   const pwdPattern = new RegExp("\w");
   const pwdResponse = pwdPattern.test(pwdInput.value);
  
  // Conditions for first name
  if (fnameInput.value === '') {
    fnameErrorMessage.textContent = 'First Name cannot be empty';
    fnameErrorMessage.classList.add('error-txt');
    fnameInput.classList.add('failed');
    event.preventDefault();
  } else if (nameResponse === true) {
    fnameErrorMessage.textContent = 'This is not a valid first name';
    fnameErrorMessage.classList.add('error-txt');
    fnameInput.classList.add('failed');
    event.preventDefault();
  } else {
    fnameSuccessMessage = 'First Name OK'
    fnameInput.classList.add('success');
    fnameErrorMessage.classList.add('success-txt');
    event.preventDefault();
  }
  
  // Conditions for last name
  if (lnameInput.value === '') {
    lnameErrorMessage.textContent = 'Last Name cannot be empty';
    lnameErrorMessage.classList.add('error-txt');
    lnameInput.classList.add('failed');
    event.preventDefault();
  } else if (nameResponse === true) {
    lnameErrorMessage.textContent = 'This is not a valid last name';
    lnameErrorMessage.classList.add('error-txt');
    lnameInput.classList.add('failed');
    event.preventDefault();
  } else {
    lnameSuccessMessage = 'Last Name OK';
    lnameInput.classList.add('success');
    lnameErrorMessage.classList.add('success-txt');
    event.preventDefault();
  }
  
  // Condition for email address
  if (emailInput.value === '') {
    emailErrorMessage.textContent = 'Email Address cannot be empty';
    emailErrorMessage.classList.add('error-txt');
    emailInput.classList.add('failed');
    event.preventDefault();
  } else if (emailResponse === false) {
    emailErrorMessage.textContent = 'Looks like this is not an email';
    emailErrorMessage.classList.add('error-txt');
    emailInput.classList.add('failed');
    event.preventDefault();
  } else {
    emailSuccessMessage = 'Email OK';
    emailInput.classList.add('success');
    emailErrorMessage.classList.add('success-txt');
    event.preventDefault();
  }
  
  // Conditions for password
  if (pwdInput.value === '') {
    pwdErrorMessage.textContent = 'Password cannot be empty';
    pwdErrorMessage.classList.add('error-txt');
    pwdInput.classList.add('failed');
    event.preventDefault();
  } else if (pwdResponse === false ) {
    pwdErrorMessage.textContent = 'Password has to be at least 8 or more characters';
    pwdErrorMessage.classList.add('error-txt');
    pwdInput.classList.add('failed');
    event.preventDefault();
  } else {
    pwdSuccessMessage = 'Password OK';
    pwdInput.classList.add('success');
    pwdErrorMessage.classList.add('success-txt');
    event.preventDefault();
  }
}

btmButton.addEventListener('click', event => log(event));

topButton.addEventListener('click', event => log(event));