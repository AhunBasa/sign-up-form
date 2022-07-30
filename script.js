let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');

const noMatch = document.createElement('p');
noMatch.classList.add('noMatch');
noMatch.textContent = '* Passwords do not match';

const match = document.createElement('p');
match.classList.add('match');
match.textContent = '* Passwords match'

confirmPassword.addEventListener('input', checkPasswords);
password.addEventListener('input', checkPasswords);

function checkPasswords() {
  console.log(typeof password.value);
  if (confirmPassword.value == '') {return;}

  if (password.value == confirmPassword.value) {
  password.after(match);
  noMatch.remove();
  password.style.borderColor = 'var(--color-green)';
  confirmPassword.style.borderColor = 'var(--color-green)';
    return;
  }
  password.after(noMatch);
  password.style.borderColor = 'var(--color-red)';
  confirmPassword.style.borderColor = 'var(--color-red)';
  match.remove();
}