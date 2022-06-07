
import UserService from './services/userService.js';



document.getElementById('form-crear')
    .addEventListener('submit', e => {
    const nombre = document.getElementById('input-name').value
    const lastn = document.getElementById('input-lastn').value
    const mail = document.getElementById('input-email').value
    const pass = document.getElementById('input-password').value


    const formData = new FormData();
    formData.append('name', nombre);
    formData.append('lastName',lastn);
    formData.append('email', mail);
    formData.append('password',pass);


    const userrService = new UserService();
    userrService.postUser(formData);

    e.preventDefault();
})