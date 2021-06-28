const form = document.getElementById('form')
const userName = document.getElementById('user-name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const retypePass = document.getElementById('password2')

//console.log(form, userName, email, password, retypePass)

function displayError(input, msg){
             input.parentElement.className = 'form-group error'
             const small = input.parentElement.querySelector('small')
             small.innerText = msg
}

function displaySuccess(input){
      input.parentElement.classList.add('success')
}

// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

function checkInput(input){
     if(input.value == ''){
             displayError(input, 'is required');
       }else{
             displaySuccess(input)
       }
}

//check password match
function checkPassLegth(input, min, max){
      if(input.value.length < min){
            displayError(input, `Password length must be ${min} characters long!`);
      }else if(input.value.length > max){
            displayError(input, `Password leangth must be less then ${max} characters!`);
      }else{
            displaySuccess(input);
      }
}
//check password retype

function checkPassMatch(inputOne, inpuTwo){
      if(inputOne.value !== inpuTwo.value){
            displayError(inpuTwo, `Password dosen't match`);
      }
      else{
            displaySuccess(inputTwo)
      }
}

form.addEventListener('submit', (event) => {
      event.preventDefault();
      //console.log(event)
      //  if(userName.value == ''){
      //        displayError(userName, 'Username is required');
      //  }else{
      //        displaySuccess(userName)
      //  }
      //  if(email.value == ''){
      //       displayError(email, 'Email is required')

      //  }
      //  else if(!validateEmail(email.value)){
      //        //displayError(email, 'Please input a valid email')
      //        console.log(validateEmail(email.value))
      //  }
       
      //  else{
      //        displaySuccess(email)
      //  }
      //  if(password.value == ''){
      //        displayError(password, 'You must type a password!')
      //  }else{
      //        displaySuccess(password)
      //  }
      //  if(retypePass.value == ''){
      //        displayError(retypePass, 'Re-Type your password!')
      //  }else{
      //        displaySuccess(retypePass)
      //  }

      //checkInput(userName)
       checkPassLegth(userName, 4, 10)
      checkInput(email)
     
      //checkInput(password)
      checkPassLegth(password, 8, 15)
      //checkInput(retypePass)
      checkPassMatch(password, retypePass)


})