const person = {
    name: "Дмитро",
    age: 35,
    hobbies: ["читання", "програмування", "спорт"],
    address: {
        city: "Київ",
        street: "Покровська",
        number: 55
    },
    greet: function () {
        console.log(`Привіт! Мене звати ${this.name}, мені ${this.age} років.`);
    },
    showHobbies: function () {
        console.log("Мої хобі:");
        this.hobbies.forEach(hobby => console.log("-", hobby));
    }
};

// Виклики методів
person.greet();
person.showHobbies();
