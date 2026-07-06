import { navigate } from "../router.js";
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
        const self = this
        this.box = document.querySelector('.current-top');
        // this.box.addEventListener('click',function(e){
        //     window.location.href = '/updatebalance'
        // })
        this.recentTransaction = document.querySelector('#recent-transaction')
        const saved = JSON.parse(localStorage.getItem('transaction'))
        console.log(saved)
        // const parsedData = JSON.parse(saved);
        if(saved){
            appState.transaction = saved
        }
   
        
    appState.transaction.map((trans,index) => {
            this.recentTransaction.innerHTML += (`
                <div data-index=${index} class='recent-content'>
                <p class='test'>${trans.title}</p>
                <p>${trans.amount}</p>
               <p>${trans.status}</p>
                <p>${trans.category}</p>
                <p>${trans.note}</p>
                </div>
                `)
        }).join()

        this.eachContent = document.querySelectorAll('.recent-content')
        const some = document.querySelectorAll('.test')

  this.eachContent.forEach((item) => 
    item.addEventListener('click',function() {
 
        const idToDel = this.dataset.index

        // this.eachContent.forEach((some) => console.log(some))
      
        // console.log(this.eachContent)

        self.deleteRecent(Number(idToDel))
        // this.deleteRecent(idToDel)

    })
    
)
//    this.eachContent.addEventListener('click',function(){
    //     console.log('is that clicked')
    //     const idToDel = this.dataset.index
    //    const deletedTrancation = appState.transaction.filter((_,i) => {
        //         return i !== idToDel
    //     })
    
    //     appState.transaction = deletedTrancation
    //     console.log(deletedTrancation)
    //     console.lof(appState)
    //    })
    
    
    // this.recentTransaction.appendChild(newTransaction)
}
deleteRecent(idToDel){
    const filteredTransaction = this.state.transaction.filter((_,i) => {
        return i !== idToDel
    })
    this.state.transaction = filteredTransaction;
    localStorage.removeItem('transaction');
    localStorage.setItem('transaction',JSON.stringify(this.state.transaction))
    navigate('dashboard.html')
}
}