document.getElementById('contact_form').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const result = document.getElementById('form_result');
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
                result.innerHTML = '<div class="alert alert-danger">' + json.message + '</div>';
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
