
// Toggle sections (unchanged)
document.getElementById('cash-out-btn').addEventListener('click', function () {
    document.getElementById('cash-out').style.display = 'block';
    document.getElementById('add-money').style.display = 'none';
});

document.getElementById('add-money-btn').addEventListener('click', function () {
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('add-money').style.display = 'block';
});

// Add money (your working version - kept as-is)
document.querySelectorAll('.add-money p').forEach(function (element) {
    element.addEventListener('click', function (event) {
        let amount = event.target.getAttribute('value');

        document.getElementById('add-btn').addEventListener('click', function () {
            const mainBalance = document.getElementById('main-balance').innerText;
            const newBalance = parseInt(mainBalance) + parseInt(amount);
            document.getElementById('main-balance').innerText = newBalance;
        });

    });
});


// CASH OUT - FIXED IN YOUR STYLE
let selectedCashOutAmount = null; // Store selected amount

document.querySelectorAll('.cash-out p').forEach(function (element) {
    element.addEventListener('click', function (event) {
        selectedCashOutAmount = event.target.getAttribute('value'); // Save selected amount

        // Remove old listener to avoid duplicates
        const cashOutBtn = document.getElementById('cash-out-btn'); // or your actual cash-out submit button
        cashOutBtn.onclick = null; // Clear previous

        // Add new click handler for cash out
        cashOutBtn.addEventListener('click', function () {
            if (!selectedCashOutAmount) return;

            const mainBalance = document.getElementById('main-balance').innerText;
            const current = parseInt(mainBalance);
            const withdraw = parseInt(selectedCashOutAmount);

            if (current < withdraw) {
                alert("Not enough balance!");
                return;
            }

            const newBalance = current - withdraw;
            document.getElementById('main-balance').innerText = newBalance;

            // Optional: reset selection
            selectedCashOutAmount = null;
        });
    });
});
