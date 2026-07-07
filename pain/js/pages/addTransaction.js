import { appState } from "../state.js";
import { navigate } from "../router.js";
// export function addTransaction() {
//   return `
//     <form class='transaction-form'>
//     <h1>Add Transaction</h1>
//     <label>Title</label>
//     <input id='title'/>
//     <label>Amount</label>
//     <input id='amount' type='number'/>
//     <label>Type</label>
//     <select id='status' name='status' required>
//       <option value="income">Income</option>
//       <option value="expense">Expense</option>
//     </select>
//     <label>Category</label>
//     <input id='category'/>
//     <label>Note</label>
//     <input id='note'/>
//     <button>ADD</button>
//     </form>   
//     `;
// }

// export class initNewTransaction() {
//   const title = document.querySelector("#title");
//   const amount = document.querySelector("#amount");
//   const category = document.querySelector("#category");
//   const status = document.querySelector("#status");
//   const note = document.querySelector("#note");

//   title.addEventListener('keyup',function(){
//     console.log(this.value)
//   })
//   console.log("title", title);
//   console.log("amount", amount);
//   console.log("status", status);
//   console.log("category", category);
//   console.log("note", note);
// }

export class TransactionForm {
    constructor() {
        this.titleEl = null;
        this.amountEl = null;
        this.categoryEl = null;
        this.statusEl = null;
        this.noteEl = null;
        this.formEl = null;
    }

    render() {
        return `
    <form class='transaction-form'>
    <h1>Add Transaction</h1>
    <label>Title</label>
    <input id='title'/>
    <label>Amount</label>
    <input id='amount' type='number'/>
    <label>Type</label>
    <select id='status' name='status' required>
      <option value="income">Income</option>
      <option value="expense">Expense</option>
    </select>
    <label>Category</label>
    <input id='category'/>
    <label>Note</label>
    <input id='note'/>
    <button>ADD</button>
    </form>   
    `;
    }

    init() {
        this.titleEl = document.querySelector('#title');
        this.amountEl = document.querySelector('#amount');
        this.statusEl = document.querySelector('#status');
        this.categoryEl = document.querySelector('#category');
        this.noteEl = document.querySelector('#note');
        this.formEl = document.querySelector('form');

        this.titleEl.addEventListener('keyup', function () {
            console.log(this.value)
        })

        this.formEl.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        })

    }


    handleSubmit() {
        if (this.titleEl.value == '' ||
            this.amountEl.value == '' ||
            this.categoryEl.value == '' ||
            this.noteEl.value == '') {

            return;
        }

        const newTranaction = {
            title: this.titleEl.value,
            amount: this.amountEl.value,
            status: this.statusEl.value,
            category: this.categoryEl.value,
            note: this.noteEl.value
        }

        const isThatIncome = this.statusEl.value === 'income';
        // console.log(this.statusEl.value)
        // console.log(appState.startBalance)
        // console.log(appState.income)
        const totalIncome = Number(appState.income) + (isThatIncome ? Number(this.amountEl.value) : 0)
        // window.console.log(typeof appState.income)
        // console.log(typeof totalIncome)
        appState.income = totalIncome;

        // console.log(appState)
        appState.addTransaction(newTranaction)
        this.titleEl.value = ''
        this.amountEl.value = ''
        this.categoryEl.value = ''
        this.noteEl.value = ''

        localStorage.setItem('transaction', JSON.stringify(appState.transaction))
        //   console.log('find truth',localStorage)
        navigate('dashboard.html')
    }
}


