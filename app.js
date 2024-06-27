function withdraw(person, amount) {
    const outputDiv = document.getElementById('output');
    if (amount > person.balance) {
       
        outputDiv.innerHTML = "Withdrawal cannot be processed due to insufficient funds.";
    } else {
        
        person.balance -= amount;
        outputDiv.innerHTML = `Withdrawal successful. New balance is: ${person.balance}`;
    }
}


const person = {
    name: "John Doe",
    balance: 500
};


function testWithdraw(amount) {
    withdraw(person, amount);
    console.log(`Current balance: ${person.balance}`);
}