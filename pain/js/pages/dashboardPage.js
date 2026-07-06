import { appState } from "../state.js"
export class dashboardPage{
    constructor(){
      this.state = appState;
    }
    render(){
        return `
        <div class='dash-page'>

        <div class='top'>

        <div class='current-box'>
        <h4 >Current Balance:<strong>${this.state.startBalance}</strong></h4>
        </div>
        <div  class='income-box'>
        <h4>Income:${this.state.startBalance}</h4>
        </div>
        <div class='expense-box'>
        <h4 >Expense:12,000</h4>
        </div>

        </div>

        <div class='middle'>

        <div></div>
        <div></div>

        </div>

        <div class='bottom'>
        <div id='recent-transaction'>
        <div id='recent-title'>
        <strong>Title</strong>
        <strong>Amount</strong>
        <strong>Category</strong>
        <strong>Status</strong>
        <strong>Note</strong>
        </div>

        
        </div>
    
        </div>

        </div>
        `
    }

    stuff(){
        this.box = document.querySelector('.current-top');
        // this.box.addEventListener('click',function(e){
        //     window.location.href = '/updatebalance'
        // })
        this.recentTransaction = document.querySelector('#recent-transaction')
        
    appState.transaction.map((trans) => {
            this.recentTransaction.innerHTML += (`
                <div id='recent-content'>
                <p>${trans.title}</p>
                <p>${trans.amount}</p>
               <p>${trans.status}</p>
                <p>${trans.category}</p>
                <p>${trans.note}</p>
                </div>

                `)
        }).join()

       

        // this.recentTransaction.appendChild(newTransaction)
    }
}