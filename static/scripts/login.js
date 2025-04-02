document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    // Получаем значения полей
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Получаем данные из localStorage (временное решение)
    const user = JSON.parse(localStorage.getItem('user'));

    // Проверяем, совпадают ли данные
    if (user && user.username === username && user.password === password) {
        alert('Вход выполнен успешно!');
        window.location.href = 'index.html'; // Перенаправляем на главную страницу
    } else {
        alert('Неверное имя пользователя или пароль!');
    }
});