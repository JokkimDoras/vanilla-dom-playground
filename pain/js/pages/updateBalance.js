import { appState } from "../state.js"

export class UpdateBalance {
    constructor(){
      this.state = appState
    }

    render(){
        return `
        <form class='update-form'>
        <h1>Your Starting Balance is ${this.state.startBalance}</h1>
        <h1 class='inp-show'>Your Current Balance is ${this.state.startBalance}</h1>
        <input type='number' id='current-input' />
        <button>Update</button>
        </form>
        `
    }
    initBalance(){
       this.balanceForm = document.querySelector('.update-form')
       this.currentBalanceInp = document.querySelector('#current-input')
       this.dynamicShow = document.querySelector('.inp-show')


       
       this.currentBalanceInp.addEventListener('keyup',() =>{
        this.dynamicShow.textContent = `Your Current Balance is ${this.currentBalanceInp.value || this.state.startBalance}`
       })

       this.balanceForm.addEventListener('submit',(e) =>{
           e.preventDefault();
           this.state.startBalance = Number(this.currentBalanceInp.value)
           console.log(appState)
       })
    }
}