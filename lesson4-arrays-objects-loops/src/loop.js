// Цикл від 0 до 9
for (let i = 0; i <= 9; i++) {
    console.log("Ітератор (0-9):", i);
}

console.log("------");

// Цикл від 100 до 0 з кроком 10
for (let i = 100; i >= 0; i -= 10) {
    console.log("Ітератор (100-0):", i);
}

// ======== WHILE ========
console.log("=== Цикл WHILE ===");

let i = 0;

// Цикл виконується, поки умова true
while (i < 5) {
    console.log("Ітерація WHILE:", i);
    i++;
}

// ===== Цикл WHILE =====
console.log("=== Цикл WHILE ===");
let j = 0;
while (j < 5) {
    console.log("WHILE ітерація:", j);
    j++;
}

console.log("------");

// ===== Цикл DO-WHILE =====
console.log("=== Цикл DO-WHILE ===");
let k = 0;
do {
    console.log("DO-WHILE ітерація:", k);
    k++;
} while (k < 5);

console.log("------");

// ===== Різниця між while і do-while =====
console.log("=== Демонстрація різниці ===");
let x = 10;
let y = 10;

while (x < 5) {
    console.log("Це не виконається (while)");
}

do {
    console.log("Це виконається хоча б один раз (do-while)");
} while (y < 5);