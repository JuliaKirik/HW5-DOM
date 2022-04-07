function result(){
const userName = document.querySelector('#userName').value;
const password = document.querySelector('#password').value;

const element = document.querySelector('.result');
element.innerHTML = `Your user name is "${userName}" and your password is "${password}"`

localStorage.setItem('user', JSON.stringify({name: userName, password: password}))
}
const button = document.querySelector('.btn');
button.addEventListener('click', result);