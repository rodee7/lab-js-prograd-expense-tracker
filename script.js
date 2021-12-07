let balance = 0
let income = 0
let expense = 0 

function expenseTracker()
{
    // Declaring variables
    let transaction = document.querySelector('#text').value
    let amount = parseFloat(document.querySelector('#amount').value)

    // Storing Transaction details to Local Storage
    localStorage.setItem(transaction, amount)

    // Calculating Balance
    balance += parseFloat(localStorage.getItem(transaction)) 
    document.getElementById('balance').innerHTML= "$" + balance

        //   Updating the Income Transaction History
    if(amount > 0)
    {   
        
        document.getElementById('list').innerHTML+=`<li class="plus">${transaction}  +${amount}</li>`
        income+= parseFloat(localStorage.getItem(transaction))
        document.getElementById('money-plus').innerHTML= "$" + income
        
        // Clearing the Text and Amount Fields
        document.querySelector('#text').value = ""
        document.querySelector('#amount').value = ""                    
    }
    //   Updating the Expense Transaction History
    else
    {   
        document.getElementById('list').innerHTML+=`<li class="minus">${transaction}  ${amount}</li>`
        expense+= parseFloat(localStorage.getItem(transaction))
        document.getElementById('money-minus').innerHTML= "$" + expense
        
        // Clearing the Text and Amount Fields
        document.querySelector('#text').value = ""
        document.querySelector('#amount').value = ""            
    }   
}
