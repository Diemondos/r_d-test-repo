const user = {
    firstName: "Іван",
    lastName: "Петренко",
    age: 25,
    address: {
        city: "Київ",
        street: "Хрещатик",
        house: 12
    },

    // Гетер для повного імені
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Сетер для повного імені (рядок "Ім'я Прізвище")
    set fullName(value) {
        const parts = value.split(" ");
        if (parts.length >= 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        }
    },

    // Функція для отримання summary
    getSummary() {
        return `${this.fullName}, ${this.age} років, проживає у місті ${this.address.city}, вул. ${this.address.street}, буд. ${this.address.house}`;
    }
};

// Використання гетера
console.log("Повне ім'я:", user.fullName);

// Використання сетера
user.fullName = "Олександр Коваль";
console.log("Нове ім'я:", user.fullName);

// Виклик методу
console.log("Summary:", user.getSummary());
