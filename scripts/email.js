$(document).ready(function () {
  // Open the popup when the button is clicked
  $('#open-popup').click(function () {
    $('#popup').show();
  });

  // Close the popup when the close button is clicked
  $('.close').click(function () {
    $('#popup').hide();
  });

  let form = document.querySelector("form");
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate the form
    if (validateForm(form)) {
      let data = new FormData(form);
      fetch('https://script.google.com/macros/s/AKfycbyBMFAJ2ATfatsCbFKWLtLfcF1aerWRYRgvbjxgKsIeLdMNVpSZKCz_OoFYWAjvauEJjA/exec', { method: "POST", body: data })
        .then(res => res.text())
        .then(async data => {
          console.log(data);
          if (data === "Success") {
            $('#success-message').show();
            form.reset();
            await new Promise(r => setTimeout(r, 5000));
            $('#popup').hide();
          }
        });
    }
  });

  // Form validation function
  function validateForm(form) {
    let isValid = true;

    // Validate required fields
    form.querySelectorAll('input[required], textarea[required]').forEach(field => {
      if (field.value.trim() === '') {
        isValid = false;
        field.classList.add('invalid');
      } else {
        field.classList.remove('invalid');
      }
    });

    return isValid;
  }
});
