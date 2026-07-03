const usernameInput = document.querySelectorAll("form input");
const submitForm = document.querySelector('form');

let userInput = "";
let userPass = "";
usernameInput.forEach((inp) => {
  inp.addEventListener("keyup", function () {
    if (this.classList[0] == "user") {
      userInput = this.value;
    }
    if (this.classList[0] == "pass") {
      userPass = this.value;
    }
  });
});

submitForm.addEventListener('submit',function (e) {
   e.preventDefault();
   if(userInput === 'pain' && userPass === '67'){
    window.location.href = '/dashboard.html'
    return
   }
   const isThere = submitForm.querySelector('.wrong')
   if(isThere) {
    userInput = '';
    userPass = '';
    return
   }
   const newTag = document.createElement('p')
   newTag.innerText = 'Dumb ass the pass is 67 and username is pain'
   newTag.classList.add('wrong')
   submitForm.append(newTag)
   userInput = '';
   userPass = '';

})


