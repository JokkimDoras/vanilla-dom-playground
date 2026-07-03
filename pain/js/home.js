const buttons = document.querySelectorAll('button')
const registerBtn = document.querySelector('.register-div button')
// loginBtn.forEach((btn) => {
//    if(btn.innerText ==='Login'){
//     btn.addEventListener('click',function(){
//         console.log(this)
//     })
//    }
//    if(btn.innerText ==='Register'){
//     console.log('i got the Register')
//    }
// })

buttons.forEach((btn) => {
    btn.addEventListener('click',function(){
        if(this.innerText == 'Login'){
            window.location.href = '/login.html'
        }
        if(this.innerText == 'Register') window.location.href = '/register.html'
    })
})
