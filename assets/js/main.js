document.getElementById('btn-login')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin').value;

        if (phoneNumber === '01713788801' && pinNumber === '1234') {
            window.location.href = '/dashboard.html';
        } else {
            alert('Invalid phone number or pin');
        }

    });
