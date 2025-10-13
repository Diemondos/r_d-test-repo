// Функція, що виконує запит і повертає Promise
function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Помилка HTTP: " + response.status);
            }
            return response.json(); // перетворюємо у JSON
        });
}

// Функція, що обробляє отримані дані
function processData(data) {
    console.log("Отримані дані:", data);
    console.log("Кількість об’єктів:", data.length);
}

// Виклик
fetchData("https://jsonplaceholder.typicode.com/posts")
    .then(json => processData(json))
    .catch(err => console.error("Помилка:", err.message));
