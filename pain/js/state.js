// export const appState = {
//     startBalance:2000,
//     transaction: []
// }

class State {
    constructor(){
        this.startBalance = localStorage.getItem('startbalance') || 0;
        this.transaction = [];
    }
    updateStartBalance(amount){
        this.startBalance = Number(amount || 0); 
    }
    addTransaction(arr){
        this.transaction.push(arr)
    }
}

export const appState = new State()