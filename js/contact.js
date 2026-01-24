document.getElementById('form_submit_btn').addEventListener('click', function (e) {
    if (e) e.preventDefault();

    const form = document.getElementById('contact_form');
    const result = document.getElementById('form_result');
    const submitBtn = document.getElementById('form_submit_btn');
    const originalBtnText = submitBtn.innerHTML;

    // Security: Input Sanitization function
    const sanitize = (str) => {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    };

    const nameInput = document.getElementById('form_name');
    const emailInput = document.getElementById('form_email');
    const subjectInput = document.getElementById('form_subject');
    const messageInput = document.getElementById('form_message');

    // Basic validation
    if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
        result.innerHTML = '<div class="alert alert-danger">Please fill in all required fields.</div>';
        return;
    }

    const name = sanitize(nameInput.value);
    const email = sanitize(emailInput.value);
    const subject = sanitize(subjectInput.value);
    const message = sanitize(messageInput.value);

    // Security: Regex Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        result.innerHTML = '<div class="alert alert-danger">Please enter a valid email address.</div>';
        return;
    }

    if (name.length < 2 || message.length < 5) {
        result.innerHTML = '<div class="alert alert-danger">Please fill in all fields correctly to avoid spam.</div>';
        return;
    }

    // Prepare Data
    const formData = new FormData();
    formData.append('access_key', 'c7c7407a-20ed-489f-a310-2560c66cf8c5');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    // Honeypot check
    const botcheck = form.querySelector('input[name="botcheck"]');
    if (botcheck && botcheck.checked) {
        return;
    }

    // Show loading state
    submitBtn.innerHTML = '<span>Sending...</span>';
    submitBtn.disabled = true;

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
        .then(async (response) => {
            const json = await response.json();
            if (response.status == 200) {
                result.innerHTML = '<div class="alert alert-success">' + json.message + '</div>';
                form.reset();
            } else {
                console.log(response);
                let message = json.message;
                if (!message && json.errors && json.errors.length > 0) {
                    message = json.errors.map(err => err.message).join('<br>');
                }
                result.innerHTML = '<div class="alert alert-danger">' + (message || 'Something went wrong') + '</div>';
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = '<div class="alert alert-danger">Something went wrong!</div>';
        })
        .finally(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;

            // Hide message after 5 seconds
            setTimeout(() => {
                result.innerHTML = '';
            }, 5000);
        });
});
