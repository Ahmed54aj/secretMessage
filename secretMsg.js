// fetching the hash code from window object
const { hash } = window.location;
// creating message from the encrypted code
const message = atob(hash.replace('#', ''));

if (message) {
document.getElementById('message-form').classList.add('hide');
document.getElementById('message-show').classList.remove('hide');

// sticking message into element
document.getElementById('message-to-user').innerHTML = message;
}



// selecting form
document.querySelector('form').addEventListener('submit', event => {
    // preventing submit
    event.preventDefault();
// hiding the message form
    document.getElementById('message-form').classList.add('hide');
// hiding the link form
    document.getElementById('link-form').classList.remove('hide');

// getting input value
const input = document.getElementById('message-input');
// turning input value into base64 code
const encrypted = btoa(input.value);

// displaying the encrypted code with http
const output = document.getElementById('link-input');
output.value = `${window.location}#${encrypted}`;
output.select();
});