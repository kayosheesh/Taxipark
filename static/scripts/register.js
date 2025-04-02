document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    // Получаем значения полей
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Проверяем, совпадают ли пароли
    if (password !== confirmPassword) {
        alert('Пароли не совпадают!');
        return;
    }

    // Сохраняем данные в localStorage (временное решение)
    const user = {
        username: username,
        email: email,
        password: password,
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Регистрация успешна!');
    window.location.href = 'login.html'; // Перенаправляем на страницу входа
});