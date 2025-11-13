

document.getElementById('add-money').addEventListener('click',function(event){
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const convertedAmount = parseInt(amount);

    const pint = document.getElementById('pin').value;
    const convertedPin = parseInt(pint);

    const mainBalance = document.getElementById('main-balance').innerText

    const convertedMainBalance = parseInt(mainBalance);

    if (convertedPin === 123456) {
        const newBalance = convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = newBalance;
    } else {
        alert('Invalid Pin! Please try again.');
    }
})

document.getElementById('add-money-btn').addEventListener('click', function(){
    document.getElementById('add-money-section').style.display = 'block';
    document.getElementById('cash-out-section').style.display = 'none';
});

document.getElementById('cash-out-btn').addEventListener('click', function(){
    document.getElementById('cash-out-section').style.display = 'block';
    document.getElementById('add-money-section').style.display = 'none';
}); 
