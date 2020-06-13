const users = [
    {
        name: "Salvio",
        income: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: "Marcio",
        income: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: "Lucia",
        income: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
];

function calcBalance(income, expenses) {
    const sumIncome = sumNumbers(income);
    const sumExpenses = sumNumbers(expenses);

    return sumIncome - sumExpenses;
}

function sumNumbers(numbers) {
    let amount = 0;

    for (let i = 0; i < numbers.length; i++) {
        amount = amount + numbers[i];
    }    

    return amount;
}

for (let user of users) {
    const balance = calcBalance(user.income, user.expenses);

    if (balance > 0) {
        console.log(`${user.name} has positive balance of ${balance.toFixed(2)}`);
    } else {
        console.log(`${user.name} has negative balance of ${balance.toFixed(2)}`);
    }
}