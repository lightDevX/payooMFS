document.getElementById('btn-login')
    .addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Button clicked');

        const phoneNumber = document.getElementById('phone-number').value;
        console.log(phoneNumber);


    });
