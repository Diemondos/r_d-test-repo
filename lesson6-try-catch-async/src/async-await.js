// Асинхронна функція для запиту
async function fetchData(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Помилка HTTP: " + response.status);
    }

    const data = await response.json();
    return data;
}

// Функція для обробки даних
function processData(data) {
    console.log("Отримані дані:", data);
    console.log("Перший елемент:", data[0]);
}

// Головна асинхронна функція
async function main() {
    try {
        const data = await fetchData("https://jsonplaceholder.typicode.com/users");
        processData(data);
    } catch (error) {
        console.error("Помилка:", error.message);
    }
}

main();
