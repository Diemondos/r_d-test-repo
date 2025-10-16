async function fetchData(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Помилка HTTP: ${response.status}`);
    }

    return response.json();
}

async function getDataWithFallback() {
    try {
        // Навмисно неправильний URL
        const data = await fetchData("https://this-api-does-not-exist.typicode.com/data");
        console.log("Дані з першого запиту:", data);
    } catch (error) {
        console.warn("Перший запит не вдався, спробуємо інший...");

        try {
            const backupData = await fetchData("https://jsonplaceholder.typicode.com/todos");
            console.log("Дані з резервного запиту:", backupData.slice(0, 3));
        } catch (backupError) {
            // Якщо навіть резервний запит не вдався
            throw new Error("Обидва запити не вдалися. Сервер не відповідає.");
        }
    }
}

getDataWithFallback().catch(err => console.error("Кінцева помилка:", err.message));
