document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // zatrzymuje domyślną akcję formularza

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const country = document.getElementById('country').value;
    const errorMsg = document.getElementById('errorMsg');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMsg.textContent = 'Podaj poprawny adres email.';
      return;
    }
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
      errorMsg.textContent = 'Hasło musi mieć min. 8 znaków, 1 cyfrę i 1 znak specjalny.';
      return;
    }

    if (country === '') {
      errorMsg.textContent = 'Wybierz kraj.';
      return;
    }

    errorMsg.textContent = '';
    alert('Rejestracja zakończona sukcesem!');
  });