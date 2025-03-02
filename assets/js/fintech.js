document.getElementById('addMoney').addEventListener('click', function (e) {
    e.preventDefault();
    const addMoneyForm = document.getElementById('add-money');
    addMoneyForm.classList.remove('hidden');
    const addBalance = document.getElementById('btnSubmit');
    addBalance.addEventListener('click', function (e) {
        e.preventDefault();
        const amount = document.getElementById('amount').value;
        const pinNumber = document.getElementById('pinNumber').value;
        if (pinNumber === '1234') {
            addMoneyForm.classList.add('hidden');
            const preBalance = document.getElementById('preBalance').innerText;
            const newBalance = parseFloat(preBalance) + parseFloat(amount);
            document.getElementById('preBalance').innerText = newBalance;

        } else {
            alert('Invalid pin number');
        }
    });


});




