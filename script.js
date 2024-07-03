function calculateBalance() {
    const credit = parseFloat(document.getElementById('credit').value) || 0;
    const debit = parseFloat(document.getElementById('debit').value) || 0;

    const currentBalance = localStorage.getItem('balance') ? parseFloat(localStorage.getItem('balance')) : 0;
    const total = localStorage.getItem('totalRecited') ? parseFloat(localStorage.getItem('totalRecited')) : 0;

    let newBalance = currentBalance + credit - debit;
    let totalCount = total+credit;

    localStorage.setItem('balance', newBalance);
    localStorage.setItem('totalRecited', totalCount);

    document.getElementById('balance').textContent = `${newBalance}`;
    document.getElementById('totalRecited').textContent = `${totalCount}`;
    document.getElementById('credit').value='';
    document.getElementById('debit').value='';
}
window.onload=calculateBalance;
