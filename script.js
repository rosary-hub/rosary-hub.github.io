function calculateBalance() {
    const credit = parseFloat(document.getElementById('credit').value) || 0;
    const debit = parseFloat(document.getElementById('debit').value) || 0;

    const currentBalance = localStorage.getItem('balance') ? parseFloat(localStorage.getItem('balance')) : 0;
    let newBalance = currentBalance + credit - debit;

    localStorage.setItem('balance', newBalance);

    document.getElementById('balance').textContent = `Your current balance is: ${newBalance}`;
    document.getElementById('credit').value='';
    document.getElementById('debit').value='';
}
