document.getElementById('contact_form').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;

    // Security: Input Sanitization function to prevent XSS
    const sanitize = (str) => {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    };

    const name = sanitize(document.getElementById('form_name').value);
    const email = sanitize(document.getElementById('form_email').value);
    const subject = sanitize(document.getElementById('form_subject').value);
    const message = sanitize(document.getElementById('form_message').value);

    // Security: Regex Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const result = document.getElementById('form_result');

    if (!emailRegex.test(email)) {
        result.innerHTML = '<div class="alert alert-danger">Please enter a valid email address.</div>';
        return;
    }

    if (name.length < 2 || message.length < 5) {
        result.innerHTML = '<div class="alert alert-danger">Please fill in all fields correctly (Name > 2 chars, Message > 5 chars).</div>';
        return;
    }

    // Re-pack sanitized data
    const formData = new FormData();
    formData.append('access_key', 'c7c7407a-20ed-489f-a310-2560c66cf8c5');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    // Include honeypot if present (though hidden in UI)
    const botcheck = form.querySelector('input[name="botcheck"]');
    if (botcheck && botcheck.checked) {
        return; // Silent fail for bots
    }
    const submitBtn = form.querySelector('.btn-sumbit');
    const originalBtnText = submitBtn.innerHTML;

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
